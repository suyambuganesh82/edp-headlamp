import { useForm } from 'react-hook-form';
import { FormSelect } from '../../../../../../components/FormComponents';
import { PIPELINE_TYPES } from '../../../../../../constants/pipelineTypes';
import { usePipelineByTypeListQuery } from '../../../../../../k8s/Pipeline/hooks/usePipelineByTypeListQuery';
import { MuiCore, React } from '../../../../../../plugin.globals';
import { createRandomFiveSymbolString } from '../../../../../../utils/createRandomFiveSymbolString';
import { useCDPipelineContext } from '../../../../providers/CDPipeline/hooks';
import { useCDPipelineStageContext } from '../../../../providers/CDPipelineStage/hooks';
import { useCreateDeployPipelineRun } from './hooks/useCreateDeployPipelineRun';
import { PipelineRunTriggerProps } from './types';

const { Grid, Button } = MuiCore;

const pipelineNameFieldName = 'pipelineName';

export const PipelineRunTrigger = ({
    namespace,
    runActionIsEnabled,
    enrichedApplicationsWithArgoApplications,
}: PipelineRunTriggerProps): React.ReactElement => {
    const { stage } = useCDPipelineStageContext();
    const { CDPipeline } = useCDPipelineContext();

    const {
        control,
        formState: { errors },
        watch,
    } = useForm();

    const { data: pipelines } = usePipelineByTypeListQuery({
        props: {
            pipelineType: PIPELINE_TYPES.DEPLOY,
        },
    });

    const pipelineOptions = React.useMemo(
        () =>
            pipelines && pipelines?.items?.length
                ? pipelines?.items.map(({ metadata: { name } }) => ({
                      label: name,
                      value: name,
                  }))
                : [],
        [pipelines]
    );

    const pipelineNameFieldValue = watch(pipelineNameFieldName);

    const { createDeployPipelineRun } = useCreateDeployPipelineRun({});

    const codebaseTag = React.useMemo(() => {
        return (
            enrichedApplicationsWithArgoApplications &&
            enrichedApplicationsWithArgoApplications
                .reduce((acc, { application, argoApplication }) => {
                    if (!argoApplication) {
                        return [];
                    }

                    const deployedVersion =
                        argoApplication?.spec?.source?.helm?.parameters?.find(
                            el => el.name === 'image.tag'
                        )?.value || '';

                    const appTag = `${application?.metadata.name}=${deployedVersion}`;
                    acc.push(appTag);
                    return acc;
                }, [])
                .join(' ')
        );
    }, [enrichedApplicationsWithArgoApplications]);

    const randomPostfix = createRandomFiveSymbolString();

    const handleRunClick = React.useCallback(async (): Promise<void> => {
        await createDeployPipelineRun({
            namespace,
            pipelineName: pipelineNameFieldValue,
            stageName: stage.spec.name,
            CDPipelineName: CDPipeline.metadata.name,
            randomPostfix,
            codebaseTag,
        });
    }, [
        CDPipeline,
        stage,
        codebaseTag,
        createDeployPipelineRun,
        namespace,
        pipelineNameFieldValue,
        randomPostfix,
    ]);

    return (
        <form>
            <Grid container spacing={2} alignItems={'center'}>
                <Grid item style={{ flexGrow: 1 }}>
                    <FormSelect
                        control={control}
                        errors={errors}
                        name={pipelineNameFieldName}
                        options={pipelineOptions}
                        disabled={pipelineOptions && !pipelineOptions.length}
                        placeholder={'Select pipeline name'}
                    />
                </Grid>
                <Grid item>
                    <Button
                        component={'button'}
                        type={'button'}
                        variant={'contained'}
                        color={'primary'}
                        size={'small'}
                        disabled={!runActionIsEnabled || !pipelineNameFieldValue}
                        onClick={handleRunClick}
                    >
                        Run
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};
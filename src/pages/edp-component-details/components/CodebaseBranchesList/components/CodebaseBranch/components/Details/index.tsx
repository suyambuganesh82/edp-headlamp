import { NameValueTable } from '@kinvolk/headlamp-plugin/lib/components/common';
import { Grid, Link } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { PIPELINE_TYPES } from '../../../../../../../../constants/pipelineTypes';
import { PIPELINE_RUN_LABEL_SELECTOR_PIPELINE_TYPE } from '../../../../../../../../k8s/PipelineRun/labels';
import { PipelineRunKubeObjectInterface } from '../../../../../../../../k8s/PipelineRun/types';
import { useSecretByNameQuery } from '../../../../../../../../k8s/Secret/hooks/useSecretByName';
import { FormSelect } from '../../../../../../../../providers/Form/components/FormSelect';
import { capitalizeFirstLetter } from '../../../../../../../../utils/format/capitalizeFirstLetter';
import { PipelineRunList } from '../../../../../../../../widgets/PipelineRunList';
import { EDPComponentDetailsRouteParams } from '../../../../../../types';
import { useMainInfoRows } from './hooks/useMainInfoRows';
import { DetailsProps } from './types';

const pipelineRunTypes = Object.entries(PIPELINE_TYPES).filter(
    ([, value]) => value !== PIPELINE_TYPES.DEPLOY && value !== PIPELINE_TYPES.AUTOTEST_RUNNER
);
const pipelineRunTypeSelectOptions = pipelineRunTypes.map(([, value]) => ({
    label: capitalizeFirstLetter(value),
    value: value,
}));

const filterPipelineRunsByType = (
    pipelineRunType: PIPELINE_TYPES,
    pipelineRuns: PipelineRunKubeObjectInterface[]
) =>
    pipelineRunType === PIPELINE_TYPES.ALL
        ? pipelineRuns
        : pipelineRuns.filter(
              ({ metadata: { labels } }) =>
                  labels[PIPELINE_RUN_LABEL_SELECTOR_PIPELINE_TYPE] === pipelineRunType
          );

export const Details = ({ codebaseData, codebaseBranchData, pipelineRuns }: DetailsProps) => {
    const { namespace } = useParams<EDPComponentDetailsRouteParams>();
    const [pipelineRunType, setPipelineRunType] = React.useState<PIPELINE_TYPES>(
        PIPELINE_TYPES.ALL
    );
    const filteredPipelineRunsByType = React.useMemo(
        () => filterPipelineRunsByType(pipelineRunType, pipelineRuns.all),
        [pipelineRunType, pipelineRuns.all]
    );

    const { data: ciDependencyTrackURL } = useSecretByNameQuery<string>({
        props: {
            namespace,
            name: 'ci-dependency-track',
        },
        options: {
            select: data => {
                const url = data?.data?.url;

                if (!url) {
                    return null;
                }
                return window.atob(url);
            },
        },
    });

    const {
        register,
        control,
        formState: { errors },
    } = useForm();

    const mainInfoRows = useMainInfoRows(codebaseBranchData);

    return (
        <Grid container spacing={5}>
            <Grid item xs={12}>
                {!!ciDependencyTrackURL && (
                    <Link href={ciDependencyTrackURL} target={'_blank'}>
                        <img
                            src={`${ciDependencyTrackURL}/api/v1/badge/vulns/project/${codebaseData.metadata.name}/${codebaseBranchData.spec.branchName}`}
                            alt=""
                        />
                    </Link>
                )}
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={5}>
                    {!!pipelineRuns?.all?.length ? (
                        <Grid item xs={4}>
                            <FormSelect
                                {...register('type', {
                                    onChange: ({ target: { value } }) => setPipelineRunType(value),
                                })}
                                control={control}
                                errors={errors}
                                name={'type'}
                                label={'Type'}
                                options={pipelineRunTypeSelectOptions}
                                defaultValue={PIPELINE_TYPES.ALL}
                            />
                        </Grid>
                    ) : null}
                    <Grid item xs={12}>
                        <PipelineRunList
                            pipelineRuns={filteredPipelineRunsByType}
                            isLoading={pipelineRuns.all === null}
                        />
                    </Grid>
                </Grid>
            </Grid>
            {!!mainInfoRows?.length ? (
                <Grid item xs={12}>
                    <NameValueTable rows={mainInfoRows} />
                </Grid>
            ) : null}
        </Grid>
    );
};

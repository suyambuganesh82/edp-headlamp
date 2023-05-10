import { HeadlampSimpleTableGetterColumn } from '../../../../../../../components/HeadlampSimpleTable/types';
import { StatusIcon } from '../../../../../../../components/StatusIcon';
import { CUSTOM_RESOURCE_STATUSES } from '../../../../../../../constants/statuses';
import { useEDPComponentsURLs } from '../../../../../../../hooks/useEDPComponentsURLs';
import { EDPCDPipelineStageSpecQualityGatesInterface } from '../../../../../../../k8s/EDPCDPipelineStage/types';
import { PipelineRunKubeObjectInterface } from '../../../../../../../k8s/PipelineRun/types';
import { MuiCore, pluginLib, React } from '../../../../../../../plugin.globals';
import { COMPONENTS_ROUTE_NAME } from '../../../../../../../routes/names';
import { createRouteNameBasedOnNameAndNamespace } from '../../../../../../../utils/routes/createRouteName';
import { createTektonPipelineRunLink } from '../../../../../../../utils/url/createTektonPipelineRunLink';

const {
    CommonComponents: { Link },
} = pluginLib;

const { Link: MuiLink } = MuiCore;

export const useColumns = (
    namespace: string
): HeadlampSimpleTableGetterColumn<{
    qualityGate: EDPCDPipelineStageSpecQualityGatesInterface;
    autotestPipelineRun: PipelineRunKubeObjectInterface;
}>[] => {
    const EDPComponentsURLS = useEDPComponentsURLs();

    return React.useMemo(
        () => [
            {
                label: 'Status',
                getter: ({ autotestPipelineRun }) => {
                    return (
                        <StatusIcon
                            status={
                                autotestPipelineRun?.status?.conditions?.[0]?.reason?.toLowerCase() ||
                                CUSTOM_RESOURCE_STATUSES.UNKNOWN
                            }
                        />
                    );
                },
            },
            {
                label: 'Type',
                getter: ({ qualityGate: { qualityGateType } }) => qualityGateType,
            },
            {
                label: 'Step',
                getter: ({ qualityGate: { stepName }, autotestPipelineRun }) => {
                    const tektonLink =
                        autotestPipelineRun && Object.hasOwn(EDPComponentsURLS, 'tekton')
                            ? createTektonPipelineRunLink(
                                  EDPComponentsURLS?.tekton,
                                  autotestPipelineRun?.metadata?.namespace,
                                  autotestPipelineRun?.metadata?.name
                              )
                            : null;

                    return tektonLink ? (
                        <MuiLink href={tektonLink} target={'_blank'}>
                            {stepName}
                        </MuiLink>
                    ) : (
                        stepName
                    );
                },
            },
            {
                label: 'Autotest',
                getter: ({ qualityGate: { autotestName } }) => {
                    return autotestName ? (
                        <Link
                            routeName={createRouteNameBasedOnNameAndNamespace(
                                COMPONENTS_ROUTE_NAME
                            )}
                            params={{
                                name: autotestName,
                                namespace,
                            }}
                        >
                            {autotestName}
                        </Link>
                    ) : (
                        autotestName
                    );
                },
            },
            {
                label: 'Branch',
                getter: ({ qualityGate: { branchName } }) => branchName,
            },
        ],
        [EDPComponentsURLS, namespace]
    );
};

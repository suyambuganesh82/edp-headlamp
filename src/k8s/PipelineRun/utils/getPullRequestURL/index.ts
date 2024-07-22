import { GIT_PROVIDERS } from '../../../../constants/gitProviders';
import { PipelineRunKubeObjectInterface } from '../../types';

export const getPullRequestURL = (pipelineRun: PipelineRunKubeObjectInterface): string | null => {
  const gitSourceUrl = pipelineRun?.spec?.params.find((el) => el.name === 'git-source-url')?.value;

  const changeNumber = pipelineRun?.spec?.params.find((el) => el.name === 'changeNumber')?.value;

  const gitProvider = pipelineRun.metadata.labels?.['triggers.tekton.dev/trigger']?.split('-')?.[0];

  if (!gitSourceUrl || !changeNumber || !gitProvider) {
    return null;
  }

  const parts = gitSourceUrl.split(':');
  const host = parts[0].substring(4);
  const path = parts.slice(1).join('/').replace('.git', '');
  const url = new URL(`https://${host}/${path}`);

  if (gitSourceUrl.includes('edp-ci')) {
    // if gerrit
    return null;
  }

  switch (gitProvider) {
    case GIT_PROVIDERS.GITHUB:
      url.pathname += `/pull/${changeNumber}`;
      break;
    case GIT_PROVIDERS.GITLAB:
      url.pathname += `/merge_requests/${changeNumber}`;
      break;
    default:
      break;
  }

  return url.href;
};

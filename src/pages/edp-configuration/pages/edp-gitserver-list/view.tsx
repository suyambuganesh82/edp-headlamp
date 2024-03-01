import { EmptyContent } from '@kinvolk/headlamp-plugin/lib/CommonComponents';
import { Grid, Typography } from '@mui/material';
import React from 'react';
import { LearnMoreLink } from '../../../../components/LearnMoreLink';
import { LoadingWrapper } from '../../../../components/LoadingWrapper';
import { PageWithSubMenu } from '../../../../components/PageWithSubMenu';
import { PageWrapper } from '../../../../components/PageWrapper';
import { EDP_USER_GUIDE } from '../../../../constants/urls';
import { ManageGitServer } from '../../../../widgets/ManageGitServer';
import { menu } from '../../menu';
import { GIT_SERVER_LIST_PAGE_DESCRIPTION } from './constants';
import { useDynamicDataContext } from './providers/DynamicData/hooks';

export const PageView = () => {
  const {
    data: { gitServers, repositorySecrets },
    isLoading,
  } = useDynamicDataContext();

  return (
    <PageWithSubMenu list={menu}>
      <PageWrapper containerMaxWidth={'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant={'h1'} gutterBottom>
              {GIT_SERVER_LIST_PAGE_DESCRIPTION.label}
            </Typography>
            <Typography variant={'body1'}>
              {GIT_SERVER_LIST_PAGE_DESCRIPTION.description}{' '}
              <LearnMoreLink url={EDP_USER_GUIDE.GIT_SERVER_MANAGE.anchors.VIEW_DATA.url} />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <LoadingWrapper isLoading={isLoading}>
              <ManageGitServer
                formData={{
                  gitServers,
                  repositorySecrets,
                }}
              />
            </LoadingWrapper>
          </Grid>
          {!gitServers && !isLoading && (
            <Grid item xs={12}>
              <EmptyContent color={'textSecondary'}>No GitServers found</EmptyContent>
            </Grid>
          )}
        </Grid>
      </PageWrapper>
    </PageWithSubMenu>
  );
};

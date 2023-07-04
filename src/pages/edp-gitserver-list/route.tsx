import { React } from '../../plugin.globals';
import { CONFIGURATION_ROUTE_NAME } from '../../routes/names';
import { createSidebarItemName } from '../../utils/routes/createSidebarItemName';
import Page from './page';

export const routeEDPGitServerList = {
    name: 'edp-git-server-list',
    path: `/edp/gitservers`,
    sidebar: createSidebarItemName(CONFIGURATION_ROUTE_NAME),
    component: () => <Page />,
    exact: true,
};

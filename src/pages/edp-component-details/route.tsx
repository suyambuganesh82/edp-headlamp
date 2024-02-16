import { COMPONENTS_ROUTE_NAME } from '../../routes/names';
import { createSidebarItemName } from '../../utils/routes/createSidebarItemName';

export const routeEDPComponentDetails = {
  name: 'Component Details',
  path: `/components/:namespace/:name/`,
  sidebar: createSidebarItemName(COMPONENTS_ROUTE_NAME),
};

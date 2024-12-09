import config from '../config';
import LayoutHome from '../layouts/LayoutHome/LayoutHome';
import Home from '../page/Home/Home';
import Watch from '../page/Watch/Watch';
import Marketplace from '../page/Marketplace';
import Group from '../page/Group';
import Game from '../page/Game';

const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
    layout: LayoutHome,
  },
  {
    path: config.routes.watch,
    component: Watch,
    layout: LayoutHome,
  },
  {
    path: config.routes.marketplace,
    component: Marketplace,
    layout: LayoutHome,
  },
  {
    path: config.routes.watch,
    component: Group,
    layout: LayoutHome,
  },
  {
    path: config.routes.watch,
    component: Game,
    layout: LayoutHome,
  },
];

const privateRoute = [];

export { publicRoutes, privateRoute };

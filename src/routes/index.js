import config from '../config';
import LayoutHome from '../layouts/LayoutHome/LayoutHome';
import Home from '../page/Home/Home';
import Watch from '../page/Watch/Watch';

const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
    layout: LayoutHome,
  },
  {
    path: config.routes.watch,
    component: Watch,
  },
];

const privateRoute = [];

export { publicRoutes, privateRoute };

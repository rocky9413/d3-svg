import Topics from './Topics';
import Face from '../svg/Face';
import BarChart from '../svg/BarChart';
import LinkTest from './LinkTest';

const routes = [
  {
    path: '/',
    exact: true,
    component: Topics
  },
  {
    path: '/svg',
    component: Face
  },
  {
    path: '/svg/face',
    component: Face
  },
  {
    path: '/svg/barchart',
    component: BarChart
  },
  {
    path: '/linktest',
    component: LinkTest
  }
];

export default routes;

import svgLists from './svgLists';
import Face from './Face';
import BarChart from './BarChart';

const svgRoutes = [
  {
    path: '/svg',
    exact: true,
    name: 'd3-svg-lists',
    component: svgLists
  },
  {
    path: '/svg/face',
    name: 'Smile Face',
    component: Face
  },
  {
    path: '/svg/barchart',
    name: 'Bar Chart',
    component: BarChart
  }
];

export default svgRoutes;

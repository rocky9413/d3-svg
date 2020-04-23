import SvgLists from './SvgLists';
import Face from './Face';
import BarChart from './BarChart';

const SvgRoutes = [
  {
    path: '/svg',
    exact: true,
    name: 'd3-svg-lists',
    component: SvgLists
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

export default SvgRoutes;

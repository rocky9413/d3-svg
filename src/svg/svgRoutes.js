import SvgLists from './SvgLists';
import Face from './Face';
import BarChart from './BarChart';
import Readme from './Readme';

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
  },
  {
    path: '/svg/readme',
    name: 'Readme',
    component: Readme
  }
];

export default SvgRoutes;

import OrgChart from '@balkangraph/orgchart.js';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

function Orgchart(props: { nodeBinding: any; nodes: any }) {
  if (typeof window === 'object') {
    if (document.getElementById('tree')) {
      // eslint-disable-next-line no-new
      new OrgChart(document.getElementById('tree')!, {
        nodeBinding: props.nodeBinding,
        nodes: props.nodes,
      });
    }
  }
  return null;
}

const data = [
  {
    id: 1,
    name: 'Denny Curtis',
    title: 'CEO',
    img: 'https://cdn.balkan.app/shared/2.jpg',
  },
  {
    id: 2,
    pid: 1,
    name: 'Ashley Barnett',
    title: 'Sales Manager',
    img: 'https://cdn.balkan.app/shared/3.jpg',
  },
  {
    id: 3,
    pid: 1,
    name: 'Caden Ellison',
    title: 'Dev Manager',
    img: 'https://cdn.balkan.app/shared/4.jpg',
  },
  {
    id: 4,
    pid: 2,
    name: 'Elliot Patel',
    title: 'Sales',
    img: 'https://cdn.balkan.app/shared/5.jpg',
  },
  {
    id: 5,
    pid: 2,
    name: 'Lynn Hussain',
    title: 'Sales',
    img: 'https://cdn.balkan.app/shared/6.jpg',
  },
  {
    id: 6,
    pid: 3,
    name: 'Tanner May',
    title: 'Developer',
    img: 'https://cdn.balkan.app/shared/7.jpg',
  },
  {
    id: 7,
    pid: 3,
    name: 'Fran Parsons',
    title: 'Developer',
    img: 'https://cdn.balkan.app/shared/8.jpg',
  },
];

const nodeBinding = {
  field_0: 'name',
  img_0: 'img',
};

const Chart = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <div id="tree"></div>
    <Orgchart nodes={data} nodeBinding={nodeBinding} />
  </Main>
);

export default Chart;

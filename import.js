import { cube, foo, graph } from './module.js';

graph.options = {
  color: 'blue',
  thickness: '3px',
};

setTimeout(() => {
  graph.draw();
}, 1000);

// do something!
import { Nav, NewsList } from './components/index.js'

const $root = document.querySelector('#root')

const init = () => {
   Nav($root);
   NewsList($root);
};

window.addEventListener('DOMContentLoaded', async () => {
  init();
});

// do something!
import './style.css'
import { Nav, NewsList } from './components/index.js'

const $root = document.querySelector('#root')



const init = () => {
   new Nav($root);
   new NewsList($root);
};

window.addEventListener('DOMContentLoaded', async () => {
  init();
});

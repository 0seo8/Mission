let state = {
  items : {
    all: '전체보기',
    business: '비즈니스',
    entertainment: '엔터테인먼트',
    health: '건강',
    science: '과학',
    sports: '스포츠',
    technology: '기술'
  }
}

const { items } = state;


let proxy = new Proxy(
  { selected: 'all' },
  {
    set: function (target, receiver) {
      for (let i = 0; i < items.length; i++) {
        if (receiver == Object.keys(items)[i]) {
          target.selected = Object.values(items)[i];
        }
      }
      const $root = document.querySelector('#root')
      const $newsListContainer = document.querySelector('.news-list-container');
      const $scrollObserver = document.querySelector('.scroll-observer');

      $root.Node($newsListContainer);
      $root.removeChild($scrollObserver);
      new NewsList($root, target.selected);
      return true;
    },
  }
);

const Nav = ($root) => {  
  const { items } = state;
  console.log('items', items)
  console.log(Object.values(items))
  $root.innerHTML = `
  <nav class="category-list">
    <ul>
      ${Object.entries(items).map(item => `<li id=${item[0]} class='category-item'>${item[1]}</li>`).join('')}
    </ul>
   </nav>
   <div class="news-list-container">
      <article class="news-list"></article>
      <div class="scroll-observer"></div>
   </div> 
  `;
  document.querySelector('#all').classList.add('active');
  document.addEventListener('click', (e) => onClick(e));

  
  return $root;
}

const onClick = (e) => {
  if(!e.target.classList.contains('category-item')) return
  e.target.previousSibling.classList.remove('active')
  proxy.selected = e.target.id;
  e.target.classList.add('active');
}

export default Nav
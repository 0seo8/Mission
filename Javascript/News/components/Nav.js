export let state = {
  apiKey:'d417d50a085b4ed4a42bae22070aa8b3',
  categories : {
    all: '전체보기',
    business: '비즈니스',
    entertainment: '엔터테인먼트',
    health: '건강',
    science: '과학',
    sports: '스포츠',
    technology: '기술'
  },
  selected: {selected : 'all' }
}

const { categories } = state;

const Nav = ($root ) => { 
    
  $root.innerHTML = `
  <nav class="category-list">
    <ul>
      ${Object.entries(categories).map(item => `<li id=${item[0]} class='category-item'>${item[1]}</li>`).join('')}
    </ul>
   </nav>
   <div class="news-list-container">
      <article class="news-list"></article>
      <div class="scroll-observer"></div>
   </div> 
  `;
  document.querySelector('#all').classList.add('active');

}


export default Nav
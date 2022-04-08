export let state = {
  items: [
  ['all', '전체보기'],
  ['business', '비즈니스'],
  ['entertainment', '엔터테인먼트'],
  ['health', '건강'],
  ['science', '과학'],
  ['sports', '스포츠'],
  ['technology', '기술'],
]};

export const render = ($root) => {
  const { items } = state;

  $root.innerHTML = `
    <ul>
      ${items.map(item => `<li id=${item[0]} class=${item[1]}>${item[1]}</li>`).join('')}
    </ul>
  `;
  document.querySelector('#append').addEventListener('click', () => {
    setState({ items: [ ...items, `item${items.length + 1}` ] })
  })
}

const setState = (newState) => {
  state = { ...state, ...newState };
  render();
}



// do something!
const StarRating = ($container) => {
  $container.classList.add('star-rating-container');

  const maxRating = $container.getAttribute('data-max-rating')
  const newNode = document.createDocumentFragment();

  for (let i = 0; i < maxRating; i++) {
    const star = document.createElement('i')
    star.classList.add('bx', 'bxs-star')
    star.setAttribute('data-star', `${ i+1 }`)
    newNode.appendChild(star)
  }
  $container.appendChild(newNode)

  const $stars = $container.querySelectorAll('.bxs-star')

  $stars.forEach(star => {
    star.addEventListener('mouseover', (e) => {
      const num = e.target.getAttribute('data-star');
      for (let i = 0; i < num; i++) {
        $stars[i].classList.add('hovered')
      }
    })
    star.addEventListener('mouseout', (e) => {
      const num = e.target.getAttribute('data-star');
      for (let i = 0; i < num; i++) {
        $stars[i].classList.remove('hovered')
      }
    })

    star.addEventListener('click', (e) => {
      const num = e.target.getAttribute('data-star');
      // star.classList.remove('selected')

      for(let i=0; i < $stars.length; i++){
        $stars[i].classList.remove('selected')
      }
      
      for (let i = 0; i < num; i++) {
        $stars[i].classList.add('selected')
      }
      let myEvent = new CustomEvent('rating-change', { detail: num });
      $container.dispatchEvent(myEvent)    
    })
  });
  const addLinkCss = () => {
    const LinkNode = document.createElement('link');
    LinkNode.type = "text/css"
    LinkNode.rel = "stylesheet"
    LinkNode.href = "./star-rating/theme.css"
    document.head.appendChild(LinkNode)
  }
  
  window.addEventListener('DOMContentLoaded', addLinkCss)
}

export default StarRating;

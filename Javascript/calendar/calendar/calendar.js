export function createEl($container) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('calendar')
  newDiv.innerHTML = `    
    <div class="calendar-nav">
      <button class="nav-btn go-prev" id="go-prev">◀</button>
      <button class="nav-btn go-today" id="go-today"></button>
      <button class="nav-btn go-next" id="go-next">▶</button>
    </div>
    <div class="calendar-grid"></div>`

  $container.appendChild(newDiv)
}

export function LinkCSS () {
  const LinkNode = document.createElement('link');
  LinkNode.rel = "stylesheet"
  LinkNode.href = "./calendar/them.css"
  document.head.appendChild(LinkNode)
}  

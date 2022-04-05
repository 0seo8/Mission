import {renderCalender} from './index.js'

export function createEl($container) {
  const LinkNode = document.createElement('link');
  LinkNode.rel = "stylesheet"
  LinkNode.href = "./calendar/them.css"
  document.head.appendChild(LinkNode)


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

  renderCalender()
}




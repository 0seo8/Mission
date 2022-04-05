import { createEl } from './calendar/calendar.js';
import { renderCalender, Btn } from './calendar/index.js';

const $input = document.querySelector('.input')
document.querySelectorAll('.calendar-box').forEach(createEl);

renderCalender()
// LinkCSS()

document.querySelectorAll('.nav-btn').forEach(Btn)
const $calendar = document.querySelector('.calendar')


$input.addEventListener('focus', () => {
  $calendar.classList.add('active')
})

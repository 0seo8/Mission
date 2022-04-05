import { createEl } from './calendar/calendar.js';
import { Btn } from './calendar/index.js';

document.querySelectorAll('.calendar-box').forEach(createEl);
document.querySelectorAll('.nav-btn').forEach(Btn)

const $input = document.querySelector('.input')
const $calendar = document.querySelector('.calendar')


const Montharr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


document.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') return
  const $year = document.querySelector('.nav-year').innerText;
  const $str_month = document.querySelector('.nav-month').innerText;
  let $num_month = Number(Montharr.indexOf($str_month)) + 1;
  const $date = e.target.innerText < 10 ? '0' + e.target.innerText : e.target.innerText;
  
  if(e.target.className !== 'this' && +$date < 10 ) {
    $num_month = $num_month + 1
  } else{
    $num_month = $num_month - 1
  }

  const $month = $num_month < 10 ? '0' +  $num_month : $num_month;

  const selected = `${$year}-${$month}-${$date}`

  $input.value = selected;
  $calendar.classList.remove('active')
})


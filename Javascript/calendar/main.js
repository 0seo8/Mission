import { createEl } from './calendar/calendar.js';
import { Btn } from './calendar/index.js';
import { Selected }  from './calendar/test.js'

document.querySelectorAll('.calendar-box').forEach(createEl);
document.querySelectorAll('.nav-btn').forEach(Btn)

const $input = document.querySelector('.input')
const $calendar = document.querySelector('.calendar')

Selected($input, $calendar)




const date = new Date();

export function renderCalender() {
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();
  const Montharr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const thisMonth = Montharr[viewMonth]

  document.querySelector('.go-today').innerHTML =
    `<div class="nav-month">${thisMonth}</div>
    <div class="nav-year">${viewYear}</div>`

  const prevLast = new Date(viewYear, viewMonth, 0);
  const thisLast = new Date(viewYear, viewMonth + 1, 0);

  //마지막 일 구하기(28, 30, 31)
  const PLDate = prevLast.getDate();
  //마지막 날짜의 요일 구하기
  const PLDay = prevLast.getDay();

  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];
  const Day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  // console.log(PLDate) //31
  // console.log(PLDay) //4 : 목요일

  if (PLDay !== 6) { //지난 달의 마지막 요일이 (6)토요일이 아닌 경우.
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i)
  }

  const dates = Day.concat(prevDates, thisDates, nextDates)
  // console.log(dates) 
  // :(35)[27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
  const firstDateIndex = dates.indexOf(1)
  // console.log(firstDateIndex) 
  // : 5(금)
  const lastDateIndex = dates.lastIndexOf(TLDate);
  //console.log(lastDateIndex) : 34

  dates.forEach((date, i) => {
    const condition = i >= firstDateIndex && i < lastDateIndex + 1 ? 'this' : 'other';
    if (i < 7) {
      dates[i] = `<div class="day"><span class=${condition}>${date}</span></div>`;
    } else {
      dates[i] = `<div class="date"><span class=${condition}>${date}</span></div>`;
    }
  })

  document.querySelector('.calendar-grid').innerHTML = dates.join('');

  const today = new Date();
  if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
    for (let date of document.querySelectorAll('.this')) {
      if (+date.innerText === today.getDate()) {
        date.classList.add('today');
        break;
      }
    }
  }
}

export function Btn(els) {

  els.addEventListener('click', (e) => {
    if (e.target.id === 'go-prev') {
      date.setMonth(date.getMonth() - 1);
      renderCalender();
    } else if (e.target.id === 'go-next') {
      date.setMonth(date.getMonth() + 1);
      renderCalender();
    } else if (e.target.id === 'go-today') {
      date = new Date();
      renderCalender();
    }
  })
}
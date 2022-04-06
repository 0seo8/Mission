const Montharr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export function Selected ( $input, $calendar) {
  document.addEventListener('click', (e) => {
    if (e.target.tagName !== 'SPAN') return
    const $year = document.querySelector('.nav-year').innerText;
    const $str_month = document.querySelector('.nav-month').innerText;
    let $num_month = Number(Montharr.indexOf($str_month)) + 1;
    const $date = e.target.innerText < 10 ? '0' + e.target.innerText : e.target.innerText;
    

    
    if(e.target.className !== 'this' && +$date < 5 ) {
      $num_month = $num_month + 1
    } else if (e.target.className !== 'this' && +$date > 25 ){
      $num_month = $num_month - 1
    }
  
    const $month = $num_month < 10 ? '0' +  $num_month : $num_month;
    const selected = `${$year}-${$month}-${$date}`
  
    $input.value = selected;
    $calendar.classList.remove('active')
  })
} 


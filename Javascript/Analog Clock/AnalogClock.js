const AnalogClock = $container => {
  // do something!

  const toAdd = document.createDocumentFragment();
  for (let i = 1; i <= 15; i++) {
    const newDiv = document.createElement('div');
    newDiv.innerText = '|';

    if(i>=1 && i<=3) {
      newDiv.className = 'hand';
    } else {
      newDiv.classList.add('time', 'time'+ (i-3));
    }
    toAdd.appendChild(newDiv);  
  }


  $container.appendChild(toAdd);

  const handEls = $container.querySelectorAll('.hand')
  const $hour = handEls[0]
  const $minute = handEls[1]
  const $second = handEls[2]

  $hour.classList.add('hour')
  $minute.classList.add('minute')
  $second.classList.add('second')


  setInterval(() => {
    const date = new Date;
    const secDeg = date.getSeconds() / 60 * 360;
    const minDeg = date.getMinutes() / 60 * 360;
    const hourDeg = date.getHours() / 12 * 360;

    $second.style.setProperty('--deg', secDeg)
    $minute.style.setProperty('--deg', minDeg)
    $hour.style.setProperty('--deg', hourDeg)
  }, 1000)

};

export default AnalogClock;

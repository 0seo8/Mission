const AnalogClock = $container => {
  // do something!

  const $hour = document.createElement('div');
  const $minute = document.createElement('div');
  const $second = document.createElement('div');
  const $time1 = document.createElement('div');
  const $time2 = document.createElement('div');
  const $time3 = document.createElement('div');
  const $time4 = document.createElement('div');
  const $time5 = document.createElement('div');
  const $time6 = document.createElement('div');
  const $time7 = document.createElement('div');
  const $time8 = document.createElement('div');
  const $time9 = document.createElement('div');
  const $time10 = document.createElement('div');
  const $time11 = document.createElement('div');
  const $time12 = document.createElement('div');

  $hour.classList.add('hour', 'hand');
  $minute.classList.add('minute', 'hand');
  $second.classList.add('second', 'hand');

  $time1.classList.add('time', 'time1');
  $time2.classList.add('time', 'time2');
  $time3.classList.add('time', 'time3');
  $time4.classList.add('time', 'time4');
  $time5.classList.add('time', 'time5');
  $time6.classList.add('time', 'time6');
  $time7.classList.add('time', 'time7');
  $time8.classList.add('time', 'time8');
  $time9.classList.add('time', 'time9');
  $time10.classList.add('time', 'time10');
  $time11.classList.add('time', 'time11');
  $time12.classList.add('time', 'time12');

  $time1.innerText = '|';
  $time2.innerText = '|';
  $time3.innerText = '|';
  $time4.innerText = '|';
  $time5.innerText = '|';
  $time6.innerText = '|';
  $time7.innerText = '|';
  $time8.innerText = '|';
  $time9.innerText = '|';
  $time10.innerText = '|';
  $time11.innerText = '|';
  $time12.innerText = '|';

  $container.append($hour, $minute, $second, $time1, $time2, $time3, $time4, $time5, $time6, $time7, $time8, $time9, $time10, $time11, $time12);

  setInterval(() => {
    const date = new Date;
    const secDeg = date.getSeconds() / 60 * 360;
    const minDeg = date.getMinutes() / 60 * 360;
    const hourDeg = date.getHours() / 12 * 360;
  
    $second.style.setProperty('--deg',secDeg )
    $minute.style.setProperty('--deg',minDeg )
    $hour.style.setProperty('--deg',hourDeg )
  }, 1000)

};

export default AnalogClock;
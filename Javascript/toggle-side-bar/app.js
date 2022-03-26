// do something!
;
(function () {
  'use strict'

  const get = target => document.querySelector(target)

  let toggleState = localStorage.getItem('toggleState');
  const $body = get('body')
  const $toggle = get('.toggle')
  const $nav = get('nav')

  const ToggleOn = () => {
    $nav.classList.add('active')
    localStorage.setItem('toggleState', 'addedActive')
  };

  const ToggleOff = () => {
    $nav.classList.remove('active')
    localStorage.setItem('toggleState', 'removeActive')
  }

  const onLoad = () => {
    toggleState = localStorage.getItem('toggleState');

    if (toggleState == 'addedActive') {
      ToggleOn()
    } else {
      ToggleOff()
    }
    $body.style.visibility = 'visible'
  }

  const clickToggle = () => {
    $body.classList.remove('preload')
    if ($nav.classList.contains('active')) {
      ToggleOff()
    } else {
      ToggleOn()
    }
  }

  const init = () => {
    window.addEventListener('DOMContentLoaded', onLoad )
    $toggle.addEventListener('click', clickToggle )
  }

  init()
})()
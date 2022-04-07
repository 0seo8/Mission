// do something!

import axios from 'axios'

function fetchNews () {
  axios
  .get('https://newsapi.org/v2/top-headlines?country=us&apiKey=d417d50a085b4ed4a42bae22070aa8b3')
  .then((response) => {
    console.log(response)
  })
}

fetchNews()
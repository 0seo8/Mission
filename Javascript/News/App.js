// do something!

import './style.css'
import axios from 'axios'

// pageSize에 5를 지정하면 5개의 뉴스를 취득한다.
const url = `https://newsapi.org/v2/top-headlines?country=kr&category=${category === 'all' ? '' : category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`

function fetchNews () {
  axios
  .get(url)
  .then((response) => {
    console.log(response)
  })
}

fetchNews()
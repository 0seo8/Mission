// do something!
import axios from 'axios'
import {
  state
} from './Nav.js'

let proxy = new Proxy(state.selected, {})
let page = 1;
const { selected } = state;
let pageSize = 5;
const api_Key = state.apiKey;
let category = selected.selected

const NewsList = () => {

    const renderItem = (item) => {
      const $newsList = document.querySelector('.news-list')
      const frag = document.createDocumentFragment();
      frag.appendChild(item)
      $newsList.appendChild(frag)

      return $newsList;
    };

    const createItem = ({
      title,
      url,
      urlToImage,
      description
    }) => {
      const $newsItem = document.createElement('section')
      $newsItem.classList.add('news-item')
      $newsItem.insertAdjacentHTML(
        "beforeend",
        ` <div class="thumbnail">
          <a href="${url}" target="_blank" rel="noopener noreferrer">
            <img src="${urlToImage}" alt="thumbnail" />
          </a>
        </div>
        <div class="contents">
          <h2>
            <a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a>
          </h2>
          <p>${description}</p>
        </div>`);
      renderItem($newsItem)
    }

    const showNews = (aritcles) => {
      aritcles.forEach((article) => {
        createItem(article);
      });
    }


    const getNews = async (category='all', page, pageSize = 5) => {
      const url = `https://newsapi.org/v2/top-headlines?country=kr&category=${category === 'all' ? '' : category}&page=${page}&pageSize=${pageSize}&apiKey=${api_Key}`
      const response = await axios.get(url);
      console.log(response)

      return response.data.articles;
    }

    document.addEventListener('click', (e) => onClick(e));
    const onClick = (e) => {
      if (!e.target.classList.contains('category-item')) return
      const $newsList = document.querySelector('.news-list')
      document.querySelectorAll('li').forEach(el => el.classList.remove('active'))
      proxy.selected = e.target.id;
      e.target.classList.add('active');
      $newsList.innerHTML = '';
      new loadNews(proxy.selected)
    }

    const loadNews = async ( category = 'all', page, pageSize) => {
      try {
        const response = await getNews(category, page, pageSize)
        showNews(response)

      } catch (error) {
        console.error(error.message)
      } 
    }

    const scrollEl = document.querySelector('.scroll-observer');

    const listMoreObserver = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting) {
          console.log(category)
          page++
          loadNews(category, page, pageSize);
        }
      },
      { threshold: 0.4 }
    );

    listMoreObserver.observe(scrollEl);

  }
    export default NewsList
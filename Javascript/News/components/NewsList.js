// do something!
import axios from 'axios'

const NewsList = ($root) => {
  let page = 0;
  const pageSize = 5;
  const apiKey = 'd417d50a085b4ed4a42bae22070aa8b3';
  const $article = $root.querySelector('.news-list')
  const $scrollObserver = $root.querySelector('.scroll-observer')
  
  const hideLoader = () => {
    $scrollObserver.style.visibility = 'hidden';
  };
  const showLoader = () => {
    $scrollObserver.style.visibility = 'visible';
  };

  const renderItem = ({  title, url, urlToImage, description }) => {
      const $newsItem = document.createElement('section');
      $newsItem.classList.add('news-item');
      $newsItem.innerHTML = `
      <div class="thumbnail">
        <a href="${url}" target="_blank" rel="noopener noreferrer">
          <img src="${urlToImage}" alt="thumbnail" />
        </a>
       </div>
      <div class="contents">
        <h2>
          <a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a>
        </h2>
          <p>${description}</p>
      </div>`;      
    
    return $newsItem;
  };

  const showNews = (aritcles) => {
    aritcles.forEach( (article) => {
      $article.appendChild(renderItem(article))
    });
  }

  const getNews = async (category = 'all', page, pageSize = 5) => {
    const url = `https://newsapi.org/v2/top-headlines?country=kr&category=${category === 'all' ? '' : category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`
    const response = await axios.get(url);

    return response.data.articles;
  }

  const loadNews = async (category = 'all', page, pageSize) => {
    showLoader()
    try {
      const response = await getNews(category, page, pageSize)
      showNews(response)
      console.log(response)
    } catch (error) {
      console.error(error.message)
    } finally {
      hideLoader()
    }
  }
  loadNews()

  window.addEventListener('DOMContentLoaded', () => {
    loadNews(page, pageSize)
  })

}

export default NewsList


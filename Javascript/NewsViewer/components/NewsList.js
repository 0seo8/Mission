// do something!
const API_KEY = '551d3898eebf4c5a83e3565e18026423';
const baseURL = 'https://newsapi.org/v2/top-headlines';
let $newsList;



function NewsList(target, category = 'all') {
  console.log(category);

  let currentPage = 0;
  const limit = 5;

  const $newsListContainer = document.createElement('div');
  $newsListContainer.classList.add('news-list-container');
  const $scrollObserver = document.createElement('div');
  $scrollObserver.classList.add('scroll-observer');
  const $imgBall = document.createElement('img');
  $imgBall.setAttribute('src', 'img/ball-triangle.svg');
  $imgBall.setAttribute('alt', 'Loading...');
  $scrollObserver.appendChild($imgBall);

  const $newsList = document.createElement('article');
  $newsList.classList.add('news-list');
  $newsListContainer.appendChild($newsList);

  target.appendChild($newsListContainer);
  target.appendChild($scrollObserver);

  const makeContent = (item) => {
    const { title, url, urlToImage, description } = item;
    const $newsItem = document.createElement('section');
    $newsItem.classList.add('news-item');
    $newsItem.innerHTML = `
  <div class="thumbnail">
  <a href="${url}" target="_blank" rel="noopener noreferrer">
    <img
      src="${urlToImage}"
      alt="thumbnail" />
  </a>
</div>
<div class="contents">
  <h2>
    <a href=${url} target="_blank" rel="noopener noreferrer">
      ​${title}
    </a>
  </h2>
  <p>
    ${description}
  </p>
</div>`;
    return $newsItem;
  };

  const getNews = async (page, pageSize = 5, category = 'all') => {
    const response = await axios.get(
      `${baseURL}?country=kr&category=${
        category === 'all' ? '' : category
      }&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`
    );
    return response;
  };

  const showNews = (items) => {
    items.forEach((item) => {
      const newsItems = makeContent(item);
      $newsList.appendChild(newsItems);
    });
  };

  const loadNews = async (page, pageSize = 5, category = 'all') => {
    console.log('load');
    showLoader();
    try {
      const response = await getNews(page, pageSize, category);
      showNews(response.data.articles);
    } catch (error) {
      console.error(error.message);
    } finally {
      hideLoader();
    }
  };

  const hideLoader = () => {
    $scrollObserver.style.visibility = 'hidden';
  };
  const showLoader = () => {
    $scrollObserver.style.visibility = 'visible';
  };

  const throttle = (callback, limit = 1000) => {
    let waiting = true;
    return function () {
      if (waiting) {
        callback();
        waiting = false;
        setTimeout(() => {
          waiting = true;
        }, limit);
      }
    };
  };

  const createObserver = () => {
    console.log('createObserve');
    let observer;
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    };
    observer = new IntersectionObserver(
      throttle(() => {
        currentPage++;
        loadNews(currentPage, limit, category);
      }),
      options
    );

    observer.observe($scrollObserver);
  };
  // loadNews(currentPage, limit, category);
  setTimeout(() => createObserver(), 100);
}

export default NewsList
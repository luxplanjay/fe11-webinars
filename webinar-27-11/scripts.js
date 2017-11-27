saveState({
  name: 'Alex',
  prof: 'FullStack'
});

const lsData = loadState();

console.log(lsData);

const fetchNews = () =>
  fetch('https://newsapi.org/v2/everything?q=apple&from=2017-11-26&to=2017-11-26&sortBy=popularity&apiKey=5b88481e2156441382975efd19981185')
  .then(response => {
    if (response.ok) return response.json();

    throw new Error('Error while fetching' + response.statusText);
  })
  .then(data => data.articles)
  .catch(err => console.error(err));

const root = document.querySelector('#root');

// Выбираем содержимое скрипта как строку
const source = document
  .querySelector('#card')
  .textContent
  .trim();

// используя _.template создаем функцию-шаблон из строки
const compiled = _.template(source);

const renderNews = (items, template, parent) => {
  let htmlString = '';

  items.forEach(item => {
    // для каждого объекта item вызываем template ( это compiled )
    // с аргументом item, передаем объект целиком
    htmlString += template(item);
  });

 // вешаем готовую строку в html
  parent.innerHTML += htmlString;
};

fetchNews()
  .then(data => {
    const news = data.map(item => {
      return {
        img: item.urlToImage,
        title: item.title,
        descr: item.description,
        link: item.url,
        author: item.author,
        date: item.publishedAt,
        source: item.source.name
      };
    });

    renderNews(news, compiled, root);
  });

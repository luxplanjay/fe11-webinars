
const url = 'http://api.pexels.com/v1/search?per_page=9&page=1';
const headers = new Headers({
  authorization: '563492ad6f91700001000001845b939d393843c869341924558835be'
});
const gallery = document.querySelector('.gallery');
const form = document.querySelector('.search-form');
const input = document.querySelector('#form-input');

const getMediumPhotos = (photos) => photos.map(photo => photo.src.medium);

const fetchImages = (searchQuery) => {
  return fetch(url + `&query=${searchQuery}`, {
      method: 'get',
      headers
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('error while fetching, ' + response.statusText);
    })
    .catch(err => console.log(err));
};

const renderGallery = (photos, parent) => {
  let htmlString = '';

  photos.forEach(photo => {
    htmlString += `<li><img src="${photo}" alt="..."></li>`;
  });

  parent.innerHTML = htmlString;
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  fetchImages(input.value)
    .then(data => {
      const photos = getMediumPhotos(data.photos);
      renderGallery(photos, gallery);
    });
});



// const endpoint = 'http://api.apixu.com/v1/';
// const res = 'forecast.json';
// const days = 'days=7';
// const apiKey = '13e3751010cb4d9d946205535171506';
// const apiUrl = `${endpoint}${res}?key=${apiKey}&q=Kharkiv&${days}`;

// fetch(apiUrl)
//   .then(response => {
//     if (response.ok) {
//       return response.json();
//     }

//     throw new Error(
//       'error while fetching: ' + response.statusText
//     );
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(err));













// const getPromise = (data, delay) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(data);
//     }, delay);
//   });

// const promiseA = getPromise('promiseA', 4000);
// const promiseB = getPromise('promiseB', 3000);

// promiseA.then(data => console.log(data));

// promiseB.then(data => console.log(data));


// Promise.all([promiseA, promiseB])
//   .then(data => console.log(data));

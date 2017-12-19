export function fetchData(query) {
  return fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=15&page=1`,
    {
      headers: new Headers({
        Authorization:
          '563492ad6f91700001000001845b939d393843c869341924558835be'
      })
    }
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Error while fetching ' + response.statusText);
    })
    .then(data => {
      const images = data.photos.map(photo => ({
        id: photo.id,
        img: photo.src.medium,
        author: photo.photographer
      }));

      return images;
    })
    .catch(err => console.error(err));
}

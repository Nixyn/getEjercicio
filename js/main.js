$.get("https://jsonplaceholder.typicode.com/photos")
  .then(recivedPhotos)
  .catch(error);

function recivedPhotos(imageObj) {
  let urls = imageObj.slice(0, 100).map(image => image.url);
  urls.forEach(url => {
    $(".container").append(`
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${url}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="${url}" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
      `);
  });
}

function error(err) {
  console.log(err);
}

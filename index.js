document.addEventListener('DOMContentLoaded', () => {

  let button = document.querySelector('button');
  button.addEventListener('click', () => {

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if(xhr.status === 200) {
          getRandomImage();
        }
      }
    }
    xhr.open('get', 'https://dog.ceo/api/breeds/image/random', true)
    xhr.send();

  function getRandomImage() {
    let randomImage = JSON.parse(xhr.response).message;
    if (!document.querySelector('img')) {
      let body = document.querySelector('body');
      let newImg = document.createElement('img');
      body.appendChild(newImg);
    } else {
      let img = document.querySelector('img');
      img.src = randomImage;
    }
  }
  })
})

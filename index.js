document.addEventListener('DOMContentLoaded', () => {

    let button = document.querySelector('.button');
    let body = document.querySelector('body');

    let xhr = new XMLHttpRequest();

    function getRandomImage() {
      xhr.open('get', 'https://dog.ceo/api/breeds/image/random', true);
      xhr.send();
    }

    let result;
    let dogName = document.createElement('h1');

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          result = JSON.parse(xhr.response).message;
          let resultCopy = result.split('/');

          if (document.querySelector('img')) {
            document.querySelector('img').remove();
          }

          let imgNode = document.createElement('img');
          body.appendChild(imgNode);

          dogName.innerText = resultCopy[4];
          body.appendChild(dogName);

          imgNode = document.querySelector('img').setAttribute('src', result);


        } else {
          console.log('DID NOT GET A 200 OK Status :( ');
        }
      }
    }

  button.addEventListener('click', () => {
    getRandomImage();


  });

})

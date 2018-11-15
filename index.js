document.addEventListener('DOMContentLoaded', () => {
    let xhr = new XMLHttpRequest();
    let button = document.querySelector('.button');
    let body = document.querySelector('body');
    let count = 0;

    function getRandomImg () {
        xhr.open('get', 'https://dog.ceo/api/breeds/image/random', true);
        xhr.send();
    }



    button.addEventListener('click', () => {
            getRandomImg();
      });

    xhr.onreadystatechange = function() {
        if(xhr.readyState ===  4) {
            if(xhr.status === 200) {
                let randomImg = JSON.parse(xhr.response)['message'];
                let img = document.createElement('img')
                img.src = randomImg;
                if (count === 0) {
                    body.appendChild(img);
                    count++
                } else if (count > 0) {
                    body.removeChild(document.querySelector('img'))
                    body.appendChild(img)
                }
            }
        }
    };
});
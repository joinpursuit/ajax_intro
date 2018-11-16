let $ = document;
let breedsArr = [];
$.addEventListener('DOMContentLoaded', () => {

  let button = $.querySelector('button');
  button.addEventListener('click', () => {
    getRandomImage();
  });

  let form = $.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let breed = $.querySelector('select').value;
    let url = getBreedUrl(breed);
    getRandomBreedImg(url);
  });
});

const getBreedUrl = (breed) => {
  let b = breed.toLowerCase();
  if (b.split(' ').length > 1) {
    b = b.split(' ');
    b = `${b[1]}/${b[0]}`;//.join('/');
  }

  return `https://dog.ceo/api/breed/${b}/images/random`;
};

const getRandomBreedImg = (url) => {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let result = JSON.parse(xhr.response).message;
        // console.log(result);
        clearAddImg(result);
      } else {
        clearAddErr(result);
      }
    }
  };

  xhr.open('get', url, true);
  xhr.send();
};

(() => {
  // console.log('loadBreedOptions');
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let result = JSON.parse(xhr.response).message;
        buildBreedsArr(result);
      } else {
        console.log('err');
      }
    }
  };

  xhr.open('get', 'https://dog.ceo/api/breeds/list/all', true);
  xhr.send();
})();

const buildBreedsArr = (dog) => {
  let keys = Object.keys(dog);
  keys.forEach(breeds => {
    if (dog[breeds].length) {
      let subs = dog[breeds];
      subs.forEach(sub => {
        let subBreed = `${sub[0].toUpperCase() + sub.slice(1)} ${breeds[0].toUpperCase() + breeds.slice(1)}`;
        breedsArr.push(subBreed);
      });
    } else {
      let breed = `${breeds[0].toUpperCase() + breeds.slice(1)}`;
      breedsArr.push(breed);
    }
  });

  addBreedOptions();
};

const addBreedOptions = () => {
  let select = $.querySelector('select');
  breedsArr.forEach(breed => {
    let option = $.createElement('option');
    option.value = breed;
    option.innerText = breed;
    select.appendChild(option);
  });
  // console.log(breedsArr);

};

const getRandomImage = () => {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let img = JSON.parse(xhr.response).message;
        clearAddImg(img);
      } else {
        clearAddErr(result);
      }
    }
  };

  xhr.open('get', 'https://dog.ceo/api/breeds/image/random', true);
  xhr.send();
};

const clearAddImg = (img) => {
  clearImg();
  addImg(img);
};

const clearAddErr = ()=> {
  clearImg();
  console.log('err');
};

const addImg = (img) => {
  let imgContainer = $.querySelector('.img-container');
  let node = $.createElement('img');
  node.src = img;
  imgContainer.appendChild(node);
};

const clearImg = () => {
  let img = $.querySelector('img');
  if (img) {
    img.remove();
  }
};

// const getRandomNum = (len) => (Math.floor(Math.random() * len));
//
// const getRandomIndex = (arr) => (arr[getRandomNum(arr.len)]);

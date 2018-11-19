document.addEventListener('DOMContentLoaded', () => {

    let button = document.querySelector('#button');
    let body = document.querySelector('body');

     const ranImg = () => {
        xml.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
        xml.send();
    }

     button.addEventListener('click', () => {
            ranImg();
      });

    let xml = new XMLHttpRequest();

    //
    const getImg = (img) => {
      let imgNode = document.createElement('img');
      imgNode.src = img;
      body.appendChild(imgNode);

    }

    const removeImg = () => {
      let img = document.querySelector('img');
      if(img) {
        img.remove();
      }
    }

    const removeAndGet = (img) => {
      removeImg();
      getImg(img);
    }

     xml.onreadystatechange = function() {
        if(xml.readyState ===  4) {
            if(xml.status === 200) {
                let ran_Img = JSON.parse(xml.response)['message'];
                removeAndGet(ran_Img);
            } else {
              console.log('Whoops!');
            }
        }
    };
});

// https://api.thecatapi.com/v1/images/:image_id






// const breedList = [];
//
// const list = () => {
//
//   let dogsObj = APIResponse['message'];
//
//   for(let key in dogsObj){
//     if(dogsObj[key].length){
//       dogsObj[key].forEach((dog) => {
//         key = key.split(' ');
//         key = key[0][0].toUpperCase().concat(key[0].slice(1));
//           dog = dog.split(' ');
//           dog = dog[0][0].toUpperCase().concat(dog[0].slice(1));
//             breedList.push(`${dog} ${key}`)
//       })
//     }
//     else {
//       key = key.split(' ');
//       key = key[0][0].toUpperCase().concat(key[0].slice(1));
//         breedList.push(key)
//     }
//   }
//   return breedList;
// }
//
// const randomizeDogs = () => {
//   let theList = list();
//   let index = Math.floor(Math.random() * theList.length);
//   return breedList[index];
// }
//
//
// document.addEventListener('DOMContentLoaded', () => {
//
//   let button = document.querySelector('#button');
//   let body = document.querySelector('body');
//   let printBreed = document.createElement('p');
//
//   button.addEventListener('click', () => {
//
//     printBreed.innerHTML = randomizeDogs();
//     body.appendChild(printBreed);
//
//
//   })
//   button.addEventListener('click', () => {
//
//     printBreed.textContent = randomizeDogs();
//   })
// })

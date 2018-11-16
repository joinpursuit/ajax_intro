let clicker = document;
clicker.addEventListener('DOMContentLoaded', () => {
let button = clicker.querySelector(".button")
let img = clicker.createElement("img");

button.addEventListener('click', () => {
  const getRandomImage = ()=>{
    xhr.open("get", "https://dog.ceo/api/breed/hound/images/random", true)
    xhr.send()

  }
  getRandomImage();
  console.log("clicked!");

  });

let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
      if(xhr.status === 200){
        let dogArray = JSON.parse(xhr.response)

        img.src = dogArray.message
        clicker.body.appendChild(img)
        console.log(dogArray);
      }
    }
  }
})

 document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("button");
  let showImg = document.querySelector(".showImg")
    let img = document.createElement('img')
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4) {
        if(xhr.status === 200) {
          let dogArray= JSON.parse(xhr.response);
          img["src"] = dogArray.message;
       showImg.appendChild(img);
        }
      }
    }

      button.addEventListener("click", (event) => {
        getRandomImage()
        function getRandomImage(){
          xhr.open("get", "https://dog.ceo/api/breeds/image/random", true)
          xhr.send(null)
        }
      })

 })

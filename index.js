document.addEventListener("DOMContentLoaded", () => {

  let button = document.querySelector(".get");

  button.addEventListener("click", () => {

    const getRandomImage = function() {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            let dogImgURL = JSON.parse(xhr.response).message;

            let img = document.querySelector(".dogImg");
            img.setAttribute("src",dogImgURL);
          }
        }
      }

      xhr.open("get","https://dog.ceo/api/breeds/image/random", true)
      xhr.send()
    }

    getRandomImage();
  })
});

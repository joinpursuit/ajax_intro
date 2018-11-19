document.addEventListener("DOMContentLoaded", () => {
  let image = document.createElement("img")

  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let imga = JSON.parse(xhr.response);
        console.log(xhr);
        image['src'] = imga.message;
        document.body.appendChild(image)


      }
    }
  };

  function getRandomImage() {
    xhr.open("get", "https://dog.ceo/api/breeds/image/random", true);
    xhr.send();
  }

  let button = document.querySelector(".clickit");
  button.addEventListener("click", () => {
    console.log("Clicked");
    getRandomImage();
  });
});

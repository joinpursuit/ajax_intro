document.addEventListener("DOMContentLoaded", () => {
  let xhr = new XMLHttpRequest();
  let button = document.querySelector(".button");
  let img = document.createElement("IMG");

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let resultImg = JSON.parse(xhr.response);
        img["src"] = resultImg.message;
        document.body.appendChild(img);
      }
    }
  };

  button.addEventListener("click", () => {
    const getRandomImage = () => {
      return xhr.open("get", "https://dog.ceo/api/breeds/image/random", true);
      return xhr.send();
    };
    getRandomImage();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector(".button");
  let image = document.createElement("img");
  button.addEventListener("click", () => {
    // console.log("buttonclicked");
    const getRandomImage = () => {
      xhr.open("get", "https://dog.ceo/api/breeds/image/random", true);
      xhr.send();
    };
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let imageObj = JSON.parse(xhr.response);
          image.src = imageObj.message;
          document.body.appendChild(image);
          // image.style.display = "block";
          image.style.display = "center";
          // let image = document.querySelector(".DogRandomImage")
        }
      }
    };

    getRandomImage();
  });
});

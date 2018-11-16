document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("#mybutton");
  let dogeImg = document.createElement("img");
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let dogeArray = JSON.parse(xhr.response);
        console.log(dogeArray);
        dogeImg["src"] = dogeArray.message;
        document.body.appendChild(dogeImg);
      }
    }
  };

  button.addEventListener("click", () => {
    console.log("clicked!");
    function getRandomImage() {
      xhr.open("get", "https://dog.ceo/api/breeds/image/random", true);
      xhr.send();
    }
    getRandomImage();
  });
});

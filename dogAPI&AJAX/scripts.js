document.addEventListener("DOMContentLoaded", () => {
  let doggies = document.querySelector(".doggies"); //Button...
  let imgs = document.createElement("img"); //
  // imgs.classList.add("img");
  // let img = document.querySelector(".img");
let display = document.querySelector(".display");
  let xhr = new XMLHttpRequest(); // ## Step 2

  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4) {
      if (xhr.status === 200) {
        let dogImg = JSON.parse(xhr.response);
        imgs["src"] = dogImg.message;
        // img.style.backgroundImage = `${dogsImg}`
        // container.document.querySelector(".img").innerHTML = `${dogImg}`;
        // img.style.backgroundImage = `url(${dogsImg})`
        display.appendChild(imgs);
      }
    }
  };

  function getRandomImage() {
    xhr.open("get", "https://dog.ceo/api/breeds/image/random", true);
    xhr.send();
  };

  doggies.addEventListener("click", (event) => {
    doggies.style.background = "#e6e8b0";
    console.log("Clicked!")
    getRandomImage();
  });

});

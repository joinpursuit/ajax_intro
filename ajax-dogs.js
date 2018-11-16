document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("button");
  let xhr = new XMLHttpRequest();
  let body = document.querySelector("body");
  let image = document.createElement("img");
  let dogObj;
  console.log(image);
  console.log(image.src);
  // let imgsrc = document.createElement("image.src")
  // imgsrc = dogObj.message;
  // console.log(imgsrc);
  // image.appendChild(imgsrc);


  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        dogObj = JSON.parse(xhr.response);
        body.appendChild(img)
      }
    }
    console.log(dogObj);
  }


  function getRandomImage () { // console.log("hello, You");
    xhr.open("get", "https://dog.ceo/api/breeds/image/random", true)
    xhr.send()

    // console.log("hello");
  }


  button.addEventListener("click", (event) => {
    // console.log("Clicked!");
    getRandomImage()
    // console.log(getRandomImage());
  })





})

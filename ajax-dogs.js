document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("button");
  let xhr = new XMLHttpRequest();
  let body = document.querySelector("body");
  let image = document.createElement("img");
  let dogObj;
  // let dogObj("message");
  image.setAttribute("src", "https://images.dog.ceo/breeds/corgi-cardigan/n02113186_13256.jpg");
  // console.log("here", image.src);
  let src = image.getAttribute("src")
  console.log(src);

  // let imgsrc = dogObj.message;
  body.appendChild(image);
  // console.log(image.src);
  // console.log(src);


  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        dogObj = JSON.parse(xhr.response);
        body.appendChild(image)
      }
    }
    console.log("dogObj", dogObj);
    console.log("dogObj.message", dogObj.message);
  }


  function getRandomImage () {
    xhr.open("get", "https://dog.ceo/api/breeds/image/random", true)
    xhr.send()
  }


  button.addEventListener("click", (event) => {
    if (dogObj.message) {
      getRandomImage()
      // console.log("variable", xhr.onreadystatechange);
      // // console.log(dogObj.message);
      document.querySelector("src").replaceChild(src, src)
      // image.parentNode.replaceChilde(image, dogObj.message)
      // image.src = dogObj.message

    }


  })





})

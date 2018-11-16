document.addEventListener("DOMContentLoaded", () => {
//
  let dog = new XMLHttpRequest()
  dog.onreadystatechange = function () {
    if(dog.readyState === 4) {
      if(dog.status === 200) {
        let dogList = JSON.parse(dog.response)
        console.log(dog);
        // console.log("hi: ", dogList)
        let displayPhotos = dogList.message
        let pictures = document.querySelector(".pictures")
        let dogPic = dogList.message
        // for(let i = 0; i < displayPhotos.length; i++) {
            let image = document.createElement("img")
            image.innerHTML = displayPhotos
            pictures.appendChild(image)
        // }
      }
    }
  }

  function getRandomImage() {

      dog.open("get", "https://dog.ceo/api/breeds/image/random", true)
      dog.send()
    }


  let button = document.getElementById('button')
  button.addEventListener("click", () => {

    console.log("clicked")
    let result = getRandomImage()
    let image = document.createElement("img")
    image.src = dogList.message



  })
});

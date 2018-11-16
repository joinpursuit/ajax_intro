document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("button");
  button.addEventListener("click", (event) => {
    console.log("Clicked!");


    function getRandomImage (xhr) {
      // console.log("hello");
      xhr.open("get", "https://dog.ceo/api/breeds/image/random", true)
      xhr.send()
      console.log("hello");
    }

    getRandomImage()




  })
})

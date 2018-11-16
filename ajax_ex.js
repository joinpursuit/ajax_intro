document.addEventListener("DOMContentLoaded", () => {

  let xhr = new XMLHttpRequest();
  let button = document.getElementById("button");

  let image = document.createElement("img")

  function getRandomImage() {
    xhr.open("get", "https://dog.ceo/api/breeds/image/random", true);
    xhr.send()
  }

xhr.onreadystatechange = function(){
  if(xhr.readyState === 4) {
    if(xhr.status === 200) {
      let randomImg = JSON.parse(xhr.response)
      console.log(randomImg)

      image.src = randomImg.message;
      document.body.appendChild(image)


    }
  }
}

button.addEventListener("click", () => {
      getRandomImage()

    });

})

// document.addEventListener("DOMContentLoaded", () => {
//   let button = document.querySelector(".button");
//   button.addEventListener("click", () => {
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//       if(xhr.readyState === 4) {
//         if(xhr.status === 200) {
//           let resultArray = JSON.parse(xhr.response)["results"];
//           let ul = document.querySelector(".pokemon")
//           for (let i = 0; i < resultArray.length; i++) {
//             let li = document.createElement("li");
//             li.innerText = resultArray[i].name;
//             ul.appendChild(li)
//           }
//
//         } else {
//           console.log("ERRRRRR!");
//         }
//       }
//     }
//     xhr.open("get", "https://pokeapi.co/api/v2/pokemon/", true);
//     xhr.send()
//
//   })
// })

// document.addEventListener("DOMContentLoaded", () => {
//   let myButton = document.querySelector(".myButton");
//   myButton.addEventListener("click", () => {
//     console.log("Clicked");
//     let xhr = new XMLHttpRequest();
//     const getRandomImage = () => {
//       xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4) {
//           if (xhr.status === 200) {
//             let results = JSON.parse(xhr.response);
//             console.log(results);
//           }
//         }
//       };
//     };
//     getRandomImage();
//
//     let newImg = document.createElement("img");
//     newImg.src = ;
//     document.body.appendChild(newImg);
//
//     xhr.open("get", "https://dog.ceo/api/breeds/image/random", true);
//     xhr.send();
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  let myButton = document.querySelector(".myButton");
  let newImg = document.createElement("img");

  

  myButton.addEventListener("click", () => {
    // console.log("Clicked!");
    const getRandomImage = () => {
      xhr.open("get", "https://dog.ceo/api/breeds/image/random", true);
      xhr.send();
    };

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let results = JSON.parse(xhr.response);
        // console.log(results);
        newImg.src = results.message;
        document.body.appendChild(newImg);
        // return results;
      }
    };
    getRandomImage();
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function (){
//     if (xhr.readyState === 4){
//       if(xhr.status === 200){
//         let movieObj = JSON.parse(xhr.response)
//         let ul = document.querySelector(".movies");
//         for (let i = 0; i < movieObj.length; i++) {
//           let li = document.createElement("li");
//           li.innerText = movieObj[i].title
//           ul.appendChild(li)
//         }
//       }
//     }
//   }
//   xhr.open("get","https://ghibliapi.herokuapp.com/films",true)
//   xhr.send()
// });

document.addEventListener("DOMContentLoaded", () => {
  // button
  let button = document.querySelector(".button");
  button.addEventListener("click", () => {
    let xhr = new XMLHttpRequest();
    //create a function to fire when on onreadystatechange
    xhr.onreadystatechange = function() {
    if(xhr.readyState === 4){
      if( xhr.status === 200){
        let resultArray = JSON.parse(xhr.response)["results"];
        let ul = document.querySelector(".pokemon")
        // to touch every pokemon in the array
        for (let i = 0; i < resultArray.length; i++) {
          // to create a list item for every pokemon you iterate through in the array
          let li = document.createElement("li");
          //
          li.innerText = resultArray[i].name;
          ul.appendChild(li)
        }
      } else {
        console.log("EERRR");
      }
    }

    };
    // 2 specific functions open and send and the true on the end means asynchronous
    xhr.open("get","https://pokeapi.co/api/v2/pokemon/",true)
    xhr.send()
  });
});

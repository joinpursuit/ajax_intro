document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector(".button");
  button.addEventListener("click", () => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let dogObj = JSON.parse(xhr.response);
          let result = dogObj.message;
          let img = document.querySelector(".img");
          img.src = result;
          //  console.log(dogObj);
        }
      }
    };
    xhr.open("get", "https://dog.ceo/api/breeds/image/random", true);
    xhr.send();
  });
});

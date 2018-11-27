

document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector(".button")
  button.addEventListener("click", () => {
    console.log("Clicked!")
  let xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function(){
        if(xhr.readyState === 4) {
          if(xhr.status === 200) {
            let resultArray = JSON.parse(xhr.response).message
            let ul = document.querySelector(".class")
            for (let i = 0 ; i < resultArray.length ; i++) {
              let li = document.createElement("li")
              li.innerText = resultArray[i].message
              ul.appendChild(li)
            }
          }
        }
      }
  })
xhr.open("get", "https://dog.ceo/api/breeds/image/random", "true")
xhr.send()
})

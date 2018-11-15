document.addEventListener("DOMContentLoaded",() => {
console.log("loaded")
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
debugger;
}



xhr.open("get","https://dog.ceo/api/breeds/list/all")
xhr.send()
})

document.addEventListener("DOMContentLoaded", function () { 

//load output from dogAPI
let xhr = new XMLHttpRequest
xhr.open("get", "https://dog.ceo/api/breeds/list/all", true)
xhr.send()
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4){
        if(xhr.status === 200){
            let processdogList = JSON.parse(xhr.response)
            let doglist = processdogList.message 

        }
    }


}




//button 
let button = document.querySelector(".button")

button.addEventListener("click", function () {
    console.log ("A")
})



/////





})
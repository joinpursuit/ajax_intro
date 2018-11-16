document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector(".mybutton");
  //declared button
  let newDogeImage = document.createElement("img");
  // create an img tag in html
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let dogeArrayfromObject = JSON.parse(xhr.response);
        console.log(dogeArrayfromObject);
        newDogeImage["src"] = dogeArrayfromObject.message;
        // create img with a src of the object array of breeds and subbreeds from dogeArrayfromObject.message
        document.body.appendChild(newDogeImage);
        // after the image is received, add the image to the body tag
      }
    }
  };
  //when you click the button that is created
  button.addEventListener("click", () => {
    console.log("clicked!");
    //created a function to getRandomImage that GETS info from the dog api
    function getRandomImage() {
      xhr.open("get", "https://dog.ceo/api/breeds/image/random", true);
      xhr.send();
    }
    getRandomImage();
  });
});

// REED NOTES:
// Main takeaway: Your function in Step 1 should *not* contain the `new XMLHttpRequest` declaration, nor should it include the `onReadyStateChange`.
//
// or `onreadystatechange`, rather
// It should `open` and `send` your request, nothing more
// inside your `onreadystatechange` function - THAT's where you should console log.
// Sorry for the confusion here - because of the way async works, if we put all of this functionality in a function, we won't be able to console log because the `console.log` is a synchronous function and our function returns asynchronously.

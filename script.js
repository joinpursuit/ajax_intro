document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector(".mybutton");
  let img = document.createElement("img");
  document.body.append(img);
  img.style.width = "400px";
  let xml = new XMLHttpRequest();

  button.addEventListener("click", () => {
    getRandomImage();
  });

  const getRandomImage = () => {
    xml.open("get", "https://dog.ceo/api/breeds/image/random", true);
    xml.send();
  };

  xml.onreadystatechange = function() {
    if (xml.readyState === 4) {
      if (xml.status === 200) {
        let dogObj = JSON.parse(xml.response);
        img.setAttribute("src", dogObj.message);
      }
    }
  };
});

// var button = document.querySelector('.btn2');
var x = document.querySelector('.layout-correction');
var styles = {
    // "background-color": "lightgray",
    // "width": "500px",
    // "height": "300px",
    "left": "10rem"
};
 
var leftContainer = document.querySelector(".main-container-left");
// obj.setAttribute("style", "width: 500px; height: 300px; background-color: lightgray;");
// Object.assign(obj.style, styles);
x.onclick = function () {
    leftContainer.setAttribute("style", "margin: 50px; left: 100px; transform: rotate(0deg);");
    // this.style.margin="50px"
    document.querySelector('.nav-bar-container').style.left="1rem";
};

button.onclick = function () {

 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);

 this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};
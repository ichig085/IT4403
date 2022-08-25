// var button = document.querySelector('.btn2');
var x = document.querySelector('.layout-correction');
var styles = {
    // "background-color": "lightgray",
    // "width": "500px",
    // "height": "300px",
    "left": "10rem"
};
 
var leftContainer = document.querySelector(".main-container-left");
var rightContainer = document.querySelector(".main-container-right");
var navContainer = document.querySelector(".nav-bar-container");
var changeLayoutBtn = document.querySelector(".layout-correction");
// obj.setAttribute("style", "width: 500px; height: 300px; background-color: lightgray;");
// Object.assign(obj.style, styles);
x.onclick = function () {
    changeLayoutBtn.style.display = "none";
    //margin-top is 3rem and margin-left is 50rem
    navContainer.setAttribute("style", "position: relative; top: 10rem; margin-left: 45rem; margin-top: -8.5rem; width: 40%; transform: rotate(0deg);");
    //margin is 50px for leftContainer
    leftContainer.setAttribute("style", "margin-top: -7rem; left: 100px; transform: rotate(0deg);");
    rightContainer.setAttribute("style", "top: 12rem; right: 9rem; width: 30vw; transform: rotate(0deg);");
    document.querySelector('.nav-bar-container').style.left="1rem";
};

button.onclick = function () {

 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);

 this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};
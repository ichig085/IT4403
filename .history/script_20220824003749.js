var button = document.querySelector('.btn2');
var x = document.querySelector('.layout-correction');
var styles = {
    "left": "10rem"
};
 
var obj = document.getElementById("nav-bar-container");
x.onclick = function () {
    Object.assign(obj.style, styles);
    // this.style.margin="50px"
    document.querySelector('.nav-bar-container').style.margin="50px";
};

button.onclick = function () {

 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);

 this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};
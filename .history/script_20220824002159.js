var button = document.querySelector('.btn2');
var x = document.querySelector('.layout-correction');

x.onclick = function () {
    this
};

button.onclick = function () {

 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);

 this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};
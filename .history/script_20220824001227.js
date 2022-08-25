var button = document.querySelector('layout-correction');

button.onclick = function () {

    document.getElementById('.nav-container-bar').style.left='10rem';
 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);
 this.style.left = ""
 this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};
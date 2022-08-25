var button = document.querySelector('btn2n');

button.onclick = function () {

    // document.getElementById('.nav-container-bar').style.left='10rem';
 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);
//  this.style.left = "10rem";
 this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};
var button = document.querySelector('.btn2');
var x = document.querySelector('.nav-container-ba');

x.onclick = function () {
    // this.style.margin="50px"
};

button.onclick = function () {

 var red = Math.floor(Math.random() * 256);
 var blue = Math.floor(Math.random() * 256);
 var green = Math.floor(Math.random() * 256);

 this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
};
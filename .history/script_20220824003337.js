var button = document.querySelector('.btn2');
var x = document.querySelector('.layout-correction');
const attributes = {
    style: 'background-color: salmon; color: white; margin-top: 50px; left: 10rem;',
  };

  function setAttributes(element, attributes) {
Object.keys(attributes).forEach(attr => {
    element.setAttribute(attr, attributes[attr]);
});
}
const button = document.getElementById('btn');
setAttributes(button, attributes);
x.onclick = function () {
    // this.style.margin="50px"
    document.querySelector('.nav-bar-container').style.margin="50px";
};

// button.onclick = function () {

//  var red = Math.floor(Math.random() * 256);
//  var blue = Math.floor(Math.random() * 256);
//  var green = Math.floor(Math.random() * 256);

//  this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
// };
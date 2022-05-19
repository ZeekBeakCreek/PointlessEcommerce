const trkp = [
  ["chris", 42],
  ["chry", 21],
  ["cry", 30],
  ["fly", 17],
  ["bye", 11],
  ["tie", 53],
];

console.table(trkp);

var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("smallImg");
var overlay = document.getElementById("overlay");

smallimg[0].onclick = () => {
  MainImg.src = smallimg[0].src;
  overlay.style.backgroundImage = "url(images/balisong.jpg)";
};

smallimg[1].onclick = () => {
  MainImg.src = smallimg[1].src;
  overlay.style.backgroundImage = "url(images/balisong.jpg)";
};

smallimg[2].onclick = () => {
  MainImg.src = smallimg[2].src;
  overlay.style.backgroundImage = "url(images/balisong.jpg)";
};

smallimg[3].onclick = () => {
  MainImg.src = smallimg[3].src;
  overlay.style.backgroundImage = "url(images/balisong.jpg)";
};

function zoomIn(event) {
  var element = document.getElementById("overlay");
  element.style.display = "inline-block";
  var img = document.getElementById("MainImg");
  var posX = event.offsetX ? event.offsetX : event.pageX - img.offsetLeft;
  var posY = event.offsetY ? event.offsetY : event.pageY - img.offsetTop;
  element.style.backgroundPosition = -posX * 1.125 + "px " + -posY * 0.9 + "px";
}

function zoomOut() {
  var element = document.getElementById("overlay");
  element.style.display = "none";
}

// search products logic

var search = document.getElementById("search");
var defaultVal = search.defaultValue;
var currentVal = search.value;

console.log(defaultVal, currentVal);

search.onsubmit = () => {
  console.log("this works?");
};

console.log(search);

// shopping cart hopefully

function cart() {
  
}
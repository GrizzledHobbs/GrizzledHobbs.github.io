// this is a comment in javascript

// Image switcher code: this changes the mozilla logo between the two images selected

var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/#') {
    myImage.setAttribute ('src','images/#');
  } else {
    myImage.setAttribute ('src','images/#');
  }
}

/* Personalized welcome message code: this changes the h1 element to a custom messeage (mozilla is cool, your name).. stores your name via the input from the button.. */

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Welcome to my page, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome to my page, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

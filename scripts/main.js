let myImage = document.querySelector("img");
myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === 'images/firefox-logo-2017.svg') {
        myImage.setAttribute ('src','images/chrome-logo-2017.svg');
    } else {
        myImage.setAttribute ('src','images/firefox-logo-2017.svg');
    }
}



let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
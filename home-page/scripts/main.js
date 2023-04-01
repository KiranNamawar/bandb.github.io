const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/BNB-vertical-logo.png") {
    myImage.setAttribute("src", "images/wall-display.jpg");
  } else {
    myImage.setAttribute("src", "images/BNB-vertical-logo.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome to Bold & Bright, ${myName}`;
    }
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to Bold & Bright, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };
  
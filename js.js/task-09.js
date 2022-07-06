const btnColor = document.querySelector(".change-color");
const backColor = document.querySelector(".color");


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const color = () => {
    document.body.style.backgroundColor = getRandomHexColor();
    backColor.innerHTML =  document.body.style.backgroundColor;
  }

  btnColor.addEventListener("click", color);


const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const changeTextSize = () => {
  text.style.fontSize = range.value + "px";
}
  text.style.fontSize = range.value + "px";

range.addEventListener("input", changeTextSize)

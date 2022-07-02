const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const changeTextSize = (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
}

range.addEventListener('input', changeTextSize)

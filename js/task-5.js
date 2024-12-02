


const color=document.querySelector('.color')
const changeColor=document.querySelector('.change-color')







function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const differentColor=()=>{
  document.body.style.backgroundColor= getRandomHexColor();
  color.innerHTML = getRandomHexColor()
}

changeColor.addEventListener("click",differentColor);
differentColor();

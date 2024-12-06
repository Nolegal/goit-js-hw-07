


const color=document.querySelector('.color')
const changeColor=document.querySelector('.change-color')







function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const differentColor=()=>{
  const randomColor=getRandomHexColor()
  document.body.style.backgroundColor= randomColor;
  color.innerHTML = randomColor
}

changeColor.addEventListener("click",differentColor);
differentColor();

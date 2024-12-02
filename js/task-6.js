const createBox=document.querySelector('#controls button[data-create]');
const destroyBox=document.querySelector('#controls button[data-destroy]');
const amount=document.querySelector('#controls input').value;
const boxes=document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let step=30
const createBoxes=(amount)=>{
  for (let i = 0; i < amount; i++) {
    let div = document.createElement("div");
    div.style.color = getRandomHexColor();
    step+=10
    div.style.height = `${step}px`;
    div.style.width = `${step}px`;
    boxes.appendChild(div);
    
  }
  
}


createBox.addEventListener("click", createBoxes)

destroyBox.addEventListener("click",()=>{
  boxes.innerHTML=''
});



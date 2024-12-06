const createBox=document.querySelector('#controls button[data-create]');
const destroyBox=document.querySelector('#controls button[data-destroy]');
const amount=document.querySelector('#controls input');
const boxes=document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes=(amount)=>{
  boxes.innerHTML=''
  let step=30;
  const elements=[];
  for (let i = 0; i < amount; i++) {
    let div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
   
    div.style.height = `${step}px`;
    div.style.width = `${step}px`;
    step += 10;
    elements.push(div);
   
  }
  boxes.append(...elements) 
   
 
}


createBox.addEventListener("click", ()=>{

  const inputValue=Number(amount.value.trim());
  createBoxes(inputValue);
  
}
  )

destroyBox.addEventListener("click",()=>{
  boxes.innerHTML=''
});



const fieldEl=document.querySelector('#name-input');
const span=document.querySelector('#name-output');
//fieldEl.trim()
fieldEl.addEventListener('input', ()=>{
 const inputValue=fieldEl.value.trim()
span.innerHTML=inputValue

if(inputValue===""){
   span.innerHTML="Anonymous"
}

});


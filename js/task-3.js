fieldEl=document.querySelector('#name-input');
span=document.querySelector('#name-output');
//fieldEl.trim()
fieldEl.addEventListener('input', ()=>{

span.innerHTML=fieldEl.value.trim()

if(fieldEl===""){
  return span.innerHTML="Anonymous"
}

});


const operates=document.querySelectorAll('.operators');
const numbers=document.querySelectorAll('.numbers, .numbers_0');
const display=document.getElementById('answer');
const equal=document.getElementById('equal');
const clear_all=document.getElementById('clearall');
let currentInput = "";
let previousInput = "";
let operator_btn = null;
numbers.forEach(number=>{
  number.addEventListener('click',()=>{
    if(display.textContent==="input"||resultdisplayed){
      display.textContent=number.textContent;
      resultdisplayed=false;
    }
    else{
      display.textContent+=number.textContent;
    }
    currentInput=display.textContent;

  });
});

//operators

operates.forEach(operator=>{
  operator.addEventListener('click',()=>{
    if(currentInput==="") return;
    previousInput=currentInput;
    operator_btn=operator.textContent;
    display.textContent="";
    
  });
}); 

  equal.addEventListener('click',()=>{
    if(previousInput===""||currentInput===""||operates==="") return;
    let num1=parseInt(previousInput);
    let num2=parseInt(currentInput);
    let result;
    switch(operator_btn){
      case '+':
      result=num1+num2;
      break;
      case '-':
      result=num1-num2;
      break;
      case '*':
      result=num1*num2;
      break;
      case '/':
        if(num2!==0) {alert("input error")}
      result=num1/num2;
      break;
    }
    display.textContent=result;
    resultdisplayed=true;
    currentInput = result.toString();
    previousInput = "";
    operator = null;
  });


clear_all.addEventListener('click',()=>{
  currentInput="";
  previousInput="";
  display.textContent="Enter Values";
  resultdisplayed=true;
  operator=null;
});



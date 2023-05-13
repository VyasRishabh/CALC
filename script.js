let string="";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string=eval(string);
      document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{
     string = string +  e.target.innerHTML ;
      document.querySelector('input').value=string;
    }
  })
})
var keybord = document.addEventListener('keypress',(val)=>{
  if(val.key=='1' || val.key=='2' || val.key=='3' || val.key=='4' || val.key=='5' || val.key=='6' || val.key=='7'|| val.key=='8' || val.key=='9' || val.key=='0' || val.key=='/' || val.key=='*' || val.key=='-' || val.key=='+' || val.key=='.'){
   string=string+val.key;
   document.querySelector('input').value = string;
  }
  else if( val.key=='='){
    string=eval(string);
    document.querySelector('input').value=string;
  }
})
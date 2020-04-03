function ocultar(){
   document.getElementById('ocult').style.display = 'none';
   document.getElementById('ocult1').style.display = 'none';
  
}
ocultar();  


function alerts(){
      
     n1 = document.getElementById('email').value;
     n2 = parseInt(document.getElementById('pass').value);
    if( email === n1 && contraseña === n2 ){
         document.getElementById('remove').remove();
         document.getElementById('ocult').style.display = 'flex';
         
         
           
     
    }
 }



function click(){
 
   document.getElementById('enviar').addEventListener('click',alerts,false);

}
click();



function mostrarFrom(){
   document.getElementById('remove').remove();
   document.getElementById('ocult1').style.display = 'block';
   //document.getElementById('conectados').i
   let elem = document.getElementById('ocult1');
   let pos = 0;
   let id = setInterval(frame, 5)   ;

   function frame(){
      if(pos == 200){
         clearInterval(id);
      }else{
         pos++;
         elem.style.top = pos + 'px';
         elem.style.left = pos + 'px';

      }

   }
   

}

function from(){
   document.getElementById('click').addEventListener('click',mostrarFrom,false);
   

}
from();






function registrar(){
   document.getElementById('exampleInputEmail1').value;
   document.getElementById('exampleInputPassword1').value;
   document.getElementById('exampleCheck1').value;




}

function regiscliclick(){
   document.getElementById('registrar').addEventListener('click',registrar,false);
}

regiscliclick();










// Variables
email ='ivanmatiasferrada@gmail.com';
contraseña = 084900;




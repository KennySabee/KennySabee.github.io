document.querySelector ("entrada") .addEventListener ("click",addDia);
document.querySelector ("horario") .addEventListener ("click",addHora);

var entrada =[];
var valores =[];

function entrada(){
   let html = DocumentTimeline.querySelector('horarios de entrada').innerHTML;
   let newHTML= '<div><input type="text"class="entrada">Dia</input><button class= "addDia">Dia</button></div>'
   document.querySelector("horarios de entrada").innerHTML= html + newHTML

}
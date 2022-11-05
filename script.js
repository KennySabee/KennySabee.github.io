document.querySelector(".entrada").addEventListener("click",entrada);
document.querySelector(".hora") .addEventListener("click",hora);

var entrada =[];
var valores =[];

function entrada(){
   let html = DocumentTimeline.querySelector('horarios de entrada').innerHTML;
   let newHTML= '<div><input type="text"class="entrada">Dia</input><button class= "addDia">Dia</button></div>'
   document.querySelector("horarios de entrada").innerHTML= html + newHTML
}

function showResults(){
    for (var i = document.querySelectorAll('.entrada').length -1;i >=0; i--){
        document.querySelectorAll('.entrada')[i]
    }
}
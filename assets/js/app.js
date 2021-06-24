
var modoNoturno = function () {
    var body = document.getElementById("corpo");
    let fundo_cor = document.querySelector(".fundo_cor");
    let borda = document.querySelector(".borda");
    let titulo = document.querySelectorAll(".titulo");


    if (body.classList.contains("modo-noturno")) {

      body.classList.remove("modo-noturno");
      fundo_cor.classList.remove("modo-noturno");
      borda.classList.remove("modo-noturno");
      titulo.forEach(
          (element)=>{
               element.classList.remove("modo-noturno");
          }
      );
     

    } else {

      body.classList.add("modo-noturno");
      fundo_cor.classList.add("modo-noturno");
      borda.classList.add("modo-noturno");
      titulo.forEach(
        (element)=>{
            element.classList.add("modo-noturno");
        }
    );
     
    }
  }
  
  var exibirSobre = function(){
    divSobre = document.querySelector('#sobre');
    divHab = document.querySelector('#habiliade');
    divForm = document.querySelector('#formacao');
    divHob = document.querySelector('#hobbie');
    divBok = document.querySelector('#books');
 
    divSobre.style.display = "block";
    divHab.style.display = "none";
    divForm.style.display = "none";
    divHob.style.display = "none";
    divBok.style.display = "none";
}
var exibirHabilidade = function(){
    divSobre = document.querySelector('#sobre');
    divHab = document.querySelector('#habiliade');
    divForm = document.querySelector('#formacao');
    divHob = document.querySelector('#hobbie');
    divBok = document.querySelector('#books');
 
    divSobre.style.display = "none";
    divHab.style.display = "block";
    divForm.style.display = "none";
    divHob.style.display = "none";
    divBok.style.display = "none";
}
var exibirForm = function(){
    divSobre = document.querySelector('#sobre');
    divHab = document.querySelector('#habiliade');
    divForm = document.querySelector('#formacao');
    divHob = document.querySelector('#hobbie');
    divBok = document.querySelector('#books');
 
    divSobre.style.display = "none";
    divHab.style.display = "none";
    divForm.style.display = "block";
    divHob.style.display = "none";
    divBok.style.display = "none";
}
var exibirHob = function(){
    divSobre = document.querySelector('#sobre');
    divHab = document.querySelector('#habiliade');
    divForm = document.querySelector('#formacao');
    divHob = document.querySelector('#hobbie');
    divBok = document.querySelector('#books');
 
    divSobre.style.display = "none";
    divHab.style.display = "none";
    divForm.style.display = "none";
    divHob.style.display = "block";
    divBok.style.display = "none";
}
var exibirBok = function(){
    console.log('clicado no exibir book');
    divSobre = document.querySelector('#sobre');
    divHab = document.querySelector('#habiliade');
    divForm = document.querySelector('#formacao');
    divHob = document.querySelector('#hobbie');
    divBok = document.querySelector('#books');
 
    divSobre.style.display = "none";
    divHab.style.display = "none";
    divForm.style.display = "none";
    divHob.style.display = "none";
    divBok.style.display = "block";
}
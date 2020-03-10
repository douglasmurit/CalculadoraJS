

var view = document.querySelector('button');

view.onclick = function(){
    mostrar(view);
}




function somar(y){
       var x = parseInt(document.getElementById("item")).value;
       
       var y = x + x;
}

function subtrair(){
   //funcao de subtrair//
}

function dividir(){
    //funcao de dividir//

}

function multiplicar(){
     //funcao de multiplicar//
}

function resultado(){
     //funcao de resultado//
}

function mostrar(){

    var v = document.getElementById("resultado").value;
    document.getElementById("resultado").innerHTML = v;
}
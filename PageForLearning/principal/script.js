function mudarTexto() {
    document.getElementById("paragrafo").innerHTML = 'tudo que passa ja passou para um passado distorcido do que passou';
}
function mudarTextoDois() {
    document.getElementById("paragrafodois").innerHTML = 'O futuro é algo que não chegou mas chegando vira presente que passa e torna-se passado';
}
function mostrarData() {
    var dia = new Date
    document.getElementById("horario").innerHTML = "<h2> hoje é " + dia.getDate() + "/" + dia.getMonth() + "/" + dia.getFullYear() + " " + dia.getHours() + ":" + dia.getMinutes() + "</h2>";
}
function mudarTextotres() {
    document.getElementById("paragrafotres").innerHTML = 'texto para a Josi ver que é fácil';
}

function somar(resultado){
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var res =  document.getElementById("res");
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);
    var resultado = n1 + n2;
    res.innerHTML = resultado;
   

}
function subtrair(resultado){
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var res =  document.getElementById("res");
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);
    var resultado = n1 - n2;
    res.innerHTML = resultado;

}
function multiplicar(resultado){
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var res =  document.getElementById("res");
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);
    var resultado = n1 * n2;
    res.innerHTML = resultado;

}
function dividir(resultado){
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var res =  document.getElementById("res");
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);
    var resultado = n1 / n2;
    res.innerHTML = resultado;

}


document.getElementById("mi").length;
function calcular(oper) {
   var valor1 = document.formcalc.valor1.value;
   var valor2 = document.formcalc.valor2.value;

if (valor1 == ""){
document.getElementById("texto").innerHTML +="Atenção! Não pode ficar em branco, digite apenas números</br>";
document.formcalc.valor1.focus()
return false;
}
if (valor2 == ""){
document.getElementById("texto2").innerHTML +="Lembre, não pode ficar em branco, digite apenas números</br>";
document.formcalc.valor2.focus()
return false;
}

if (oper == "0")
{
var res = parseInt(valor1) + parseInt(valor2);
}
else
{
if (oper == "1")
{
var res = valor1-valor2;
}
else
{
if (oper == "2")
{
var res = valor1*valor2;
}
else
{
if (oper == "3")
{
var res = valor1/valor2;
}
else
{
if (oper == "4")
{
var res = Math.pow(valor1, valor2);
}
else
{
if (oper == "5")
{
var res = valor1/100*valor2;
}
else
{
var resto = valor1%valor2
var divisao = valor1/valor2;
var res = 'o resto é: ' + resto + ' a divisão é: ' + divisao;
}
}
}
}
}

}
document.formcalc.res.value = res;
document.getElementById("result").innerHTML +="";

}


function calcLimpar() {
document.formcalc.res.value = '';
delete res;
document.formcalc.valor1.value = '';
delete valor1;
document.formcalc.valor2.value = '';
delete valor2;
}
function calcLimparResultado() {
document.formcalc.res.value = '';
delete res;
}
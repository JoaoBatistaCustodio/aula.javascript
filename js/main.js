function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"));
    alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://likemarketing.com.br/");
    //window.location.href = "https://likemarketing.com.br/";
}


function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}


function voltar(){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe omouse aqui";

}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*function soma(n1, n2){
    return n1+n2;
}
alert(soma(10, 23));

var validar = 0;
function validaIdade(){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
validaIdade(idade)
console.log(validar);
*/

/*
var d = new Date();
alert(d.getDate());
alert(d.getDay());
alert(d.getMinutes());
*/

/*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
}


var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/

/*
var idade = prompt("Qual sua idade");
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/


/*
var lista = ["pera", "uva", "maça"];
lista.push("laranja");
lista.pop("uva");
console.log(lista);


var nome = "Tita";
var idade = 32;
frase = "O Japão é o melhor timedo mundo!";
alert(nome + "tem" + idade + "anos");
console.log(frase.replace("Japão", "Brasil"));
 */
     
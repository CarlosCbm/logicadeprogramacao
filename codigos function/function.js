function adicao(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero";
    }
    return a / b;
}

let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));

let operacao = prompt("Digite a operação desejada (adicao, subtracao, multiplicacao, divisao):");
let resultado;

switch (operacao) {
    case "adicao":
        resultado = adicao(numero1, numero2);
        break;
    case "subtracao":
        resultado = subtracao(numero1, numero2);
        break;
    case "multiplicacao":
        resultado = multiplicacao(numero1, numero2);
        break;
    case "divisao":
        resultado = divisao(numero1, numero2);
        break;
    default:
        resultado = "Operação inválida";
        break;
}

console.log("Resultado:", resultado);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let login = prompt(&quot;Digite seu login:&quot;)
let senha = prompt(&quot;Digite sua senha:&quot;)
function verificarlogin(usuario,senha){
let usuario1 = &quot;Vip&quot;
let senha1 = &quot;rei&quot;

let usuario2 = &quot;pietro&quot;
let senha2 = &quot;fbz&quot;

let usuario3 = &quot;gui&quot;
let senha3 = &quot;h&quot;

let usuario4 = &quot;nego&quot;
let senha4 = &quot;di&quot;

let usuario5 = &quot;miguel&quot;
let senha5 = &quot;ricardo&quot;

let usuario6 = &quot;erick&quot;
let senha6 = &quot;rodrigues&quot;

let usuario7 = &quot;souza&quot;
let senha7 = &quot;leite&quot;

let usuario8 = &quot;laura&quot;
let senha8 = &quot;cunha&quot;

let usuario9 = &quot;miguel&quot;
let senha9 = &quot;reis&quot;

let usuario10 = &quot;grazi&quot;

let senha10 = &quot;moraes&quot;

if (login === usuario1 &amp;&amp; senha1 === senha1){
return &quot;Login bem sucedido!&quot;
}

if (login === usuario2 &amp;&amp; senha === senha2){
return &quot;Login bem sucedido!&quot;
}

if (login === usuario3 &amp;&amp; senha === senha3){
return &quot;Login bem sucedido!&quot;
}

if (login === usuario4 &amp;&amp; senha === senha4){
return &quot;Login bem sucedido!&quot;
}

if (login === usuario5 &amp;&amp; senha === senha5){
return &quot;Login bem sucedido!&quot;
}

if (login === usuario6 &amp;&amp; senha === senha6){
return &quot;Login bem sucedido!&quot;
}

if (login === usuario7 &amp;&amp; senha === senha7){
return &quot;Login bem sucedido!&quot;
}

if (login === usuario8 &amp;&amp; senha === senha8){

return &quot;Login bem sucedido!&quot;
}

if (login === usuario9 &amp;&amp; senha === senha9){
return &quot;Login bem sucedido!&quot;
}

if (login === usuario10 &amp;&amp; senha === senha10){
return &quot;Login bem sucedido!&quot;
}

else{
return&quot;Usuário ou senha incorretos&quot;

}
}

let resultado = verificarlogin(login,senha)
console.log (resultado)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




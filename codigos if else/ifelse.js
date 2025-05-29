//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// ----------- 1. Verificando maioridade -----------
let idade = 17;
if (idade >= 18) {
    console.log("Maior idade");
} else {
    console.log("Menor de idade");
}

// ----------- 2. Saudação baseada na hora -----------
let horas = prompt("Que horas são?: ");
horas = Number(horas);

if (horas >= 6 && horas < 12) {
    console.log("Bom dia");
} else if (horas >= 13 && horas < 18) {
    console.log("Boa tarde");
} else {
    console.log("Boa noite");
}

// ----------- 3. Verificação simples de idade via prompt -----------
let idadeUsuario = Number(prompt("Digite sua idade: "));
if (idadeUsuario >= 16)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// ----------- 1. Verificando a temperatura -----------
let temp = 10;
if (temp <= 15) {
    console.log("Frio");
} else if (temp <= 25) {
    console.log("Térmico");
} else {
    console.log("Quente");
}

// ----------- 2. Comparando uma palavra -----------
let palavra = "felicidade";
if (palavra === "felicidade") {
    console.log("Palavra correta");
} else {
    console.log("Palavra incorreta");
}

// ----------- 3. Verificando quantidade de moedas -----------
let moedas = 12;
if (moedas < 10) {
    console.log("Poucas moedas");
} else if (moedas <= 20) {
    console.log("Quantidade média");
} else {
    console.log("Muitas moedas");
}

// ----------- 4. Classificando temperatura -----------
let temperatura = 25;
if (temperatura > 30) {
    console.log("Muito quente");
} else if (temperatura >= 20) {
    console.log("Calor");
} else {
    console.log("Frio");
}

// ----------- 5. Verificando número positivo ou negativo -----------
let num = -5;
if (num >= 0) {
    console.log("Número positivo");
} else {
    console.log("Número negativo");
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// ----------- 1. Verificando aprovação por nota -----------
let nota = 8;
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// ----------- 2. Verificando animal listado -----------
let animal = "Gato";
if (animal === "Cachorro" || animal === "Gato" || animal === "Pássaro") {
    console.log("Animal listado");
} else {
    console.log("Animal não listado");
}

// ----------- 3. Verificando se é fim de semana -----------
let diaSemana = "segunda-feira";
if (diaSemana === "Sábado" || diaSemana === "Domingo") {
    console.log("Fim de semana");
} else {
    console.log("Dia útil");
}

// ----------- 4. Verificando nível de experiência -----------
let experiencia = 3;
if (experiencia >= 2) {
    console.log("Experiente");
} else {
    console.log("Iniciante");
}

// ----------- 5. Verificando se número está dentro de um intervalo -----------
let numero = 15;
if (numero >= 10 && numero <= 20) {
    console.log("Dentro do intervalo");
} else {
    console.log("Fora do intervalo");
}


// ----------- 1. Verificando aprovação por nota -----------
let nota = 8;
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// ----------- 2. Verificando animal listado -----------
let animal = "Gato";
if (animal === "Cachorro" || animal === "Gato" || animal === "Pássaro") {
    console.log("Animal listado");
} else {
    console.log("Animal não listado");
}

// ----------- 3. Verificando se é fim de semana -----------
let diaSemana = "segunda-feira";
if (diaSemana === "Sábado" || diaSemana === "Domingo") {
    console.log("Fim de semana");
} else {
    console.log("Dia útil");
}

// ----------- 4. Verificando nível de experiência -----------
let experiencia = 3;
if (experiencia >= 2) {
    console.log("Experiente");
} else {
    console.log("Iniciante");
}

// ----------- 5. Verificando se número está dentro de um intervalo -----------
let numero = 15;
if (numero >= 10 && numero <= 20) {
    console.log("Dentro do intervalo");
} else {
    console.log("Fora do intervalo");

}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


 let respostaCorreta = 0;
let respostaIncorreta = 0;

// Pergunta 1
console.log("\nQual o meu nome?");
console.log("A - kadu");
console.log("B - pedro");
console.log("C - carlos");
console.log("D - henrique");
let pergunta1 = prompt("Digite a resposta: ");
if (pergunta1 === "A" || pergunta1.toLowerCase() === "kadu") {
  console.log("\nAlternativa Correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

// Pergunta 2
console.log("\nQual minha idade:");
console.log("A - 4");
console.log("B - 14");
console.log("C - 16");
console.log("D - 17");
let pergunta2 = prompt("Digite a resposta: ");
if (pergunta2 === "C" || pergunta2 === "16") {
  console.log("\nAlternativa Correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

// Pergunta 3
console.log("\nQual meu sobrenome?");
console.log("A - Pereira");
console.log("B - Eduardo");
console.log("C - Freitas");
console.log("D - Alberto");
let pergunta3 = prompt("Digite a resposta: ");
if (pergunta3 === "A" || pergunta3.toLowerCase() === "pereira") {
  console.log("\nAlternativa Correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

// Pergunta 4
console.log("\nQual meu jogo favorito?");
console.log("A - Hollow Knight");
console.log("B - Fortnite");
console.log("C - Red dead");
console.log("D - The last of us");
let pergunta4 = prompt("Digite a resposta: ");
if (pergunta4 === "A" || pergunta4.toLowerCase() === "hollow knight") {
  console.log("\nAlternativa Correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

// Pergunta 5
console.log("\nQual corte de cabelo eu faço?");
console.log("A - Low fade");
console.log("B - Moica");
console.log("C - Jaca");
console.log("D - High fade");
let pergunta5 = prompt("Digite a resposta: ");
if (pergunta5 === "B" || pergunta5.toLowerCase() === "moica") {
  console.log("\nAlternativa Correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

// Pergunta 6
console.log("\nQual estilo de música eu gosto?");
console.log("A - funk e jazz");
console.log("B - reggae");
console.log("C - kpop");
console.log("D - rap e trap");
let pergunta6 = prompt("Digite a resposta: ");
if (pergunta6 === "D" || pergunta6.toLowerCase() === "rap e trap") {
  console.log("\nAlternativa Correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

// Pergunta 7
console.log("\nQual o nome do meu canal?");
console.log("A - kadu gameplays");
console.log("B - kadu gamer");
console.log("C - oVip");
console.log("D - Vip");
let pergunta7 = prompt("Digite a resposta: ");
if (pergunta7 === "C" || pergunta7.toLowerCase() === "ovip") {
  console.log("\nAlternativa Correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

// Pergunta 8
console.log("\nQual meu objetivo antes dos 18?");
console.log("A - ter um filho");
console.log("B - ganhar na mega");
console.log("C - ficar rico");
console.log("D - ser famoso");
let pergunta8 = prompt("Digite a resposta: ");
if (pergunta8 === "D" || pergunta8.toLowerCase() === "ser famoso") {
  console.log("\nAlternativa Correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

// Pergunta 9
console.log("\nEm que ano saiu Hollow Knight?");
console.log("A - 2017");
console.log("B - 2019");
console.log("C - 2020");
console.log("D - 2018");
let pergunta9 = prompt("Digite a resposta: ");
if (pergunta9 === "A" || pergunta9 === "2017") {
  console.log("\nAlternativa Correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

// Pergunta 10
console.log("\nQuando sai Silksong?");
console.log("A - 2025");
console.log("B - 2026");
console.log("C - 2027");
console.log("D - 2028");
let pergunta10 = prompt("Digite a resposta: ");
if (pergunta10 === "A" || pergunta10 === "2025") {
  console.log("\nAlternativa Correta");
  respostaCorreta++;
} else {
  console.log("Resposta Errada");
  respostaIncorreta++;
}

// Resultado final
console.log("\nResumo final");
console.log("Respostas Corretas: " + respostaCorreta);
console.log("Respostas Incorretas: " + respostaIncorreta);
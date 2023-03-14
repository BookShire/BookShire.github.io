//ESSE ARQUIVO SERVE PRA FAZER A FRASE NO TOPO DO SITE MUDAR 
//A CADA VEZ Q VC DA F5 OU ENTRA DNV NO SITE

// array de frases que podem aparecer:
var frasesAleatorias = ["Hoje todos sabemos que a educação é nosso direito básico - Malala",
  "Eu sonho com um país onde a educação prevalecerá - Malala",
  "O sono é bom, ele disse, e livros são melhores - George Martin",
  "Não há saber mais ou saber menos: há saberes diferentes - Paulo Freire",
  "A leitura do mundo precede a leitura da palavra - Paulo Freire",
  "Talvez seja bom ser criança de vez em quando - Rick Riordan",
  "É preciso que a leitura seja um ato de amor - Paulo Freire"];


// variavel que gera um numero aleatorio sempre q o site e iniciado
var numAleatorio = Math.floor(Math.random() * frasesAleatorias.length);

// "frase atual" (armazena elementoda frase do DOM na variavel, acessado pelo nome da classe "quote")
var frase = document.getElementById("header_frase");

// altera o elemento html pegando uma frase da array usando o numero aleatorio de index
frase.innerHTML = '<h2 id="quote">' + frasesAleatorias[numAleatorio] + '</h2>';
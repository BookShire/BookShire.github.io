/*Essas linhas montam os "gatilhos" da barra de pesquisa:
  (botão 'Pesquisar' e tecla 'Enter')*/
document.getElementById('btnPesquisar').addEventListener("click", fetchPesquisa);
document.getElementById('INPTnavBar').addEventListener("keypress", function(evento) {
  if (evento.key === "Enter") {
    document.getElementById("btnPesquisar").click();
  }
});

//request básico de livros pro servidor da API
let rqstAPI = "https://www.googleapis.com/books/v1/volumes?q=";
let bookShireAPIkey = "AIzaSyDjtOH0ZYUdRBli0TBOL2HD78vhhHmGHB0";

//recolhendo o livro pesquisado do usuario
function inptPesquisa() {
  let inptConteudo = document.getElementById('INPTnavBar').value.split(' ');
  let query = "";

  for (let i = 0; i < inptConteudo.length; i++) {
    if (i != inptConteudo.length - 1) {
      query += inptConteudo[i] + "+";
    } else {
      query += inptConteudo[i];
    }
  }

  return query;
}

/*
  DOCUMENTAÇÃO ÚTIL SOBRE PESQUISA <https://developers.google.com/books/docs/v1/using#WorkingVolumes>
*/
function fetchPesquisa() {
  fetch(rqstAPI + inptPesquisa() + "&maxResults=20&langRestrict=pt&key=" + bookShireAPIkey)
    .then(res => {
      return res.json();
    }).then(data => {
      //TEST PRINT
      console.log(data);
      //limpando e printando a resposta na div de resultados
      document.getElementById("RESULTnavBar").innerHTML = "";

      for (resposta of data.items) {
        let foto;
        if(resposta.volumeInfo.imageLinks === undefined){ foto = "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"}
        else{ foto = resposta.volumeInfo.imageLinks.thumbnail;}

        document.getElementById("RESULTnavBar").innerHTML += '<div class="pesquisaItem"> <div class="embrulho"> <img class="rec1" src="' + foto + '">' + '<h3>' + resposta.volumeInfo.title + '</h3> </div> </div>';
      }
    })
}

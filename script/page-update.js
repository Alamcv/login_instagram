/*
Função para mudar imagem da tela do smartphone, alterando entre imagens selecionadas.
para funcionar, as imagens devem ter o mesmo nome e extensão, adicionado um número no final
Ex: img-1.png, img-2.png, img-3.png ...

*/
var i = 0;
var id = 'img-post'
const qtdeImages = 4;
// Intervalo em milissegundos (1s == 1000ms)
var milissegundos = 4000; // 5000 = 5 Segundos

// Executa a função a cada intervalo de tempo
var interval = setInterval(function(){

  // Recebe o elemento
  var img = document.getElementById(id);

  i++;
  if(i == qtdeImages){
      i = 0;
  }
  
  // Seta o source da nova imagem
  img.setAttribute('src', './img/starwars-'+i+'.png');

  
}, milissegundos);

const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavras = texto.split(" ");  
campoResultado.textContent = palavras.join(", ");
}

function processaTexto(texto){
   let palavras = texto.split(/\P{L}+/u);
   for(let i in palavras){
       palavras[i] = palavras[i].toLowerCase();
   }

   palavras = tiraPalavrasRuins(palavras);

  const frequencias = contaFrequencias(palavras);
  let ordenadas = Object.keys(frequencias).sort();

  function ordenaPalavra (p1, p2){
    return frequencias [p2] - frequencias[p1];
  }
  console.log(ordenadas);
  return ordenadas.slice(0, 10);
}

function contaFrequencias(palavras){
    let frequencias = {};
    for(let i of palavras){
      frequencias [i] = 0;
      for (let j of palavras){
         if (i == j){
           frequencias[i]++;  
         }
      }
    }
     return frequencias;
    
}
 
function tiraPalavrasRuins(palavras) {
    
}

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
  const frequencias = contaFrequencias(palavras);
  let ordenadas = Object.keys(frequencias).sort();
  console.console.log(ordenadas));
  
  return palavras;
}

function contaFrequencias(palavras){
    let frequencias = {};
    for(let i of palavras) {
      frequencias [i] = 0;
      for (let j of palavras){
         if (i == j){
           frequencias[i]++;  
         }
      }
    }
     return frequencias;
    
}
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
  
   let frequencias = [];
   for(let i in palavras) {
     frequencias [i] = 0;
     for (let j in palavras){
        if (palavras[i]==palavras[j]){
          frequencias[i]++;  
        }
     }
   }
    console.log(frequencias);

   return palavras;
}
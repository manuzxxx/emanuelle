let palavra;

function setup() {
  createCanvas(400, 400);

  palavra = palavraAleatoria();

}

function palavraAleatoria() {

  let palavras = ["Caminhante", "Caminho", "Caminha"];
  function draw() {
   return random(palavras);
}   
}
function inicializaCores()  {
  background("pink");
  fill("white");
  textSize(64);
  textAlign(CENTER, CENTER);  
} 

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length); 
  let parcial = palavra.substring(0, quantidade);
  return parcial;
} 

function draw() {
  
  inicializaCores();
  
  let texto = palavraParcial(0, width);
  
  text(texto, 200, 200);
  
}  
  
function modoNoturno(horario) {
  if (horario > 18) {
    console.log("Você precisa ligar o modo escuro!"); 
  } else {
  console.log("modo noturno não é necessário nesse momento.");  
  }
}
modoNoturno(15);

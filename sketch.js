let personagem
let grama

const tamanho = 64
const velocidade = 64
const tela = 576

let andarX = 0
let andarY = 0

let restart

// é chamada apenas uma vez ao executar o programa
function setup() {
  createCanvas(tela, tela)
  
  personagem = loadImage('person.png')
  grama = loadImage('grass.png')
}

// fica executando até que o programa seja encerrado
function draw() {
  if(andarX < 0){
    andarX = 0
  }
  
  if(andarY < 0){
    andarY = 0
  }
  
  if(andarX > tela - tamanho){
    andarX = tela - tamanho
  }
  
  if(andarY > tela - tamanho){
    andarY = tela - tamanho
  }
  
  background(220)
  
  for(let i = 0; i < tela/tamanho; i++){
    for(let j = 0; j < tela/tamanho; j++){
      image(grama, i*tamanho, j*tamanho, tamanho, tamanho)
    }
  }
  
  image(personagem, andarX, andarY, tamanho, tamanho)  
  
  if(andarX === tela - tamanho && andarY === tela - tamanho){
    rect(160, 160, 256, 256)
    textSize(35)
    text('GANHOU', 200, 300)

    restart = createButton('Reiniciar')
    restart.mousePressed(reset)
    
    noLoop()
  }
  
  //text(`x:${andarX} y: ${andarY}`, 300, 500)
}

function reset(){
  andarX = 0
  andarY = 0
  restart.remove()
  loop()
}

// é chamada uma vez toda vez que uma tecla é pressionada
function keyPressed(){
  if(keyIsDown(DOWN_ARROW)){
    andarY += velocidade
  }
  
  if(keyIsDown(UP_ARROW)){
    andarY -= velocidade
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    andarX += velocidade
  }
  
  if(keyIsDown(LEFT_ARROW)){
    andarX -= velocidade
  }
}







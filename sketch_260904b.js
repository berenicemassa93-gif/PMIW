let fondo
let caminarA_cant=5
let caminarA=[]
let caminar_cant=5
let caminar=[]
let bailar_cant=8
let bailar =[]
let indice =0
let posXcaminar=500
let avance=0
let quieto=0
let supermario
let fondoX=0
let movfondo=true
function preload(){
  supermario=loadImage('data/supermario.png')
  for(let i=1; i<=bailar_cant; i++){
    let imagen = loadImage('data/bailar_'+i+'.png');
    bailar.push(imagen);
  }
  for (let a=1; a<=caminarA_cant; a++){
    let imagen2= loadImage('data/caminarA_'+a+'.png')
    caminarA.push(imagen2);
  }
  for (let c=1; c<=caminar_cant;c++){
    let imagen3 =loadImage('data/caminar_'+c+'.png')
    caminar.push(imagen3);
  }
}


function setup() {
createCanvas(800,600)
fondo=loadImage('data/fondomario.jpg')
}


function draw(){
 Fondo()
image(bailar[indice],400,480,60,60)
image(caminarA[quieto],300,480,60,60)
  image (caminar[avance],posXcaminar,480,60,60)
  Supermario()

if (frameCount % 60==0)
indice++
if (frameCount%5==0){
posXcaminar--
avance++}
if (frameCount%20==0)
quieto++
if (indice>bailar_cant-1)
indice=0
if(avance>caminar_cant-1)
avance=0
if(quieto>caminarA_cant-1)
quieto=0


}

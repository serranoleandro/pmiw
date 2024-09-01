//Serrano Leandro
//Com 3
//Link del video: https://www.youtube.com/watch?v=K1NeG2FtUec

let cant = 10;
let img

function preload() {
img = loadImage('data/miImagen.jpg'); // Cargar la imagen
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(250, 255, 13);
   image(img, 1, 0, 400, 400); // Dibujar la imagen

  // cada cuadrado se rotará de 0 a 360 grados con cada movimiento del mouse
  let rotacion = map(mouseX, 0, width / 2, 0, 360);

  fill(255);
  // ciclo for anidado
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      cuadrado(500 * i / 2.5 + 500, 300 * j / 1.5 + 100, 10, rotacion, cant);
    }
  }

  
}

// Al presionar click repetidamente se agregan cuadrados dentro de los mismos infinitamente
function mousePressed() {
  cant++;
}

// Al presionar R restablecemos la ilusión desde el comienzo
function keyPressed() {
  if (key === 'R' || key === 'r') {
    cant = 10;
  }
}

function cuadrado(x, y, ancho, rotar, cantidad) {
  for (let i = 0; i < cantidad; i++) {
    push();
    translate(x, y);
    rotate(radians(rotar));

    rectMode(CENTER);
    noFill();

    let tam = map(i, 0, cantidad - 1, ancho, -200);
    let opacidad = map(i, 0, cantidad - 1, 30, 300);
    // se cambió la opacidad y se agregó efectos con mouseX y diferentes colores
    if (i % 2 == 0) {
      stroke(mouseX, 18, 18, opacidad);
      strokeWeight(3.80);
    } else {
      stroke(255);
    }
    rect(0, 0, tam, tam);

    pop();
  }
}

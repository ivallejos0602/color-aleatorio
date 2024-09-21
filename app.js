// seleccionar los elementos de DOM

const boton = document.querySelector('button');
const color = document.getElementById('color');


function generarColorHexAleatorio(){
  //let digitos = '0123456789ABCDEF';
  let digitos = '0123456789abcdef';
  let colorHex = '#'; 
  let indiceAleatorio;

  // para generar los 6 digitos
  for (let i =0; i<6; i++){
    //se elige un indice en forma aleatoria
    indiceAleatorio = Math.floor(Math.random() * 16);
    colorHex += digitos[indiceAleatorio];
  }

  return colorHex;

}

boton.addEventListener('click', function() {
  let colorAleatorio = generarColorHexAleatorio();
  console.log(colorAleatorio);
  // Actualizar el texto.
  color.textContent = colorAleatorio;
  //actualizar el color de fondo.
  document.body.style.backgroundColor = colorAleatorio;
});




/*function saludar(){
    console.log('Diseno web 1')
    //alert('Diseno web 1')
    documento = console.log(document);
  //  print(documento) //Imprime el archivo 'html'
    console.log(document.getElementById("parrafo1").innerHTML); //con el innerHtm solo mostrara solo el elemento dentro del cuerpo
    ejemplo_estilo = document.getElementById('parrafo1').getAttribute('style'); //obtenemos el parrafo, despues el atributo de style
    console.log(ejemplo_estilo);// lo mostramos
}
function cambiarParrafo2(){
    elemento = document.getElementById('parrafo2').innerHTML = 'fes';
}
function cambiarFondoBody(){
    const colores = ['#fff','#000','#F99','#3F5','#2F1','#22F'];
    const colorAlea = colores [Math.floor(Math.random())* 6];
    console.log(colorAlea);
    document.getElementById('cuerpo').style.backgroundColor = colorAlea
}*/

const textos = ["Html",'Python','Java','Css','SQL']; // Lista de textos
let indiceActual = 0; // Índice del texto actual
let textoActual = ""; // Texto actual que se muestra
let indiceCaracter = 0; // Índice del carácter actual que se está escribiendo
let esBorrado = false; // Indicador para saber si se está borrando el texto

function efectoEscritura() {
  const elementoTexto = document.getElementById("texto_escribiendose");
  const textoCompletoActual = textos[indiceActual];

  if (esBorrado) {
    textoActual = textoCompletoActual.substring(0, indiceCaracter--); // Elimina un carácter
  } else {
    textoActual = textoCompletoActual.substring(0, indiceCaracter++); // Añade un carácter
  }

  elementoTexto.textContent = textoActual; // Actualiza el texto que se muestra

  if (!esBorrado && indiceCaracter === textoCompletoActual.length) {
    // Pausa al final de la escritura
    setTimeout(() => esBorrado = true, 1000);
  } else if (esBorrado && indiceCaracter === 0) {
    // Cambia al siguiente texto
    esBorrado = false;
    indiceActual = (indiceActual + 1) % textos.length;
  }

  setTimeout(efectoEscritura, esBorrado ? 50 : 150); // Velocidad de borrado y escritura
}

document.addEventListener("DOMContentLoaded", efectoEscritura); // Inicia la animación cuando se carga la página

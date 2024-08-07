const contadorElemento = document.getElementById('contadorVisitas');
const reiniciarBoton = document.getElementById('btnReestablecer');


let contador = parseInt(localStorage.getItem('contador')) || 0;


contadorElemento.innerText = contador;


contador++;
localStorage.setItem('contador', contador);
contadorElemento.innerText = contador;

// Reiniciar el contador al hacer clic en el botón "Reestablecer Contador"
reiniciarBoton.addEventListener('click', () => {
  contador = 0;
  localStorage.setItem('contador', contador);
  contadorElemento.innerText = contador;
});
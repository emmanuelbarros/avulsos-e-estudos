/*window.alert(" for light")*/

var btnElement = document.querySelector('button.botao');
btnElement.addEventListener("click", criarQuadrado);

function criarQuadrado() {
  var newDiv = document.createElement('div');
  newDiv.style.backgroundColor = 'grey';
  newDiv.style.width = '1px';
  newDiv.style.height = '415px';
  document.querySelector('#app').appendChild(newDiv)}
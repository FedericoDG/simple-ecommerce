const efectivo = document.getElementById('button2');
const tarjeta = document.getElementById('button');

tarjeta.addEventListener('click', () => {
  alert(`Total a pagar ${localStorage.getItem('total')}
  Sus datos: ${localStorage.getItem('nombre')}
  Ud. abonarĂ¡ con Tarjeta`);
  localStorage.clear();
  window.location.href = './index.html';
});
efectivo.addEventListener('click', () => {
  alert(`Total a pagar ${localStorage.getItem('total')}
  Sus datos: ${localStorage.getItem('nombre')}
  Ud. abonarĂ¡ con Efectivo`);
  localStorage.clear();
  window.location.href = './index.html';
});
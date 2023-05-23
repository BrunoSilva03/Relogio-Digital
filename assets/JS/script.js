const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');


const relogio = setInterval(function time() {

   let dataDeHoje = new Date();
   let h = dataDeHoje.getHours();
   let min = dataDeHoje.getMinutes();
   let seg = dataDeHoje.getSeconds();

   if(h < 10) h = "0" + h;
   if(min < 10) min = "0" + min;
   if(seg < 10) seg = "0" + seg;
   
   horas.textContent = h;
   minutos.textContent = min;
   segundos.textContent = seg;
})
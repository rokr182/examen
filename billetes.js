let cantidad;

function hotTheLotery(cantidad) {
  cantidad = parseInt(cantidad);
  let billetes = [];
  let numeroBilletes = 0;

  if (cantidad >= 100) {
    billetes[0] = Math.trunc(cantidad / 100);
    cantidad = cantidad % 100;
    //console.log(cantidad);
  }
  if (cantidad >= 20) {
    billetes[1] = Math.trunc(cantidad / 20);
    cantidad = cantidad % 20;
    // console.log(cantidad);
  }

  if (cantidad >= 10) {
    billetes[2] = Math.trunc(cantidad / 10);
    cantidad = cantidad % 10;
    // console.log(cantidad);
  }
  if (cantidad >= 5) {
    billetes[3] = Math.trunc(cantidad / 5);
    cantidad = cantidad % 5;
    billetes[4] = cantidad;
    //console.log(cantidad);
  }

  for (let i = 0; i < billetes.length; i++) {
    let num;
    num = billetes[i];
    parseInt(numeroBilletes);
    numeroBilletes = numeroBilletes + parseInt(num);
  }
  console.log(numeroBilletes);
}
cantidad = prompt("cuanto dinero va a retirar?");

hotTheLotery(cantidad);
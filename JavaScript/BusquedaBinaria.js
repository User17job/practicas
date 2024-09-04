
const NABuscar = 50;
function BuscarMitad(arr){
  let long = arr.length;

  if (long / 2 === 0) {
    return arr[long / 2 - 1], arr[long / 2]
  }else{
    return arr[Math.floor(long / 2)]
  }
}



function Buscar() {
    // console.log(mitad, 'y hola'); 
    let Lista = [10, 60, 30, 40, 50, 70, 90, 20, 80]; 
    console.log('=============================='); 
    console.log('Hola Usuario|| se bienvenido :>'); 
    console.log('=============================='); 
    console.log('Esta es la lista disponible'); 
    console.log(Lista); 
    console.log('==============================');

    let mitad =0;
    console.log(mitad);
    while (mitad === NABuscar) {
        mitad = BuscarMitad(Lista)
        if (mitad === NABuscar) {
            let confirmacion = `nuemro buscado: ${NABuscar} --- Numero encontrado: ${mitad}`
            return confirmacion;
        }
    }
}

let res = Buscar()
// console.log(res);


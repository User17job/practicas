let Lista = [10, 60, 30, 40, 50, 70, 90, 20, 80]; 

function calcularLong(arr){
  let long = arr.length;

  if (long / 2 === 0) {
    return arr[long / 2 - 1], arr[long / 2]
  }else{
    return arr[Math.floor(long / 2)]
  }
}

let mitad = calcularLong(Lista)
console.log(mitad);
// este es un ejercicio en el que se busca obtener la suma de todos los elementos de un array


let arr = [5, 5, 5, 5, 5]

function blabla(arr){
  let result=0;
  for(let i = 0; i < arr.length; i++){ 
    let valor = arr[i]
    result = result + valor;
  }
  
  return result
}
// aqui tiene que devolver 25
let own = blabla(arr)
console.log(own)
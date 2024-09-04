// en este ejercicio pondre en practica dos algoritmos de ordenamiento, quick sort y merge sort

 let Lista =  [10, 130, 60, 30, 40, 100, 50, 70, 110, 120, 90, 20, 80];

function quicksort(arr){
//     // primero se verifica que el array este vacio ni que solo tengo un solo elemento 
    if(arr.length <= 1) return arr;

    let pivot = arr[arr.length -1];
    let left = [];
    let rigth =[];

//     // particion de los elementos en los arrays
    for(let i = 0; i < arr.length -1; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            rigth.push(arr[i]);
        } 
    }
//     // se llama a la funcion recursiva para ordenar los arrays
    return [...quicksort(left), pivot, ...quicksort(rigth) ]
};

let ordered = quicksort(Lista);
console.log(ordered)


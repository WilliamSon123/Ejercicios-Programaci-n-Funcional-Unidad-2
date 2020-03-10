
//9. Realizar una función recursiva que retorne como salida el resultado de la suma 1 + 3 + 5 + 7 + 9 + N.
const sumaRecur=numeros => {
    if(numeros.length == 0){
        return 0;
    }else{
        let [first, ...rest] = numeros;
        return first + sumaRecur(rest);
    }
}
console.log(sumaRecur([1 + 3 + 5 + 7 + 9 + 10 + 15]));
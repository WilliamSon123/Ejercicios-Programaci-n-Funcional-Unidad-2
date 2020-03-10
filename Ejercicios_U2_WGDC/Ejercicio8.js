
//8. Dadas dos listas, determine si son iguales. Devolver verdadero o falso.
var array1= [10, 6, 19];
var array2= [12, 18, 20];
//var array2= [12, 18, 20];

if(array1.sort().join(',')=== array2.sort().join(',')){
    console.log('Verdadero, Son Iguales');
}
else console.log('Falso, No son Iguales');
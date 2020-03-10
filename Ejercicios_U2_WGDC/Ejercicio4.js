
//4. Determine el mayor de 4 enteros.
var arreglo = [56, 32, 89, 32];
var mayor = 0;
 
for(i = 0; i < arreglo.length; i++){
    if (arreglo[i] > mayor)
    {
        mayor = arreglo[i];
    }
}
console.log("El numero mayor es: "+mayor);
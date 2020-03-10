
//11. Realiza una función que permita cargar calcular la unión, intersección y diferencia de dos conjuntos dados. 
function matematicas(conjunto1,conjunto2) {
    let union = new Set([...conjunto1, ...conjunto2]);
    let intersection = new Set([...conjunto1].filter(x => conjunto2.has(x)));
    let difference = new Set([...conjunto1].filter(x => !conjunto2.has(x)));
    console.log("Union:");
    console.log(union);
    console.log("Interseccion:");
    console.log(intersection);
    console.log("Diferencia:");
    console.log(difference);
}
let conjunto1 = new Set([1,2,3,4,5]);
let conjunto2 = new Set([2,6,4,7]);
matematicas(conjunto1,conjunto2);
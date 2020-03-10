
//10. Realizar una función que reciba una lista y devuelva empleando recursividad otra lista de los elementos pares. 
let l =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let l2= []

function impar (num){
    if (num == 0) 
        return false;
    else
        return par(num-1);
}

function par(num) {
    if (num == 0) 
        return true;
    else
        return impar(num-1);
}

for(let i=0; i< l.length; i++){

    if(par(l[i])==true){
        l2[i]=l[i];
    }
}
    var cont=0

do {
    if(l2[cont]==undefined){
        l2.splice(cont,1)
    }
console.log(l2[cont])
cont++
}
while(cont<l2.length)
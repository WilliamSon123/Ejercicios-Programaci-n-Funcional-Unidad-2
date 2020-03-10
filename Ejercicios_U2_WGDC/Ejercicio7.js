
//7. Determina si dada una lista, ésta se encuentra ordenada. Se debe devolver verdadero o falso.
const saberOrden=()=>{
    //var list=[1,2,3,4,5,6];
    var list=[5,1,8,9,3,7];
    var x = 0;

    for(var i=0; i<list.length; i++){
        if(x<list[i]){
            x=list[i];
            var list2=true;
        }else{
            var list2=false;
        }
    }
    return list2;
}
console.log(saberOrden());
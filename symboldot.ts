function display(...a:number[]){
    let i:number=0;
    let sum:number=0;
    for(i=0;i<=a.length;i++){
        sum=sum+a[i];
    }
    return sum;
}
var result:number=0;
result=display(1,2,3,4);
console.log(result);
result=display(1,2,3,4,5,6,7,8,9);
console.log(result);
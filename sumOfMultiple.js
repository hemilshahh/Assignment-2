let n=0;

for(let i=1;i<1000;i++){
    if(i%3===0 || i%5===0 || i%15===0){
        n=n+i
    }
}
console.log(n);
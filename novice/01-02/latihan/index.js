let c = 8;
let t = 16;
console.log(c);
console.log(t);
console.log("")
for (let b=-9; b<10; b++){
    console.log(b);
}
console.log("")
for (let b=-9; b<10; b+=2){
    console.log(b)
}
console.log("")
let b = 0;
do {
    b +=1;
    console.log(b);
    console.log("")
}while (b<5);
let i;
for (i=1;i<=10;i+=2)
{
    console.log('break'+i);
    if (i==7)
    {
        break
    }
}
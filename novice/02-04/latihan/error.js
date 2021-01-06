let a = 5
try{
    console.log(b)
}catch(err){
    console.log(err);
}finally {
    console.log(a);
}
const b = 5
try{
    console.log(b);
}catch(err){
    console.error();
}finally{
    console.log(a);
}
(somenput,(err, result)=> {
    if(err) return console.error(err);
    console.log(result);
})

Promise.resolve(1)
.then(res =>{
    console.log(res) //1
    throw new Error('error karna otak bocor')
    return Promise.resolve(2)
})
.then(res=>{
    console.log(res)
})
.catch(err=> {
    console.error(err)
    return Promise.resolve(3)
})
.then(res =>{
    console.log(res)
})
.catch(err =>{
    console.log();
})
;(async function(){
    try {
        await asuKabeh ()
    }catch(err){
        console.error(err);
    }
    console.log('mudah');
})()


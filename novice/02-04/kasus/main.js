class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  try{
   return primitiveMultiply(a, b)
   
  }catch (err){
    if (err){
        console.log(err);
        return reliableMultiply(a,b)
    }
  }finally{
    console.log('process succes');
  }
}
  console.log(reliableMultiply(8 , 8));
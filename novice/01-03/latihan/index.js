console.log("");
let display={
    display1: function() {return"display2";}
};
console.log(display.display1());
console.log('');
function my(cars) {
    cars.merek = "toyota";
}
let mycars={
    merek:"honda",
    model:"accord",
    tahun:1998
};
console.log(mycars.merek);
console.log(mycars.tahun);
console.log(mycars.model);
console.log("");
function make(x) {
    return function(y) {
      return x + y;
    };
  }
  
  let ada5 = make(5);
  let ada10 = make(10);
  
  console.log(ada5(123456789));
  console.log(ada10(09876543));
  console.log("");
  let hello1 = function(ikhsan){
    console.log("selamat datang"+ikhsan);
}
function hello2 (ikhsan,muhafi){
    console.log("selamat datang "+ikhsan+" dan "+muhafi);
}
 
hello1("ikhsan");
hello2("muhafi","ikhsan");
console.log('');
let luasPersegiPanjang = function(p,l)
{
    return p*l;
}
console.log('function =', luasPersegiPanjang);

let luas = (p,l)=> {return p*l;};
console.log('arrow =', luas (20,10));
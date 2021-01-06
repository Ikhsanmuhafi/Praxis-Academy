function cal(p1,p2,cb) {
    let result = p1 + p2

    if (typeof cb=== 'function'){
        result = cb (p1,p2);
    }
    return result;
};
let calDivide = cal (50,2, (a,b)=> a*b)
console.log(calDivide);

console.log('a');
console.log('b');
console.log('c');

console.log('a');
setTimeout (()=> console.log('b'), );
console.log('c');
// callback
function main(param1, param2, callBack) {
    console.log(param2, param1, callBack)
    callBack()
}

function myCallback() {
    console.log('hello callback');
}

main(1,2,myCallback)

function calculate(x,y) {
    result = x * y
    return result
}

console.log(calculate(3,2))

//promise
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function(response){
        return response.json();
    })
    .then(function (user) {
        console.log(user);
    })
  //async/await
  async function lala() {
      let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      let req = await res.json()
      console.log(req);
  }
  lala()
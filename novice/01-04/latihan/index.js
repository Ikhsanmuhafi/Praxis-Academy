console.log('no-1');
let nomor = [4, 5, 6, 8, 11];
console.log(nomor[2]);
// hasinya 6
console.log(nomor[3]);
// hasilnya 8
console.log(nomor[2-1]);
// hasilnya 5 
console.log('');
let angka = [4,5,6,];
angka.push(7);
angka.push(8);
console.log(angka);
// [4,5,6,7,8]
console.log(angka.pop());
console.log(angka);
// [4,5,6,7]
console.log('');
let pengguna = {
    nama : 'ikhsan',
    umur :18
};
console.log(pengguna);
console.log('');
    let user = {
        name: "ikhsan",
        age: 18
      };
      
      // loop over values
      for (let value of Object.values(user)) {
        alert(value); // ikhsan, then 18
      }
      let range = {
        from: 1,
        to: 10
      };
      
      // 1. call to for..of initially calls this
      range[Symbol.iterator] = function() {
      
        // ...it returns the iterator object:
        // 2. Onward, for..of works only with this iterator, asking it for next values
        return {
          current: this.from,
          last: this.to,
      
          // 3. next() is called on each iteration by the for..of loop
          next() {
            // 4. it should return the value as an object {done:.., value :...}
            if (this.current <= this.last) {
              return { done: false, value: this.current++ };
            } else {
              return { done: true };
            }
          }
        };
      };
      
      // now it works!
      for (let num of range) {
        alert(num); // 1, then 2, 3, 4, 5, 6, 7, 8, 9, 10
      }
     
      let map = new Map();
     
     map.set('3','str3');
     map.set(3, 'num3');
     map.set(false,'bool3');
     alert(map.get(3) );
     alert(map.get('3') );

     alert(map.size);
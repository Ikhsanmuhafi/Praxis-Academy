// // let PI = 3.14;

// // const calculateArea = (radius) => radius * radius * PI;
// // calculateArea(10);
// // console.log(calculateArea);
// let PI = 3.14;
// const calculateArea =(radius, pi) => radius * radius * pi;
// calculateArea(10, PI);
let books = [ 
    {nama: 'JavaScript', halaman: 450}, 
    {nama: 'Angular', halaman: 902}, 
    {nama: 'Node', halaman: 732} 
  ];
  / * Pola Imperatif * /
   for (let i = 0; i <books.length; i ++) { 
    books [i] .lastRead = new Date (); 
  }
  / * Pola Deklaratif * /
   books.map ((book) => { 
    book.lastReadBy = 'me'; 
    return book; 
  });
  console.log (books);
  console.log('');
let meetups = [
    {nama:'js', isActive:true, members:450},
    {nama :'angular', isActive:true, members:900},
    {nama :'node', isActive:false, members:900}
];
//imperatif--focuses on describing how program operates
let activeMeetups = [];
for (let i = 0; i < meetups.length; i++){
    let m = meetups[i];
    if (m.isActive){
        activeMeetups.push(m);
    }
}
console.log(activeMeetups);
console.log('');
//output will be array of 2 elements where isActive is true

// declarative-- focuses on what the program should accomplish
let activeMeetupsFP = [];
activeMeetupsFP = (meetups.filter((m) =>{
    return m.isActive;
}));
console.log(activeMeetupsFP);
console.log('');
let meetup = {nama : 'js', isActive:true,members: 49};
const scheduleMeetup = (tanggal, tempat) => {
    meetup.tanggal;
    meetup.tempat;
    if (meetup.members < 50)
    meetup.isActive = false;
}
const publishMeetup = () => {
    if (meetup.isActive) {
        meetup.publish = true;
    }
}
scheduleMeetup('today','Bnagalore');
publishMeetup();
console.log(meetup);
console.log('');
class animal {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    detail(){
        return this.name + 'color is' + this.color;
    }
};
let cat = new animal ('meong','ijo');
console.log(cat);
console.log('');
let cat1 = {
    nami : 'cici',
    warna : 'hitam putih',
}
cat1.detail = function(){
    return this.nami + 'warnanya' + this.warna
};
console.log(cat1);
console.log('');
function perkalian (a,b){
    return a*b;
};
perkalian(5,4);

angkaGenap = []
const even = n => n % 2 == 0;
const listOfNumbers = [0,1,2,3,4,5,6,7,8,9];
console.log(listOfNumbers.filter(even));
console.log('');

let filterArray = function (x, coll) {
    let resulAray = [];

    for (let i = 0; i < coll.length; i++ ){
        if (coll[i] < x ){
            resulAray.push(coll[i]);
        }
    }
    return resulAray
}
console.log(filterArray(7, [10,9,8,2,7,5,1,3,0]));
console.log('');
function smaller(number) {
    return number < this;
  }
  
  function filterArraY(x, listOfNumbers) {
    return listOfNumbers.filter(smaller, x);
  }
  
  let numbers = [10, 9, 8, 2, 7, 5, 1, 3, 0];
  
  console.log(filterArraY(3, numbers));
  console.log('');
  let anggota = [
      {nama: 'damayanti', umur: 26},
      {nama: 'damayanti', umur: 18},
      {nama: 'khusnul', umur: 20},
  ];
  const lebihTuaDari21 = orang => orang.umur > 21;
  const lebihan = anggota => anggota.filter(lebihTuaDari21);
  console.log(lebihan(anggota));
  console.log('');
  //map
  let people = [
    { name: "TK", age: 26 },
    { name: "Kaio", age: 10 },
    { name: "Kazumi", age: 30 }
  ];
  
  let peopleSentences = [];
  
  for (let i = 0; i < people.length; i++) {
    let sentence = people[i].name + " is " + people[i].age + " years old";
    peopleSentences.push(sentence);
  }
  
  console.log(peopleSentences);
console.log('');

const double = n => n.points * 2;

const doubleMap = numbers => numbers.map(double);

console.log(doubleMap([
  { name: 'ball', points: 2 },
  { name: 'coin', points: 3 },
  { name: 'candy', points: 4}
]));
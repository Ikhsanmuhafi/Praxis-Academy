// // // string
// // let nama = 'ikhsan';
// // console.log(nama);
// // // number
// // var tahun = 2020;
// // var tanggal = 17;
// // console.log(tahun,tanggal);
// // // boolean
// // let nilaiawal = true
// // console.log(nilaiawal);
// // //array
// // let hari = ['senin ', ' selasa ', ' rabu ', ' kamis ', ' jumat ', ' sabtu ', ' minggu '];
// // let nilai = [1,2,4,1,4,3];
// // let mix = [
// //     'ikhsan',
// //     123,
// //     true,
// //     false,
// //     ['a',' b ', ' c ']
// // ];
// // console.log(mix);
// // //objek
// // let orang = {
// //     nama : 'muhafi',
// //     umur : 18,
// //     'berat badan': 46,
// //     'sudah nikah': false,
// //     'jumlah anak' : 3,
// // };
// // console.log(orang);
// //function

// // let tambah = function (x) {
// //     let hasil = x % 3 === 0;
// //     return hasil;
// // };
// // console.log(tambah(6));
// // let nama = function (ikhsan) {
// //     return ikhsan
// // }
// // console.log(nama());

// let number = function (x,g,r) {
//     return x-g*r
// }
// console.log(number(10,3,4));



// //callback
// // function main(param1,param2,callback) {
// //     console.log(param1,param2);
// //     callback()
// // }

// // function myCallback() {
// //     console.log('hello callback');
// // }

// // console.log(main(1,2,myCallback));
// // function kalkulator(x,y) {
// //     result = x + y
// //     return result
// // }
// // console.log(kalkulator(3,8));

// function kalkulator(pertama,kedua,callback) {
//     result = pertama + kedua
//     if (typeof callback == 'function'){
//         result = callback(pertama,kedua)
//     }
//     return result
// }

// a=kalkulator(2000,4000,function (x,y) {return"$" + (x+y)})
// b=kalkulator(7000,2000,function (x,y) {return"Rp"+ (x*y)})
// console.log((a));
// console.log((b));
// //callback pada async

// function pertama(){
//     setTimeout(
//         function () {
//             console.log('pertama');
//         },100
//     )
// }
// function kedua(){
//     setTimeout(
//         function () {
//             console.log('kedua');
//         },200
//     )
// }
// function ketiga() {
//     setTimeout(
//         function () {
//             console.log('ketiga');
//         },300
//     )
// }
// pertama()
// kedua()
// ketiga()

// function requestAjax(callback) {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1')
//     xhr.onload = function () {
//         if(xhr.status === 200){
//             callback(xhr.responseText)
//         }else{
//             callback('failed')
//         }
//     }
//     xhr.send()
// }
 
// function showResult(data) {
//     if (data!='failed') {
//         data = JSON.parse(data)
//         console.log(data)
//     }
// }
// requestAjax(showResult)

// function ikhsan(bodoh, callBack) {
//     setTimeout(()=>{
//         console.log(bodoh);
//       console.log(callBack());  
//     },200);
// }
// ikhsan('saya bodoh', callBack =()=>{
//     return 'sangat bodoh'
// })

// function muhafi(nama, tahun,callBack,callBack2) {
//     let hitungUsia = 2020 - tahun;
//     console.log(callBack(nama,hitungUsia))
//     console.log(callBack2(nama))
// };

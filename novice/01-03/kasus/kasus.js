console.log('no-1');
function tellFortune (cimanggis, duabelas, yanto,pengangguran) {
    let masaDepan = 'anda akan menjadi ' + pengangguran + ' di ' + cimanggis + ' dan menikah dengan ' + yanto + '' + ' dengan ' +duabelas + ' anak.';
    console.log(masaDepan);
}
tellFortune("cimanggis","duabelas","yanto","pengangguran");
tellFortune("cipete", "tigabelas", "sumanto","pejabat");
tellFortune("jamaika","duapuluh","yasir", "pembegal");
console.log('no-2');
function calculateDogAge (usia) {
    let dogTahun= 7 * usia;
    console.log('anjing anda adalah '+ dogTahun+" tahun dalam tahun anjing! ");
}
calculateDogAge(6);
calculateDogAge(5);
calculateDogAge(3);
console.log('no-3');
function calculateSupply (umur, jumlahperhari) {
    let maxumur = 100 - umur
    let tahun = 123 * jumlahperhari
    total = maxumur * tahun + ("nasi goreng")
    console.log('kamu akan butuh '+ total + ' untuk bertahan sampai '+ maxumur + ' tahun')
}
calculateSupply(12,5);
calculateSupply(11,4);
calculateSupply(14,5);
console.log('no-4');
function calcGeometry (radius) {
    const PI = 3.14
    var circumference = 2 * PI * radius;
    console.log ("The circumference is " + circumference);
    var area = PI * radius * radius;
    console.log ("Area adalah" + area);
}
calcGeometry(100)
console.log('n0-5');
function celsiusToFahrenheit(celsius) {
    let celsiusINF = (celsius*9)/5+32;
    console.log(celsius + 'C adalah ' + celsiusINF + 'F');
}
celsiusToFahrenheit(40)

function fahrenheitToCelsius (fahrenheit) {
    let fahrenheitINC = ((fahrenheit-32)*5)/9;
    console.log(fahrenheit + 'F adalah '+ fahrenheitINC+ 'C');
}
fahrenheitToCelsius(12)
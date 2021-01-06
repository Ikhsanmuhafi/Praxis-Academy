console.log("-11");
let st = 9000000; 
let nd = 458909;  
let hasil;
while (st!=nd)
{
	if (st>nd)
	{
		st = st -nd;
	}
	else
	{
		nd = nd - st;
	}
}
hasil = st;
console.log(hasil);
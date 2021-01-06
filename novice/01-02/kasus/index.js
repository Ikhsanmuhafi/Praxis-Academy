console.log("-1")
var H, I;
H= window.prompt("Input the First integer", "0");
I = window.prompt("Input the second integer", "0");
                                                 
if(parseInt(H, 10) > parseInt(I, 10)) 
  { 
  console.log("The larger of "+ H+ " and "+ I+ " is "+ H+ ".");
  }   
else
  if(parseInt(I, 10) > parseInt(H, 10)) 
  {
  console.log("The larger of "+ H+" and "+ I+ " is "+ I+ ".");
  }                  
else
  {
   console.log("The values "+ H+ " and "+I+ " are equal.");
  }
  console.log("-2")
  var a=6;
  var b=-9;
  var c=12;
  if (a>0 && b>0 && c>0)
  {
         alert("The sign is +");
  }
  else if (a<0 && b<0 && c<0)
          {
            console.log("The sign is +");
          }
 else if (a>0 && b<0 && c<0)
            {
                console.log("The sign is +");
            }
else if (a<0 && b>0 && c<0)
                {
                    console.log("The sign is +");
                }
 else
                    {
                        console.log("The sign is -");
                    }
console.log("-3")       
var j=3
var k=5
var l=9
if (j>k && j>l)
{
    if (k>l)
    {
        console.log(j + "," + k + "," +l);
    }
    {
        console.log(j + "," + l + "," +k);
    }
}
else if (k>j && k>l)
{
    if (j>l)
    {
        console.log(k + "," + j + "," +l);
    }
    else
    {
        console.log(k + "," + l + "," +j);
    }
}
else if (l>j && l>k)
{
    if (j>k)
    {
        console.log(l + "," + j + "," +k);
    }
    else
    {
        console.log(l + "," + k + "," +j);
    }
}
console.log("-4");
a=-5;
b=-2;
c=-6;
d= 0;
f=-1;
if (a>b && a>c && a>d && a>f)
{
    console.log(a);
}
else if (b>a && b>c && b>d && b>f)
{
    console.log(b);
}
else if (c>a && c>b && c>d && c>f)
{
    console.log(c);
}
else if (d>a && d>c && d>b && d>f)
{
    console.log(d);
}
else
{
    console.log(f);
}
console.log("-5");
for (let y=1; y<=10; y++) {
    if (y === 1) {
        console.log(y+"is even");
    }
    else if (y% 4 === 1){
        console.log(y+"is even");
    }
    else {
        console.log(y+"is odd");
    }
}
console.log("-6");
var students = [['evan', 80], ['ali', 77], ['andi', 88], ['albab', 95], ['ikhsan', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}
console.log("-7");
for ( let q = 1; q <=100; q++)
{
    if (q%3 === 0 && q%5 === 0)
    {
        console.log(q+"FizzBuzz");
    }
    else if (q%3 ===0)
    {
        console.log(q+"Fizz");
    }
    else if (q%5 ===0)
    {
        console.log(q+"Buzz");
    }
    else
    {
        console.log(q);
    }
}
console.log("-8");
function happy_number(num)
{
    let m,n;
    let c=[];
    while(num !=1 && c[num] !== true)
    {
        c[num] = true ;
        m = 0 ;
        while (num > 0) {
            n=num%10 ;
            m+=n * n ;
            num = (num - n) / 10;
        }
        num = m ;
    }
    return (num == 1);
}

let cnt = 5;
let num = 1;
let f5 = '';
while(cnt-->0)
{
    while(!happy_number(num))
          num++ ;
f5 = f5+(num + ",");

    num++;
}
console.log('first 5 happy numbers are :'+f5);
console.log("-9");
function tiga_digit ()
{
    for (let g = 0; g < 10; ++g) 
    {
        for (let h=0; h<10; ++h)
        {
            for (let i=0; i<10; ++i)
            {
                let pow=(Math.pow(g,3)+Math.pow(h,3)+Math.pow(i,3));
                let plus=(g*100+h*10+i);
                if(pow==plus)
                {
                    console.log(pow);
                }
            }
        }
    }
}
tiga_digit ();
console.log("-10");
var x,y,chr;
for(x=0; x <=6; x++)
{
   for (y=0; y < x; y++)
     {
    chr=chr+("*");        
      }
 console.log(chr);
 chr='';    
}
//normal function
function sum(a:number,b:number):number
{
return a+b;
}
let result=sum(100,500);
console.log(result);


// inferring fun here we directly initilize fun to a var(no function name)
let result1 =function(a:number,b:number):number
{
    return a+b;
}
let val=result1(10,20);
console.log(val);

//default and optional parameter
function prod(x:number=100,y?:number):number
{
if(typeof y!='undefined')
{
    return x*y
}
return x*x
}
console.log(prod(20,30));
console.log(prod(30));
console.log(prod());// here we need to declare value so we need tominitilize is at beging

//rest paaarameters o to more argumnets
function getsumall(...num:number[]):number
{
let t=0;
num.forEach((n)=>t+=n);//iterator
return t;
}
console.log(getsumall(10,40,60,70,70));
console.log(getsumall(10,40));
console.log(getsumall());

function getsumofall(...numbers: number[]):number{
    let tot =0;
    numbers.forEach((num)=> tot+=num); //Iterator
    return tot;
}

console.log(getsumofall(10,40,60,70,70));
console.log(getsumofall(10,40));
console.log(getsumofall());
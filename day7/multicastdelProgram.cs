using System.Security.Cryptography;
using static multicastdel.Class1;

MathOpDel mth = new MathOpDel(MathOpe.Add);//static class so useclassname.methname
mth.Invoke(10, 20); //meth1 
mth(20, 30);//meth2
mth += MathOpe.Sub;
mth += MathOpe.Mul; 
mth += MathOpe.Div;
mth(50, 50);//perform add,sub,mul
mth -= MathOpe.Div;
mth(500, 50);





Func<int, int, int, int> fun = delegate (int x, int y, int z)//1-17 (1-16 inp) 17th for op
{
    return x + y + z;
};


Console.WriteLine(fun(10, 20, 30));//call the anonymous delegate


Func<int, int> fundellam = x => x * x;//Anonymous delegate using Lambda Expression

Console.WriteLine(fundellam(10));//call the anonymous delegate


Action<int, int> actiondel = (x, y)=> Console.WriteLine(x + y);//Action delegate takes 16 input and deos not return a value
actiondel(10, 20);


Predicate<int> isEven = (num) => num % 2 == 0;//int for only out mainy for bool

if (isEven(10)) //invoke iseven delegate
{
    Console.WriteLine("Num value is even");
}
else
{
    Console.WriteLine("Num values is odd");
}
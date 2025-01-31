
using gettersetter;

internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("GETTER AND SETTER METHOD");
        Console.WriteLine("enter id");
        int id=Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("enter name");
        string name=Console.ReadLine();
        Console.WriteLine("enter age");
        int age=Convert.ToInt32(Console.ReadLine());
        
        getsetstu v=new getsetstu();
        v.ID = id;
        v.Name = name;
        v.Age = age;
        Console.WriteLine(v.ID);
        Console.WriteLine(v.Name);
        Console.WriteLine(v.Age);
    }
}
namespace day4oops
{ 
internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("oops");
         
            
            

        
            Console.WriteLine("eid through base class constructor");
            int id = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("ename through base class constructor");
            string name = Console.ReadLine();
            Console.WriteLine("salary through base class constructor");
             decimal sal = Convert.ToDecimal(Console.ReadLine());
            Console.WriteLine("dname through base class constructor");
            string  Dname = Console.ReadLine();
            Console.WriteLine("mname through base class constructor");
             string Mname = Console.ReadLine();
            Man m = new Man(id,name,sal,Dname,Mname );

            m.disp();

            Console.WriteLine(" inheritance by meth");
            Console.WriteLine("eid");
            m.eid = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("ename");
            m.ename = Console.ReadLine();
            Console.WriteLine("did");
            m.did = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("salary ");
            m.sal = Convert.ToDecimal(Console.ReadLine());
            Console.WriteLine("dname");
            m.dname = Console.ReadLine();
            Console.WriteLine("mname");
            m.mname = Console.ReadLine();
            m.Eshow();
            m.Dshow();
            m.Mshow();


            m.disp();

        }
}
    }

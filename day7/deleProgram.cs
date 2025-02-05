internal class Program
{
   
    public delegate void delsample(string msg);
    public delegate void delsample2();
    private static void Main(string[] args)
    {
        Program obj = new Program();
        
        delsample del = new delsample(obj.Display);
        
        del("delegates");
        delsample2 del2 = new delsample2(disp);
        del2();
        disp();
    }
        void Display(string msg)
    {
        Console.WriteLine("Welcome to delegates of sam1" + msg);
    }
  
    static void disp()
    {
        Console.WriteLine("Delegates od sam 2");
    }
}
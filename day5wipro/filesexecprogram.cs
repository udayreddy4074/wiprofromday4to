using System.Security.Principal;
using day5files;
using Newtonsoft.Json;

internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("files");
        //FileStream fs = new FileStream("filedemo.txt",FileMode.OpenOrCreate );
        /*StreamWriter sw= new StreamWriter(fs);
        sw.WriteLine("THIS DEMO FILE BY OPEN OR CREATE(OpenOrCreate) MODE");
        sw.WriteLine("second line ");
        Console.WriteLine("file created sucessfully");
        sw.Close();
        fs.Close();*/
        //StreamReader sr = new StreamReader(fs);
        //Console.WriteLine(sr.ReadLine());
        // Console.WriteLine(sr.ReadLine());
        //Console.WriteLine(sr.ReadToEnd());
        /*string res = "";
        while(( res=sr.ReadLine() )!= null)
        {
            Console.WriteLine(res);
        }
        account acc=new account();*/
        Account acc = new Account() { Accid = 1, AccName = "Zara", AccBalance = 50000, };
        Account acc1 = new Account() { Accid = 2, AccName = "uday", AccBalance = 10000, };
        string data = JsonConvert.SerializeObject(acc);
        Console.WriteLine(acc);
        FileStream fs = new FileStream("Sample.txt", FileMode.OpenOrCreate);
        StreamWriter stw = new StreamWriter(fs);
        stw.WriteLine(acc.Accid+" "+acc.AccName+" "+acc.AccBalance);
        stw.WriteLine(acc1.Accid + " " + acc1.AccName + " " + acc1.AccBalance);
        Console.WriteLine("File created successfully");
        StreamReader sr = new StreamReader(fs);
        Console.WriteLine(sr.ReadToEnd());

        stw.Close();
        fs.Close();
       
    }
}

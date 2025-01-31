using abstactclass;

internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("abstarct class");
        //Abstract class cannot be instantiated
        //It is not mandatory to have abstract method in abstract class.
        //Generally,we go for abstract in order to show essential features and hide mthd impl
        // Flight fli = new Flight();
        //Object Initializer - At the time of object creation,initialize the values
        fbooking ff = new fbooking() { fno = 1, fname = "kingfisher", timedur = 5, dest = "india" };
        ff.fdet1();
        ff.fdet();//instance only by child class
        Console.WriteLine("instance  by child class and base class");
        flight f = new fbooking() { fno = 2, fname = "air india", timedur = 12 ,dest="austrailia"};
        ff.fdet1();
        ff.fdet();//instance  by child class and base class
    }
}
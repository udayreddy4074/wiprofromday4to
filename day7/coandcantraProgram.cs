
using covarienceandcontra;
delegate Vehicle delveh();//created delegate returning Vehicle as return type for covarience veh use as return type
delegate void delcontra(Car car);//contravarience delegate expecting parameter
internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("covarience");
        Vehicle vhl = new Vehicle();//base class
        delveh delv = new delveh(vhl.CreateVehicle);//dele
        Car cr = new Car();//der class
        
        delv = new delveh(cr.CreateCar);
        Console.WriteLine(" contravarience");
        delcontra delcont = new delcontra(vhl.Display);
        delcont.Invoke(cr);
        delcont += cr.DisplayCar;//multicast del
    }

}
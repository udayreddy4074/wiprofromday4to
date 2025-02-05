using cocondel;

class Program
{
    
    delegate TOutput cocondel<in TInput, out TOutput>(TInput input);
    static Vehicle ProcessVehicle(Vehicle v) 
    {
        Console.WriteLine("Processing: " + v.GetType().Name);
        return new Car(); 
    }
    public static void Main()
    {
        
        cocondel<Car, Vehicle> handler = ProcessVehicle;
        Car myCar = new Car();
        Vehicle result = handler(myCar); 
        Console.WriteLine("Returned: " + result.GetType().Name);
    }
}
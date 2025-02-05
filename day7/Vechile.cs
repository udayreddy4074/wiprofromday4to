using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace cocondel
{
    public class Vehicle
    {
        public virtual Vehicle CreateVehicle() 
        {
            Console.WriteLine("Vehicle created");
            return new Vehicle();
        }
        public virtual void Display(Vehicle vehobj) 
        {
            Console.WriteLine("Vehicle class Method: " + vehobj.GetType().Name);
        }
    }
    class Car : Vehicle
    {
        public override Car CreateVehicle() 
        {
            Console.WriteLine("Car Created");
            return new Car();
        }
        public override void Display(Vehicle vehobj)
        {
            Console.WriteLine("Car class Method: " + vehobj.GetType().Name);
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace abstactclass
{
    abstract class flight
    {
        public int fno { get; set; }
        public string fname { get; set; }
        public void fdet()//normal method
        {
            Console.WriteLine($"flight details {fno}  {fname}");
        }
        public void fdet1()
        {
        Console.WriteLine("these are normal methods in abstract class");
        }
        //public abstract void fdcheck(); it throws error bcz we need to intilize the same method in child class as it mentioned as abstact it  cannot be called when we call the base class through child class
        public abstract void fdcs();//abstract method declaration

    }
   class fbooking :flight
    {
         public int cost { get; private set; }
        public int timedur { get; set; }
        public string dest { get; set; }
        public override void fdcs()
        {
            if (timedur > 10)
            {
                cost = 10000;
            }
            else
            {
                cost = 5000;
            }
            if(dest.ToLower().Equals("Inter"))
                {
                cost = cost + 2000;
            }
            Console.WriteLine($"cost{cost}");
        }
    }

}


using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace interfacesdemo
{
    internal interface Ishapes
    {
        void calarea();//by default interfaces are public and abstract
        void square(int s)
        {
            Console.WriteLine("area of sqaure" + Math.Pow(s, 2));
        }

    }
    class circle: Ishapes
    {
        public int rad {  get; set; }
        public void calarea()
        {
            Console.WriteLine($"Area of Circle:{Math.PI * Math.Pow(rad, 2)}");
        }
    }
    class rect : circle
    {
        public int l { get; set; }
        public int b { get; set; }
        public void Calarea()
        {
            Console.WriteLine($"Area of Rectangle:{l * b}");
        }
    }

}


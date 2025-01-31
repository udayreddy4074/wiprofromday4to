using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace gettersetter
{
    internal class getsetstu
    {
        private int id;
        private string name;
        private int age;
       // private dname;
        public int ID
        {
            get
            {
                return id;
            }
            set
            {
                id = value;
            }
        }
        public string Name
        {
            get
            {
                return name;
            }
            set
            {
                if (value == "uday"||value== null)
                {
                    Console.WriteLine("welcome uday and null is restricted ");
                }
                else
                {
                    name = value;
                }
            }

        }
        public int Age
        {
            get
            {
                return age;
            }
            set
            {
                if (value >= 20 || value == null)
                {
                    age = value;
                }
                else
                {
                    Console.WriteLine("age must grater than 20");
                }
            }

        }

    }
}
    
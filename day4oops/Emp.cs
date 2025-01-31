using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace day4oops
{
    internal class Emp
    {
        public int eid {  get; set; }//baseclass
        public string ename { get; set; }   
        public  void Eshow()
        {
            Console.WriteLine($"emp class show method {eid}  {ename}");

        }
        public virtual void disp()
        {
            Console.WriteLine("overide emp disp" + eid  + ename);
        }
        public Emp(int eid, string ename) 
            {
            this.eid = eid;
            this.ename = ename;
        }

    }
}

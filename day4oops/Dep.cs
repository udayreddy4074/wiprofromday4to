using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace day4oops
{
    internal class Dep:Emp//child class
    {
        public int did {  get; set; }
        public string dname { get; set; }
        public decimal sal {  get; set; }   
        public void Dshow()
        {
            Console.WriteLine($"dep show meth { did}   { dname}" );
        }
        public override void disp()
        {
            base.disp();
            Console.WriteLine(" override dep disp meth"  + did + dname +sal);
        }
        public Dep(int eid,string ename,decimal sal,string dname ):base(eid,ename)
        {
            this.sal = sal;
            this.dname = dname;
            
        }
    }
}

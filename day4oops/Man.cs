using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace day4oops
{
     class Man:Dep//child2
    {
        public string mname {  get; set; }
        public void Mshow()
        {
            Console.WriteLine($"mshow meth{ mname}");
        }
        public override void disp()
        {
            base.disp();
            Console.WriteLine("override man disp"  + mname);

        }
        public Man(int eid, string ename, decimal sal, string dname, string mname) : base(eid, ename, sal, dname)
        {
            this.mname = mname;
        }
    }
}

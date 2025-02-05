using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace deldemo
{
    public delegate bool DelPromote(Employee emp);
    public class Employee
    {
        public int id { get; set; }
        public string name { get; set; }
        public int ey { get; set; }
        public decimal sal { get; set; }
        public static void PromoteEmployee(List<Employee> lstemps, DelPromote isPromotable)
        {
            foreach (Employee i in lstemps)//employee is datatype
            {
                if (isPromotable(i))//invoke target method,isPromote
                {
                    Console.WriteLine(i.name + " is Promoted");
                }
            }
        }
    }
}

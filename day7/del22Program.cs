using deldemo;


List<Employee> em = new List<Employee>()
            {
            new Employee(){id = 1,name="uday",ey=2,sal=50000 },
             new Employee(){id = 1,name="uday1",ey=6,sal=80000 },
              new Employee(){id = 1,name="uday2",ey=5,sal=50000 },
               new Employee(){id = 1,name="uday3",ey=7,sal=80000 },
                new Employee(){id = 1,name="uday4",ey=3,sal=50000 },
                 new Employee(){id = 1,name="uday5",ey=8,sal=90000 }
             };
DelPromote delpromote = new DelPromote(IsPromote);
Employee.PromoteEmployee(em, delpromote);//new meth of invoke or use  normal way 
bool IsPromote(Employee emp)
{
    if (emp.sal > 70000)
    {
        return true;
    }
    return false;
}

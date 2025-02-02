using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace day5exceptions
{
    internal class ageexeceptioncs: Exception

    {
        public ageexeceptioncs(string errormsg):base(errormsg) { }
    }
}

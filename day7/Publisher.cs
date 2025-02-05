using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace events
{
  
      
        public delegate void DelEvent();
        internal class Publisher
        {
            public event DelEvent SampEvent; 
                                             
            public void Initiate()
            {
                Console.WriteLine("Event Started");
                RaiseEvent();
            }
            public void RaiseEvent()
            {
                SampEvent?.Invoke(); 
            }
        }
    }



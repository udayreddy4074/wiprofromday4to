using interfacesdemo;

internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("Interface");
        string u;
        do
        {
            Console.WriteLine("Enter the Shape: 1.Circle 2.Rectangle");
            string? choice = Console.ReadLine();
            switch (choice.ToLower())
            {
                case "rect":
                    Console.WriteLine("Enter l and b ");
                    Ishapes r = new rect() { l = Convert.ToInt32(Console.ReadLine()), b = Convert.ToInt32(Console.ReadLine()) };
                    r.calarea();
                    break;
                case "circle":
                    Ishapes ish = new circle() { rad = Convert.ToInt32(Console.ReadLine()) };
                    ish.calarea();
                    break;

                default:
                    Console.WriteLine("enter correct choice");
                    break;

            }
            Console.WriteLine("do you want to continue(y/n)");
            u = Console.ReadLine();
        } while (u.Equals("y"));
        }
       
      
    }

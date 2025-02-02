using day5exceptions;

internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("Exception handling");
        try
        {

            Console.WriteLine("Enter the age:");
            int age = Convert.ToInt32(Console.ReadLine());
            if (age < 18)
            {
                throw new ageexeceptioncs("Invalid Age.You are not eligible to vote");
            }
            try
            {
                Console.WriteLine("enter value of a");
                int a = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("enter value of  b");
                int b = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("divison of a and b is" + (a / b));
            }
            catch (Exception er)
            {
                Console.WriteLine(er.Message);
                Console.WriteLine(er.StackTrace);
                //Console.WriteLine(er.ToString());

            }
                
        }
        
        catch (FormatException ex)
        {
            Console.WriteLine(ex.Message);
        }
        catch (DivideByZeroException ex)
        {
            Console.WriteLine(ex.Message);
        }
        catch (ageexeceptioncs ex)
        {
            Console.WriteLine(ex.Message);
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
        }
        
        finally
        {
            Console.WriteLine("finall keyword always executed");
        }
    }

}
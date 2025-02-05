internal class Program
{
    private static int count = 0;
    private static readonly object lockObj = new object();
    static void IncrementCount()
    {
        for (int i = 0; i < 1000; i++)
        {
            lock (lockObj) 
            {
                count++;
                Console.WriteLine(count);
            }
        }
    }
  
    private static void Main(string[] args)
    {
        
        Thread thread1 = new Thread(IncrementCount);
        Thread thread2 = new Thread(IncrementCount);
        // Start the threads
        thread1.Start();
        thread2.Start();
        // Wait for threads to complete
        thread1.Join();
        thread2.Join();
        // Output the final count (should be 2000)
        Console.WriteLine($"Final count: {count}");
    }
}

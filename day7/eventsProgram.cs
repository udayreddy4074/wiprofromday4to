
using events;
namespace events
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            Publisher publish = new Publisher();
            publish.SampEvent += Logsub.LogEventHandler;
            publish.SampEvent += Esub.EmailEventHandler;
            publish.Initiate();
        }
    }
}
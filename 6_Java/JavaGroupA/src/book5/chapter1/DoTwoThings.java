package book5.chapter1;


    import java.util.concurrent.ScheduledThreadPoolExecutor;
    public class DoTwoThings
    {
        ScheduledThreadPoolExecutor pool =  new ScheduledThreadPoolExecutor(2);
        CountDownClock clock = new CountDownClock(20);
        public static void main(String[] args)
        {
            new DoTwoThings();
        }
        DoTwoThings()
        {
            pool.execute(clock);
            pool.execute(clock);
            pool.shutdown();
        }
    }

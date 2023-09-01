package book5.chapter1;

import java.util.ArrayList;

public class CountDownApp {
    public static void main(String[] args) {
        CountDownClock clock = new CountDownClock(20);
        ArrayList<Runnable> events = new ArrayList<Runnable>();
        events.add(new LaunchEvent(16,"Flood the pad!", clock));
        events.add(new LaunchEvent(6, "Start engines!", clock));
        events.add(new LaunchEvent(0, "Liftoff!", clock));

        clock.start();

        for (Runnable e : events)
            new Thread(e).start();
    }
}

interface TimeMonitor {
    int getTime();
}
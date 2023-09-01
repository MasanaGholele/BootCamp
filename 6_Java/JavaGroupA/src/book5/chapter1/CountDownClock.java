package book5.chapter1;

class CountDownClock extends Thread implements TimeMonitor {
    private int t;

    public CountDownClock(int start) {
        this.t = start;
    }

    public void run() {
        for (; t >= 0; t--) {  // counts down from 20 to 0.
            System.out.println("T minus " + t);
            try {
                Thread.sleep(1000); // 1 sec intervals
            } catch (InterruptedException e) {
//              Because the sleep method throws Interrupted Exception, a
//              try/catch statement handles this exception.
            }
        }
    }

    public int getTime() {
        return t;
    }
}
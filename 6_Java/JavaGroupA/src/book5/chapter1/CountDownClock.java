package book5.chapter1;

class CountDownClock extends Thread
        implements TimeMonitor {
    private int t;

    public CountDownClock(int start) {
        this.t = start;
    }

    public void run() {
        for (; t >= 0; t--) {
            System.out.println("T minus " + t);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
            }
        }
    }

    public int getTime() {
        return t;
    }
}
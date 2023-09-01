package book5.chapter1;


interface TimeMonitorAbort {
    int getTime();

    void abortCountDown();
}

class CountDownClockAbort extends Thread
        implements TimeMonitorAbort {
    private int t;

    public CountDownClockAbort(int start) {
        this.t = start;
    }

    public void run() {
        boolean aborted = false;
        for (; t >= 0; t--) {
            System.out.println("T minus " + t);

            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                aborted = true;
            }
            if (Thread.interrupted())
                aborted = true;
            if (aborted) {
                System.out.println("Stopping the clock!");
                break;
            }
        }
    }

    @Override
    public int getTime() {
        return 0;
    }

    @Override
    public void abortCountDown() {

    }
}
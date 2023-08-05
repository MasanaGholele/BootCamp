package book2.chapter5;

public class LaunchControl {
    public static void main(String[] args) {
        System.out.println("We are going to launch in T minutes ");
        for (int i = 10; i > 0; i--) {
            if (i == 8) {
                System.out.println("Ignition sequence start!");
            } else {
                System.out.println(i + "...");
            }
            try {
                Thread.sleep(1000);
            } catch (Exception e) {
                System.out.println(e);
            }
        }
        System.out.println("All engines running!\n We have a liftoff!");
    }
}

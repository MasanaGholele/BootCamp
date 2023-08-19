package book2.chapter8;

public class CrazyWithZeros {

    public static void main(String[] args) {
        try {
            int answer = divideTheseNumbers(5, 0); // calls the divideTheseNumbers method with parameters 5 and 0
        } catch
        (Exception e) {
            System.out.println("Tried twice, " + "still didn't work!");
            // After the "finally clause" executes, the ArithmeticException is thrown back up to the calling method
        }
    }

    public static int divideTheseNumbers(int a, int b) throws Exception {
        int c;
        try {
            c = a / b; // first attempt to divide the numbers
            System.out.println("It worked!"); // division throws an error so this line never gets executed
        } catch (Exception e) {
            System.out.println("Didn't work the first time."); // instead the error is caught
            c = a / b; // method tries to divide again, this time no catch statement to catch the error
            System.out.println("It worked the second time!");
        } finally {
            System.out.println("Better clean up my mess."); // finally clause is always executed, no matter what happens.
        }
        System.out.println("It worked after all."); // second division throws an error so this line never gets executed as well
        return c;
    }
}

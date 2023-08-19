package book2.chapter8;

import java.util.*; // import all the classes from the java.util package.

public class GetInteger {
    static Scanner sc = new Scanner(System.in);

    public static void main(String[] args)
    {
        System.out.print("Please enter an integer: ");
        int i = GetAnInteger();
        System.out.println("You entered " + i);
    }

    public static int GetAnInteger() {
        while (true) {
            try {
                return sc.nextInt();
            } catch (InputMismatchException e) {
                // If you omit the statement that calls next, the while loop keeps reading it,
                // throws an exception, and displays an error message in an infinite loop
                sc.next();
                System.out.print("That's not " + "an integer. Try again: ");
            }
        }
    }
}
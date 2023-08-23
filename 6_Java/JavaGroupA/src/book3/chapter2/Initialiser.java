package book3.chapter2;

import java.util.Scanner;

public class Initialiser {
    private Scanner sc = new Scanner(System.in);
    public int x;

    {
        System.out.print("Enter the starting value " + "for x: ");
        x = sc.nextInt();
        System.out.println("You entered " + x);
    }

    public Initialiser() {
        System.out.println("In default constructor");
    }
}

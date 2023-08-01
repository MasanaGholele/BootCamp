package book2.chapter2;

import java.util.Scanner;

public class ScannerApp
{
    static Scanner sc = new Scanner(System.in);

    public static void main(String[] args)
    {
        System.out.print("Enter an integer: ");
        if (sc.hasNextInt()) {
            int x = sc.nextInt();
            System.out.println("You entered: " + x + ".");
        } else {
            System.out.println("incorrect! You did not enter an integer");
        }
    }
}


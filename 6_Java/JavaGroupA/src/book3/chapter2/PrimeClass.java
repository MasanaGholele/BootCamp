package book3.chapter2;

import java.util.Scanner;

public class PrimeClass {
    private Scanner sc = new Scanner(System.in);
    public int x;

    {
        System.out.print("Enter the starting value " + "for x: ");
        x = sc.nextInt();
    }

    public static void main(String[] args) {

        PrimeClass pc = new PrimeClass();
    }
}

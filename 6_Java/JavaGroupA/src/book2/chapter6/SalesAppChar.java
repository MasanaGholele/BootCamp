package book2.chapter6;

import java.util.Scanner;

public class SalesAppChar {


    static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.println("Please enter your class: ");
        String c = sc.nextLine();
        c = c.toLowerCase(); // even if your input is in UPPERCASE it'll be converted to lc
        char salesClass = c.charAt(0);
        double commissionRate;

        switch (salesClass) {
            case 'a':
                commissionRate = 0.02;
                break;
            case 'b':
                commissionRate = 0.035;
                break;
            case 'c':
                commissionRate = 0.05;
                break;
            default:
                commissionRate = 0.0;
                break;
        }
        System.out.println("Your commission is " + commissionRate + ".");
    }
}

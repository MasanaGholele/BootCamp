package book2.chapter6;

import java.util.Scanner;

public class SalesAppInt {

    static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.println("Please enter your class: ");
        int salesClass = sc.nextInt();
        double salesTotal = sc.nextDouble();
        double commissionRate;
        switch (salesClass) {
            case 1 -> {
                if (salesTotal < 10000.0)
                    commissionRate = 0.01;
                else
                    commissionRate = 0.02;
            }
            case 2 -> {
                if (salesTotal < 10000.0)
                    commissionRate = 0.025;
                else
                    commissionRate = 0.035;
            }
            case 3 -> {
                if (salesTotal < 10000.0)
                    commissionRate = 0.04;
                else
                    commissionRate = 0.05;
            }
            default -> commissionRate = 0.0;
        }
        System.out.println("Your commission is " + commissionRate + ".");
    }
}

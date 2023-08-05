package book2.chapter3;

import java.text.NumberFormat;

public class NumberFormatClassApp {

    static NumberFormat cf = NumberFormat.getCurrencyInstance();

    public static void main(String[] args) {
        printMyAllowance();
        printCostOfPaintBallGun();
    }

    public static void printMyAllowance() {
        double myAllowance = 5.00;
//        cf = NumberFormat.getCurrencyInstance(); // unnecessary duplication, declared at the top as a static
        System.out.println("My allowance is: " + cf.format(myAllowance));
    }

    public static void printCostOfPaintBallGun() {
        double costOfPaintBallGun = 69.95;
//        cf = NumberFormat.getCurrencyInstance(); // unnecessary duplication
        System.out.println("The cost of the Paint Ball Gun: " + cf.format(costOfPaintBallGun));

    }
}

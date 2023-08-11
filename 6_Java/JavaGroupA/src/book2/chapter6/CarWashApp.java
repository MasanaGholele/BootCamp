package book2.chapter6;

import java.util.Scanner;

public class CarWashApp {
    static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.println
                ("The Car Wash application!\n\n");
        System.out.print("Enter the package code: ");
        String s = sc.next();
        s = s.toLowerCase(); // even if your input is in UPPERCASE it'll be converted to lc
        char p = s.charAt(0);
        String details = "";
        switch (p) {
            case 'e':
                details += "\tNew Car Scent, plus ... \n";
            case 'd':
                details += "\tTire Treatment, plus ... \n";
            case 'c':
                details +=
                        "\tLeather/Vinyl Treatment, plus ... \n";
            case 'b':
                details += "\tWax, plus ... \n";
            case 'a':
                details += "\tWash, vacuum, and hand dry.\n";
                break;
            default:
                details = "That's not one of the codes.";
                break;
        }
        System.out.println("\nThat package includes:\n");
        System.out.println(details);
    }
}
package book2.chapter6;

import java.util.Scanner;

public class SpaTreatmentApp {
    static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.println
                ("The spa treatment application!\n\n");
        System.out.print("Enter the package code: ");
        String s = sc.next();
        s = s.toLowerCase(); // even if your input is in UPPERCASE it'll be converted to lc
        char p = s.charAt(0);
        String details = "";
        switch (p) {
            case 'e':
                details += "\tBuffet Breakfast, plus ... \n";
            case 'd':
                details += "\tWaxing and tinting (face, legs, under-arm, bikini), plus ... \n";
            case 'c':
                details +=
                        "\tRevitalising skin treatment, plus ... \n";
            case 'b':
                details += "\tFull Body Massage, plus ... \n";
            case 'a':
                details += "\tManicure, Pedicure, Lashes/Eyebrows.\n";
                break;
            default:
                details = "That's not one of the codes.";
                break;
        }
        System.out.println("\nThat package includes:\n");
        System.out.println(details);
    }
}
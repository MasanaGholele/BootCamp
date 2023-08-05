package book2.chapter5;

import java.util.Scanner;
public class NumberPhobia2 {

    static Scanner sc = new Scanner(System.in);
    public static void main(String[] args) {
        int number = 2;
        String input = "Y";
        while (input.equalsIgnoreCase("Y")) {
            System.out.println(number + " ");
            System.out.print
                    ("Answer 'Y' if you want to continue counting or enter another key to stop");
            input = sc.next();
            number += 2;
        }
        System.out.println("\nYou quit!");
    }
}

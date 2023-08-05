package book2.chapter5;

import java.util.Scanner;
public class NumberPhobia {
    static Scanner sc = new Scanner(System.in);
    public static void main(String[] args) {
      int number = 2;
      String input;
      while (true) {
          System.out.println(number + "");
          System.out.println("Do you want to continue counting? Answer 'Y' or 'N'");
          input = sc.nextLine();
          if (input.equalsIgnoreCase( "n")) {
              break; // count numbers until the user says to stop
          }
          number += 2;
      }
        System.out.println("You quit!");
    }

}

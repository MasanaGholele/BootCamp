package book2.chapter5;

import java.util.Scanner;
public class GetABet {

    static Scanner sc = new Scanner(System.in);
    public static void main(String[] args)
    {
        double bank = 1000; // assume the user has $1,000
       double bet; // the bet entered by the user

        System.out.println("You can bet between 1 and 1000");
        do
        {
            System.out.print("Enter your bet: ");
            bet = sc.nextInt();
        } while ( (bet <= 0) || (bet > bank) ); // only whether the user entered a valid number in an acceptable range.
        System.out.println("Your bet is good to go.");
    }
}

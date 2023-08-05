package book2.chapter5;

import java.util.Scanner;

public class GetABet3 {
    static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {

//        avoid duplicating the expression that does the data validation by adding a
//        boolean variable that’s set in the body of the do-while loop if the data is invalid

        int bank = 1000; // assume the user has $1,000
        int bet; // the bet entered by the user
        boolean validBet; // indicates if bet is valid
        System.out.println
                ("You can bet between 1 and " + bank);
        do {
            System.out.print("Enter your bet: ");
            bet = sc.nextInt();
            validBet = true;
            if ((bet <= 0) || (bet > bank)) {
                validBet = false;               // if the statement finds that the bet is not valid, validBet is set to false
                System.out.println
                        ("What, are you crazy?");
            }
        } while (!validBet);
        System.out.println("Your money's good here.");
    }
}

package book2.chapter5;

import java.util.Scanner;
public class GetABet2
{
    static Scanner sc = new Scanner(System.in);
    public static void main(String[] args)
    {
//        If you want to display an error message when the user enters incorrect input, you
//        have to use an if statement inside the loop, and this if statement must duplicate
//        the expression that validates the input data. Thus, the expression that does the
//        validation has to appear twice

        int bank = 1000; // assume the user has R1,000
        int bet; // the bet entered by the user
        System.out.println
                ("You can bet between 1 and " + bank);
        do
        {
            System.out.print("Enter your bet: ");
            bet = sc.nextInt();
            if ( (bet <= 0) || (bet > bank) )
                System.out.println
                        ("What, are you nuts? That's an invalid bet!!!");
        } while ( (bet <= 0) || (bet > bank) );
        System.out.println("Your money's good to go here.");
    }
}

package book2.chapter7;

import java.util.Scanner;
public class GuessingGameMethod {

    static Scanner sc = new Scanner(System.in);

    // static because both main and playARound methods will
    static boolean keepPlaying = true;
    public static void main(String[] args)
    {
        System.out.println("Let's play a guessing game!");
        while (keepPlaying)
        {
            playARound();
        }
        System.out.println("\nThank you for playing!");
    }
//    declared out of the main method
    public static void playARound()
    {
        boolean validInput;
        int number, guess;
        String answer;
// Pick a random number
        number = (int)(Math.random() * 10) + 1;
        System.out.println("\nI'm thinking of a number "
                + "between 1 and 10.");
// Get the guess
        System.out.print("What do you think it is? ");
        do
        {
            guess = sc.nextInt();
            validInput = true;
            if ((guess < 1) || (guess > 10))
            {
                System.out.print("I said, between 1 "
                        + "and 10. Try again: ");
                validInput = false;
            }
        } while (!validInput);
// Check the guess
        if (guess == number)
            System.out.println("You're right!");
        else
            System.out.println("You're wrong!"
                    + " The number was " + number);
// Play again?
        do
        {
            System.out.print("\nPlay again? (Y or N)");
            answer = sc.next();
            validInput = true;
            if (answer.equalsIgnoreCase("Y"));
            else if (answer.equalsIgnoreCase("N"))
                keepPlaying = false;
else
            validInput = false;
        } while (!validInput);
    }
}

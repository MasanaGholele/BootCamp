package book2.chapter3;

import java.util.Scanner;

public class MarblesApp {
    static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {
        // declarations
        int numberOfMarbles;
        int numberOfChildren;
        int marblesPerChild;
        int marblesLeftOver;

// get the input data
        System.out.println("Welcome to the marble divvy-upper.");
        System.out.print("Number of marbles: ");
        numberOfMarbles = sc.nextInt();
        System.out.print("Number of children: ");
        numberOfChildren = sc.nextInt();

// calculate the results
        marblesPerChild = numberOfMarbles / numberOfChildren;
        marblesLeftOver = numberOfMarbles % numberOfChildren;

// print the results
        System.out.println("Give each child " +
                marblesPerChild + " marbles.");
        System.out.println("You will have " +
                marblesLeftOver + " marbles left over.");
    }
}

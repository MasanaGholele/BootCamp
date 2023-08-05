package book2.chapter3;

import java.util.Scanner;

public class UsingModulusApp {
        static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {
        // declarations
        int totalBiscuits;
        int totalFriends;
        int biscuitsPerFriend;
        int biscuitsLeft;

// get the input data
        System.out.println("Welcome to Bakers biscuits");
        System.out.println("Please enter the total number of Biscuits that you have");
        System.out.print("totalBiscuits: ");
        totalBiscuits = sc.nextInt();
        System.out.print("total Friends: ");
        totalFriends = sc.nextInt();

// calculate the results
        biscuitsPerFriend = totalBiscuits / totalFriends;
        biscuitsLeft = totalBiscuits % totalFriends;

// print the results
        System.out.println("Well you need to offer each friend " + biscuitsPerFriend + " biscuits.");

        if (biscuitsLeft>0) {
            System.out.println("And you can have the last " + biscuitsLeft + " to chow!");
        } else
            System.out.println("I'm afraid there's nothing left for you...sorry");
        }
}

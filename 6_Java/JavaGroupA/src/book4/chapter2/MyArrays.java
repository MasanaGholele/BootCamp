package book4.chapter2;

import java.util.Scanner;
import java.util.Arrays;

public class MyArrays {
//    String names[] = new String[10];

    static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {

        //String[] Days = new Arrays[7];
        String[] Days = new String[7];
        Days[0] = "Sunday";
        Days[1] = "Monday";
        Days[2] = "Tuesday";
        Days[3] = "Wednesday";
        Days[4] = "Thursday";
        Days[5] = "Friday";
        Days[6] = "Saturday";

        int[] numbers = new int[100];
        for (int i = 0; i < 100; i++) {
            numbers[i] = (int) (Math.random() * 100) + 1;
            System.out.println(numbers[i]);
        }

        System.out.print("How many players are you going to enter?");
        int count = sc.nextInt();
        sc.nextLine(); //consume the newline character
        String[] players = new String[count];
        for (int i = 0; i < count; i++) {
            System.out.println("Enter a player name: ");
            players[i] = sc.nextLine();
        }

        for (int i = 0; i < players.length; i++) {
            System.out.println(players[i]);
        }
    }
}



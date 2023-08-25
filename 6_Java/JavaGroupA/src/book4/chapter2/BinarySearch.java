package book4.chapter2;

import java.util.Arrays;
import java.util.Scanner;

public class BinarySearch
{
    static Scanner sc = new Scanner(System.in);
    public static void main(String[] args) {
        int[] lotto = new int[5];

        for (int i = 0; i < lotto.length; i++) {
            lotto[i] = (int) (Math.floor(Math.random() * 10 + 1));
        }

        Arrays.sort(lotto);
        System.out.println("Enter a lucky number between 1 and 10.");

        int luckyNum = sc.nextInt();
        sc.nextLine();
        int foundAt = Arrays.binarySearch(lotto, luckyNum);

        if (foundAt > -1) {
            System.out.println("Today's my lucky day!");
        } else {
            System.out.println("Better luck next time.");
        }

    }
}

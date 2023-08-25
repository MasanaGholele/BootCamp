package book4.chapter2;

import java.util.Arrays;

public class ArraysTest {

    public static void main(String[] args) {
        int[] startValues = new int[100];
        Arrays.fill(startValues, (int)(Math.random() * 100) + 1);

        for (int i: startValues) {
            System.out.println(i);
        }
    }

}

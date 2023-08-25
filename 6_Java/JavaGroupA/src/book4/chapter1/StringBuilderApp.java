package book4.chapter1;

import java.util.Scanner;

public class StringBuilderApp {
    static Scanner sc = new Scanner(System.in);
    public static void main(String[] args)
    {
        System.out.print("Enter a string: ");
        String s = sc.nextLine();
        StringBuilder sb = new StringBuilder(s);
        int vowelCount = 0;

        for (int i = 0; i < sb.length(); i++)
        {
            // char c = s.toLowerCase().charAt(i);
            char c = Character.toLowerCase(sb.charAt(i));

            if ( (c == 'a') || (c == 'e') || (c == 'i') || (c == 'o') || (c == 'u') )
            {
                sb.setCharAt(i, '*');
                vowelCount++;
            }
        }
        System.out.println();
        System.out.println(s);
        System.out.println(sb.toString());
        System.out.println("Number of vowels removed: " + vowelCount);
    }
}

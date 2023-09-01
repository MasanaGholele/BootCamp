package book5.chapter2;

import java.util.regex.*;
import java.util.Scanner;
public final class Reg {
    static String r, s;
    static Pattern pattern;
    static Matcher matcher;
    static boolean match, validRegex, doneMatching;
    private static Scanner sc = new Scanner(System.in);
    public static void main(String[] args)
    {
        System.out.println("Welcome to the " + "Regex Tester\n");

        do
        {
            do
            {
                System.out.print("\nEnter regex: ");
                r = sc.nextLine();
                validRegex = true;
                try
                {
                    pattern = Pattern.compile(r);
                }
                catch (Exception e)
                {
                    System.out.println(e.getMessage());
                    validRegex = false;
                }
            } while (!validRegex);
            doneMatching = false;

            while (!doneMatching)
            {
                System.out.print("Enter string: ");
                s = sc.nextLine();
                if (s.length() == 0) {
                    doneMatching = true;
                } else
                {
                    matcher = pattern.matcher(s);
                    if (matcher.matches())
                        System.out.println("It is a match.");
                    else
                        System.out.println("It does NOT match.");
                }
            }
        } while (askAgain());
    }
    private static boolean askAgain()
    {
        System.out.print("Another? (Y or N) ");
        String reply = sc.nextLine();
        if (reply.equalsIgnoreCase("Y"))
            return true;
        return false;
    }
}
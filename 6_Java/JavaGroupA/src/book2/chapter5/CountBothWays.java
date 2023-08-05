package book2.chapter5;

public class CountBothWays {
    public static void main(String[] args)
    {
//        counts from 1 to 10 and 10 to 1 at the same time, using two counter variables:
        int a, b;
        for (a = 1, b = 10; a <= 10; a++, b--)
            System.out.println(a + " " + b);
    }
}

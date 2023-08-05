package book2.chapter5;

public class Dodecaphobia3 {
    public static void main(String[] args)
    {
//        using a continue statement to skip the number 12 rather than stop counting altogether when it reaches 12:
        int number = 0;
        while (number < 20)
        {
            number += 2;
            if (number == 12)
                continue;
            System.out.print(number + " ");
        }
        System.out.println();
    }
}

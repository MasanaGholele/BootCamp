package book2.chapter5;

public class Dodecaphobia {

    public static void main(String[] args)
    {
        int number = 2;
        while (number <= 20)
        {
            if (number == 12)
                break;              //when it gets to the number 12, it panics and aborts the loop:
            System.out.print(number + " ");
            number += 2;
        }
        System.out.println();
    }
}

package book2.chapter5;

public class CountToTenErrorFixed {
    public static void main(String[] args)
    {
        int i; // variable is declared before the for statement
        for (i = 1; i <=10; i++)
            System.out.println(i);

        System.out.println("The final value of i is " + i);
    }
}

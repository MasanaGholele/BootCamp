package book2.chapter5;

public class CountToTenError {
    public static void main(String[] args)
    {
        for (int i = 1; i <=10; i++)
            System.out.println(i);

//        System.out.println("The final value of i is " + i);
//        the statement refers to the variable i, which has gone out of scope because it was declared within the for loop.
    }
}

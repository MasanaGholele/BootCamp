package book4.chapter2;

import java.util.Arrays;

public class CopyDemo
{
    public static void main(String args[])
    {
        int arrayOriginal[] = {42, 55, 21};
//        int copyArray = arrayOriginal; will not work
        int arrayNew[] = Arrays.copyOf(arrayOriginal, 3);
        printIntArray(arrayNew);
    }
    static void printIntArray(int arrayNew[])
    {
        for (int i : arrayNew)
        {
            System.out.print(i);
            System.out.print(' ');
        }
        System.out.println();
    }
}

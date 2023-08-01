package book2.chapter2;

public class ShadowApp
{
    static int x;
    public static void main(String[] args)
    {
        x = 5;
        System.out.println("x = " + x);
        int x;
        x = 10;
        System.out.println("x = " + x);
        System.out.println("ShadowApp.x = " + ShadowApp.x);

        System.out.println("x = " + x + "\n ShadowApp x = " + ShadowApp.x); // doing it all in one statement, "\n = new line
    }
}

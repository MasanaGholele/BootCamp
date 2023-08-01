package book2.chapter2;

public class EnumTest2 {
    public enum Colour {RED, BLUE, YELLOW, WHITE}

    public static void main(String[] args)
    {
        Colour code;
        code = Colour.RED;
        System.out.println("The colour is " + code);
    }
}

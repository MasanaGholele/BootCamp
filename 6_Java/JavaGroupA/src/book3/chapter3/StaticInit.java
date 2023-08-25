package book3.chapter3;

public class StaticInit {

    public static int x;
    static {
        x = 32;
        System.out.println("The static field value is : " + x);
    }
    public StaticInit() {
        System.out.println("In constructor");
    }

    public static void main(String[] args) {
        System.out.println(StaticInit.x);
    }
}
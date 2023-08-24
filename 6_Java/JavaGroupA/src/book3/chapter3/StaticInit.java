package book3.chapter3;

import org.w3c.dom.ls.LSOutput;

public class StaticInit {

    public static int x;
    static {
        x = 32;
        System.out.println("The answer to the meaning of the universe is: " + x);
    }
    public StaticInit() {
        System.out.println("In constructor"); //won't print as it's prior to installation
    }

    public static void main(String[] args) {
        System.out.println(StaticInit.x);
    }
}
package book2.chapter8;

public class MyException {
    public static void main(String[] args) {
        try {
            doSomething(false);
        } catch (Exception e) {
            System.out.println("Exception!");
        }
    }

    public static void doSomething(boolean t)
            throws Exception { // If a method contains a throw statement, it must include a throws clause in its declaration
        if (t)
            throw new Exception();
    }
}
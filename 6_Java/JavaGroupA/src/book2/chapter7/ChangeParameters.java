package book2.chapter7;

public class ChangeParameters {
    public static void main(String[] args) {
        int number = 1;
        tryToChangeNumber(number);
        System.out.println(number);
    }

    public static void tryToChangeNumber(int i) {
        i = 2;
    }
}
// Even though the tryToChangeNumber method changes the value of its parameter,
// that change has no effect on the original variable that was passed to the method.
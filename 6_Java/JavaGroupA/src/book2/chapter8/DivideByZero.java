package book2.chapter8;

public class DivideByZero {
    public static void main(String[] args) {
        int a = 5;
        int b = 0; // you know this won't work
        try {
            int c = a / b; // but you try it anyway
        } catch (
                ArithmeticException e) { // ArithmeticException is defined by java.lang, so an import statement for it isn’t necessary.
            System.out.println("Oops, you can't " + "divide by zero.");
        }
    }
}

// You can usually avoid the ArithmeticException that results from dividing integer
// data by zero by checking the data before performing the division (input validation):
// if (b != 0)
// c = a / b;
// This eliminates the need to enclose the division in a try block,
// because you know that the division by zero won’t happen.
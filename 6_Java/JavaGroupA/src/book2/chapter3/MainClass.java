package book2.chapter3;

public class MainClass {
    public static void main(String[] args) {
//        When you divide two int values, the result is an integer value, even if you assign
//it to a double variable. For example:
        int a = 21;
        int b = 6;
        double answer = a / b; // answer = 3.0
        System.out.println(answer);

//        if you want to divide int values and get an accurate
//double result, you must cast at least one of the int values to a double.
        int a2 = 21, b2 = 6;
        double answer2 = (double)a2 / b2; // answer = 3.5
        System.out.println(answer2);
    }
}

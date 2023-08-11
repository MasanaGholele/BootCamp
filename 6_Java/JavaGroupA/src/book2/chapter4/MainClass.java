package book2.chapter4;

public class MainClass {

    public static void main(String[] args) {

//        int appleCount = 1;
//        String msg = "You have " + appleCount + " apple" + ((appleCount > 1) ? "s" : ".");
//        System.out.println(msg);

//        Comparing strings in Java page 149
        String answer = "Yes";
        if (answer == "Yes") {
            System.out.println("they are equal");
        }

        String answer2 = "Yes";
        if (answer2.equals("Yes"))
            System.out.println("The answer is Yes.");
    }
}

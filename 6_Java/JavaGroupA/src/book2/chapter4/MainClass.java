package book2.chapter4;

public class MainClass {

    public static void main(String[] args) {

        int appleCount = 1;
        String msg = "You have " + appleCount + " apple" + ((appleCount > 1) ? "s" : ".");
        System.out.println(msg);

        String answer = "Yes";
        if (answer == "Yes") {
            System.out.println("thery are equal");
        }
    }
}

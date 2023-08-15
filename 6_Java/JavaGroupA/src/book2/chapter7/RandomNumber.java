package book2.chapter7;

public class RandomNumber {
    public static void main(String[] args) {
        int number = getRandomNumber();
        System.out.println("The Number is: " + number);
    }

    public static int getRandomNumber() {
        int num = (int) Math.floor(Math.random() * 10 + 1); // Math.random returns a double, cast to an "int"
        return num;
    }
}

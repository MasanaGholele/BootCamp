package book2.chapter5;

public class ForDodecaphobia {
    public static void main(String[] args) {
        for (int number = 2; number <= 20; number += 2) {
            if (number == 12)
                break;
            System.out.print(number + " ");
        }
        System.out.println();
    }
}

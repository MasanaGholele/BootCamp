package book2.chapter5;

public class EvenCounter2 {
//    The statement or statements in the body of a do-while loop always get executed at least once.
//     if the while expression is false the first time it’s evaluated the statement in the body will not be executed at all
    public static void main(String[] args) {
        int number = 2;
        do {
            System.out.print(number + " ");
            number += 2; // if  this condition is not met "while (number <= 20);" then the 2 will not be added at all
        } while (number <= 20);
        System.out.println();
    }
}

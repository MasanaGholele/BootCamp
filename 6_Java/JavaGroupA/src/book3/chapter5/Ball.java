package book3.chapter5;

public abstract class Ball {
    public abstract void hit(int batSpeed); // no method body

    public static void main(String[] args) {
        BaseBall b = new BaseBall();
        b.hit(50);

        BallFactory bf = new BallFactory();
        Ball newBall1 = bf.getBall("baseball");
        Ball newBall2 = bf.getBall("softball");

        newBall1.hit(30);
        newBall2.hit(20);
    }
}

// If you extend an abstract class you must implement and override all the methods in the abstract class.
class BaseBall extends Ball {
    @Override
    public void hit(int batSpeed) {
        System.out.println("You hit the baseball at " + batSpeed + " km/h");
    }
}

class SoftBall extends Ball {
    @Override
    public void hit(int batSpeed) {
        System.out.println("You hit the softball at " + batSpeed + " km/h");
    }
}

// OR you must create another abstract class.
//abstract class BaseBall extends Ball {
//
//}
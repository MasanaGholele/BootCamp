package book3.chapter5;

public class BallFactory {

    public Ball getBall(String b) {
        if (b.equalsIgnoreCase("baseball")) {
            return new BaseBall();
        } else if (b.equalsIgnoreCase("softball")) {
            return new SoftBall();
        } else {
            return null;
        }

    }
}

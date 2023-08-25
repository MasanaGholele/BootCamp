package book3.chapter5;

public class TestPlayableBall implements PlayableBall {
    @Override
    public void throwBall() {
        System.out.println("Throwing ball.");
    }

    @Override
    public void kickBall() {
        System.out.println("Kicking ball.");
    }

    @Override
    public void catchBall() {
        System.out.println("Catching ball.");
    }

    @Override
    public void dropBall() {
        System.out.println("Dropping ball.");
    }

    public static void main(String[] args) {
        // works too: PlayableBall b = new TestPlayableBall();
        TestPlayableBall b = new TestPlayableBall();
        b.throwBall();
        b.kickBall();
        b.catchBall();
        b.dropBall();
    }
}

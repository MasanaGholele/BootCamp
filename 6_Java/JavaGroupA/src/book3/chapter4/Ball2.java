package book3.chapter4;

public class Ball2
{
    public double weight;
    public double diameter;

    public Ball2(double weight, double diameter) {
        this.weight = weight;
        this.diameter = diameter;
        System.out.println("Hello from the BALL constructor.");
    }
    public Ball2(double weight) {
        this.weight = weight;
        this.diameter = 5;
        System.out.println("Hello from the BALL constructor.");
    }

    public Ball2() {
        this.weight = 3;
        this.diameter = 3;
        System.out.println("Hello from the BALL constructor.");
    }

    @Override
    public String toString() {
        return "Ball weight: " + this.weight + " and diameter: " + this.diameter;
    }
    public void throwBall() {
        System.out.println("Throwing the ball.");
    }
}

class BaseBall2 extends Ball2 {
    // It will first call the constructor of the superclass then its own constructor.
    public BaseBall2(double weight) {
        // super MUST BE THE VERY FIRST THING YOU CALL OR YOU WILL GET AN ERROR!
        super(weight);
        System.out.println("Howdy from the BASEBALL constructor.");
    }
    public BaseBall2() {
        super(5);
    }
    public static void hit(BaseBall2 baseball) {
        System.out.println("I am hitting a baseball.");
    }
}

class SoftBall2 extends Ball2 {

    public SoftBall2(double weight, double diameter) {
        super(weight, diameter);
        System.out.println("Hey from the SOFTBALL constructor.");
    }
    public SoftBall2(double weight) {
        super(weight);
        System.out.println("Hey from the SOFTBALL constructor.");
    }

    public SoftBall2() {
        // super MUST BE THE VERY FIRST THING YOU CALL OR YOU WILL GET AN ERROR!
        super(2);
        System.out.println("Hey from the SOFTBALL constructor.");
    }
}

//
class BallApp2 {
    public static void main(String[] args) {
//        BaseBall2 bb = new BaseBall2(5.125);
//        System.out.println(bb.toString());
//
//        System.out.println();
//
//        SoftBall2 sf1 = new SoftBall2(1.95, 2.5);
//        System.out.println(sf1.toString());
//
//
//        SoftBall2 sf2 = new SoftBall2(2.321);
//        System.out.println(sf2.toString());
//
//        System.out.println();
//
//        SoftBall2 sf3 = new SoftBall2();
//        System.out.println(sf3.toString());
//
//        System.out.println();
//        Ball2 b1 = new Ball2();
//        System.out.println(b1.toString());

//        // Automatic casing from sub-class to super-class
//        BaseBall2 bb4 = new BaseBall2();
//        bb4.throwBall();
//
//        //////////////////////////////////////////////////////////////////
//
//        // This requires manual casting . Going from a Ball to a Baseball.
//        Ball2 b4 = new BaseBall2();
//        // BaseBall2.hit(b4); This won't run because the b4 is of type Ball2.
//        // So we need to cast it from a Ball2 to a BaseBall2
//        BaseBall2 castedB4 = (BaseBall2)b4;
//        // Now we have the b4 casted into a BaseBall2.
//        // Now we can call the hit method, of BaseBall2. Since the parameter requires it to be of type BaseBall2.
//        BaseBall2.hit(castedB4);
//
//        if (b4 instanceof BaseBall2) {
//            System.out.println("B4 is a BaseBall");
//        }
//        if (b4 instanceof Ball2) {
//            System.out.println("B4 is a Ball");
//        }

    }
}

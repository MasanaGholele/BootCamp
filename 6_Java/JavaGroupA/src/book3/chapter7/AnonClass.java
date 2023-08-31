package book3.chapter7;

public class AnonClass {
    public static void main(String[] args) {
//        concrete class
        Ball b1 = new BaseBall();
        b1.hit();

//       anonymous
        Ball b2 = new Ball() {
            @Override
            public void hit() {
                System.out.println("You hit an anonymous ball!");
            }
        };
        b2.hit();

//        lambda
        Ball b3 = ()-> System.out.println("You hit a lambda ball!");
        b3.hit();
    }
}

class BaseBall implements Ball {

    @Override
    public void hit() {
        System.out.println("You hit a concrete ball!");
    }
}

interface Ball {
    void hit(); // all interface methods are by default public
}
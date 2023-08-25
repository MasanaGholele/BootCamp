package book3.chapter4;

public class Ball {
    private double weight;
    protected double getWeight() {
        return this.weight;
    }
    protected void setWeight(double weight) {
        this.weight = weight;
    }

    public void hit() {
        System.out.println("You hit it a kilometre!");
    }
}

class Baseball extends Ball {
    public Baseball() {
        setWeight(5.125);
    }
    @Override
    public void hit() {
        System.out.println("You tore off the cover!");
        super.hit();
    }
}

class BallApp {
    public static void main(String[] args) {
        Baseball b1 = new Baseball();
        b1.hit();
    }
}
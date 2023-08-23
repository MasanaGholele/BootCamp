package book3.chapter2;

public class Player {

    private int health; // health field itself is declared as private, so it can’t be accessed directly

    public int getHealth() {
        return health;
    }

    public void setHealth(int health) {
        if (health > 0 && health <= 10) {
            this.health = health;
        } else {
            System.out.println("Invalid health code");
        }
    }
}
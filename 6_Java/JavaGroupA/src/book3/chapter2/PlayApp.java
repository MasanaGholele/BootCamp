package book3.chapter2;

public class PlayApp {
    public static void main(String[] args) {
        Player p1 = new Player();
        p1.setHealth(12);
        System.out.println("Player 1 has a health status of " + p1.getHealth());

        Player p2 = new Player();
        p2.setHealth(7);
        System.out.println("Player 2 has a health status of " + p2.getHealth());
    }
}

// You can create a read-only property by providing a get accessor but not a set accessor.
// Then other classes can retrieve the property value — but can’t change it
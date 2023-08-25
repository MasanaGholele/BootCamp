package book3.chapter4;

public class Game {

    public void play() {
        System.out.println("Playing a game.");
    }
}

class Chess extends Game {
    public void play() {
        System.out.println("Playing chess.");
    }
}

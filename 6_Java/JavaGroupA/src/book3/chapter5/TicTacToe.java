package book3.chapter5;

public class TicTacToe extends Game implements Playable, CardGame {
    @Override
    public void play() {
        System.out.println("Playing a tic tac toe game.");
    }

    @Override
    public void shuffleCards() {
        System.out.println("Shuffle the cards.");
    }

    public static void main(String[] args) {
        TicTacToe ttt = new TicTacToe();
        ttt.play();
        ttt.shuffleCards();
    }

}

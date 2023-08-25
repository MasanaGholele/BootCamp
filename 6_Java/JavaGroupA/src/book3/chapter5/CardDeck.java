package book3.chapter5;

public class CardDeck implements Dealable {

    public void deal(int cards) {
        System.out.println("DEALING OUT " + cards + " cards.");
    }

    public static void startGame(Dealable deck, String game) {
        if (game.equalsIgnoreCase("poker")) {
            deck.deal(5);
        } else if (game.equalsIgnoreCase("hearts")) {
            deck.deal(13);
        } else if (game.equalsIgnoreCase("gin")) {
            deck.deal(10);
        }
    }

    public static void main(String[] args) {
        CardDeck d = new CardDeck();
        startGame(d, "hearts");
        startGame(d, "gin");
    }
}

package book3.chapter2;

public class ActorApp {

    public static void main(String[] args) {

        Actor actor1 = new Actor("Arnold", "Schwarzenegger", true);
        Actor actor2 = new Actor("Brad", "Pitt");
        System.out.println(actor1.firstName + " is a good actor: " + actor1.isGood);
        System.out.println(actor2.firstName + " is a good actor: " + actor2.isGood);

        // it will print the address of the actor object
//        actor1.printObject();
//        actor2.printObject();

    }
}

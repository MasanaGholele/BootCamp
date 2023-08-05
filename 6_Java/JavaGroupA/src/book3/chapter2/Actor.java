package book3.chapter2;

public class Actor {

    String firstName;
    String lastName;

    boolean isGood;

    public Actor(String first, String last) {
        this.firstName = first;
        this.lastName = last;
    }

    public Actor(String first, String last, boolean isGood) {
        this.firstName = first;
        this.lastName = last;
        this.isGood = isGood;
    }

//    manually typed, to generate it right-click on the String variable and click generate to get the code below
//    public void printObject() {
//        System.out.println(this);
//    }

//    manually typed
//    @Override
//    public String toString() {
//       return this.firstName + " " + this.lastName;
//    }

    // generated
    @Override
    public String toString() {
        return "Actor{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", isGood=" + isGood +
                '}';
    }
}

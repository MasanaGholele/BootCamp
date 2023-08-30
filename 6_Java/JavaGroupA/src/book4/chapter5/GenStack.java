package book4.chapter5;

import java.util.*;

public class GenStack<E> {
    private LinkedList<E> list = new LinkedList<E>();

    public void push(E item) {
        list.addFirst(item);
    } // add to top

    public E pop() {
        return list.poll();
    }

    public E peek() {
        return list.peek();
    }

    public boolean hasItems() {
        return !list.isEmpty();
    }

    public int size() {
        return list.size();
    }
}
class GenStackTest {
    public static void main(String[] args) {
        GenStack<String> gs = new GenStack<>();
        System.out.println("Pushing four items onto the stack");
        gs.push("One");
        gs.push("Two");
        gs.push("Three");
        gs.push("Four");
        System.out.println("There are " + gs.size() + " items on the stack");
        System.out.println("The top item is " + gs.peek() + "\n");
        System.out.println("Popping everything off the stack! ");
        while(gs.hasItems()) {
            System.out.println(gs.pop());
        }
        System.out.println("There are " + gs.size() + " items on the stack");
    }
}
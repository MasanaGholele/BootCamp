package book4.chapter5;

import java.util.*;

public class GenQueue<E> {
    private LinkedList<E> list = new LinkedList<E>();

    public void enqueue(E item) {
        list.addLast(item);
    }

    public E dequeue() {
        return list.poll();
    }

    public boolean hasItems() {
        return !list.isEmpty();
    }

    public int size() {
        return list.size();
    }

    public void addItems(GenQueue<? extends E> q) {
        while (q.hasItems())
            list.addLast(q.dequeue());
    }
}

class GenQueueTest {
    public static void main(String[] args) {
        GenQueue<Employee> empList = new GenQueue<>();
        GenQueue<HourlyEmployee> hList = new GenQueue<>();

        hList.enqueue(new HourlyEmployee("Trump", "Donald"));
        hList.enqueue(new HourlyEmployee("Gates", "Bill"));
        hList.enqueue(new HourlyEmployee("Forbes", "Steve"));

        empList.addItems(hList);

        while (empList.hasItems())
        {
            Employee emp = empList.dequeue();
            System.out.println(emp.firstName + " " + emp.lastName);
        }
        System.out.println(empList.size());
    }

}
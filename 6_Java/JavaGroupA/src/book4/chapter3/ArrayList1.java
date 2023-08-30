package book4.chapter3;

import java.util.ArrayList;
import java.util.Iterator;

public class ArrayList1 implements Iterable {

    public static void main(String[] args) {
//        old way of doing it(before generics); you could add different data
//        ArrayList signs = new ArrayList();
//        ArrayList signs = new ArrayList(100);
//        signs.add(20);
//        signs.add("Hi");
//        System.out.println(signs);

//        Type String
//        ArrayList<String> signs = new ArrayList<>();
//        signs.add("Masana");
//        Employee emp = new Employee("Gholele", "Masana");
//        signs.add(emp.toString());
//        System.out.println(signs);

//        Type employee
//        ArrayList<Employee> signs = new ArrayList<>();
//        Employee emp = new Employee("Gholele", "Masana");
//        signs.add(emp);
//        System.out.println(signs);

//        Even if you gave it a capacity, you can still add more items and, it'll automatically resize it for you
//        ArrayList<String> nums = new ArrayList<>(2);
//        nums.add("One");
//        nums.add("Two");
//        nums.add("Three");
//        nums.add("Four");
////        System.out.println(nums);
////        nums.add(10, "Eleven"); //can't add it to " index 10" because it does not exist
//
////        size returns the "length" of your array
//        for(int i = 0; i < nums.size(); i++) {
//            System.out.println(nums.get(i));
//        }
//        System.out.println(nums);
//        for (String s : nums)
//        {
//            int i = nums.indexOf(s);
//            System.out.println("Item " + i + ": " + s);
//        }
//
////        Iterator e = nums.iterator();
////        while(e.hasNext()) {
////            String s = (String) e.next();
////            System.out.println(s);
////        }
//
////        you can also them in a variable
////        String first = nums.set(0, "Uno");
////        String second = nums.set(1, "Dos");
////        String third= nums.set(2, "Tres");
////
////        System.out.println(first);
////        System.out.println(second);
////        System.out.println(third);
////
////        System.out.println(nums);
//
////        ArrayList<String> newItems = new ArrayList<>(4);
////        newItems.add("Uno");
////        newItems.add("Dos");
////        newItems.add("Tres");
////        newItems.add("Cuatro");
////
////        for (int i = 0; i < nums.size(); i++) {
////            System.out.println(nums.set(i, newItems.get(i)));
////        }
////
//        System.out.println(nums);
//        ArrayList<Employee> emps = new ArrayList<>();
//        Employee emp1 = (new Employee("Addams", "Gomez"));
//        Employee emp2 = (new Employee("Taylor", "Andy"));
//        Employee emp3 = (new Employee("Kirk", "James"));
//
//        emps.add(emp1);
//        emps.add(emp2);
//        emps.add(emp3);
//
//        System.out.println(emps);
//        emps.remove(emp2);
//        System.out.println(emps);
//
//        ArrayList<Employee> emps2 = new ArrayList<>();
//
//        emps2.add(emp2);
//        emps2.add(emp3);
//
//        System.out.println(emps2);
////        emps.removeAll(emps2);
//        emps.retainAll(emps2);
//        System.out.println(emps);
//

    }

    @Override
    public Iterator iterator() {
        return null;
    }
}

class Employee {
    String lastName;
    String firstName;

    public Employee(String lastName, String firstName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @Override
    public String toString() {
        return this.lastName + " " + this.firstName;
    }
}
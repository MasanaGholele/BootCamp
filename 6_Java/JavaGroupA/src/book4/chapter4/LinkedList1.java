package book4.chapter4;

import java.util.LinkedList;

public class LinkedList1 {
    public static void main(String[] args) {
        LinkedList<String> officers = new LinkedList<>();
        officers.add("Blake");
        officers.add("Burns");
        officers.add("Houlihan");
        officers.add("Pierce");
        officers.add("McIntyre");

//        officers.addFirst("Blake");
//        officers.addFirst("Burns");
//        officers.addFirst("Houlihan");
//        officers.addFirst("Pierce");

//        officers.add(2, "Tuttle");
//
//       System.out.println(officers);
//
//
//
//       String removedItem =  officers.set(2, "Murdock");
//
//        for (String s : officers) {
//            System.out.println(s);
//        }
//        System.out.println("Removed item is: " + removedItem);

        System.out.println(officers);
        officers.remove("Blake");
        System.out.println(officers);
        officers.remove(2);
        System.out.println(officers);
        String tuttle = "Tutlte";
        officers.add(2, tuttle);
        officers.remove();
        System.out.println(officers);
        officers.clear();
        System.out.println("The last officers standing are: " + officers);
    }
}

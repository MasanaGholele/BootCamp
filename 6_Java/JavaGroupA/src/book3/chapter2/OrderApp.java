package book3.chapter2;

import java.text.NumberFormat;
public class OrderApp {

    static NumberFormat nf = NumberFormat.getCurrencyInstance();

    public static void main(String[] args) {
        Order order1 = new Order();
        order1.setQuantityOrdered(200);
        order1.setUnitPrice(5.99);
        double total = order1.getOrderTotal();
        System.out.println("Total is " + nf.format(total));

        Order order2 = new Order();
        order2.setQuantityOrdered(50);
        order2.setUnitPrice(3.45);
        double total2 = order2.getOrderTotal();
        System.out.println("Total is " + nf.format(total2));

        Order order3 = new Order();
        order3.setQuantityOrdered(20);
        order3.setUnitPrice(8.99);
        double total3 = order3.getOrderTotal();
        System.out.println("Total is " + nf.format(total3));

    }

}

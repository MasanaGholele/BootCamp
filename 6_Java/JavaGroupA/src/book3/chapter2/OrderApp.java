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
    }

}

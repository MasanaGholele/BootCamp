package book3.chapter2;

public class Order {

    private double unitPrice;

    private double quantityOrdered;

    public double getQuantityOrdered() {
        return quantityOrdered;
    }

    public void setQuantityOrdered(double quantityOrdered) {
        this.quantityOrdered = quantityOrdered;
    }


    public double getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(double unitPrice) {
        this.unitPrice = unitPrice;
    }

    public double getOrderTotal()
    {
        return unitPrice * quantityOrdered;
    }

}


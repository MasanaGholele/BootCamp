package book3.chapter4;

import java.io.IOException;

public class ProductDDB
{
    public static Product getProduct()
            throws ProductDataException
    {

        try
        {
            Product p;
            // code that gets the product from a file
            // and might throw an IOException

//            p = new Product(50);
            p = new Product(-50);

            return p;
        }
        catch (ProductDataException e)
        {
            throw new ProductDataException("ProductDataException has occurred!");
//            System.out.println("Product data exception");
        }

    }

    public static void main(String[] args) {
        try {
            getProduct();
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
    
}

class Product {

    public Product(double price) throws ProductDataException
    {
        if (price < 0)
        {
            throw new ProductDataException("");
        }
    }

}

package book4.chapter2;

import java.text.NumberFormat;

public class Sales {

    public static void main(String[] args) {

        double[][] sales = new double[5][4];
        for (int y = 0; y < sales.length; y++) {
            for (int r = 0; r < sales[y].length; r++) {
                sales[y][r] = Math.floor(Math.random() * 20000 + 10000);
            }
        }

        NumberFormat cf = NumberFormat.getCurrencyInstance();
        System.out.println("\t\tNorth\t\tSouth\t\tEast\t\tWest");
        int year = 2004;
        for (int y = 0; y < 5; y++)
        {
            System.out.print(year + "\t");
            for (int r = 0; r < 4; r++) {
                System.out.print(cf.format(sales[y][r]));
                System.out.print("\t");
            }
            System.out.println();
            year++;
        }
    }
}

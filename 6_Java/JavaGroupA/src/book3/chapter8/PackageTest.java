package book3.chapter8;

import com.outlook.masanagholele.util.Console;
public class PackageTest {
    public static void main(String[] args)
    {
        while (Console.askYorN("Keep going?"))
        {
            System.out.println("D'oh!");
        }
    }
}

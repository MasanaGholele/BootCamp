package book3.chapter3;

public class CountTestApp { // keeps track of how many times its constructor has been called
    public static void main(String[] args)
    {
        printCount();
        for (int i = 1; i < 3; i++)
        {
            CountTest c1 = new CountTest(); // creates an instance of the CountTest class (loops 10 times)
            printCount(); // printCount method, which prints the number of CountTest objects that have been created so far
        }
    }
    private static void printCount()
    {
        System.out.println("There are now " + CountTest.getInstanceCount() + " instances of the CountTest class.");
    }
}
class CountTest
        {
private static int instanceCount = 0;
public CountTest()
        {
        instanceCount++;
        }
public static int getInstanceCount()
        {
        return instanceCount;
        }

        }

package book2.chapter7;

public class ParameterScope {
    public static void main(String[] args)
    {
        int min = 1;
        int max = 10;
        int number = getRandomNumber(min, max);
        System.out.println(number);
    }
    public static int getRandomNumber(int min, int max)
    {
        return (int)(Math.random()
                * (max - min + 1)) + min;
    }
}

// Here the main method declares variables named min and max, and the getRandom
// Number method uses min and max for its parameter names. This doesn’t cause any
// conflict, because in each case the scope is limited to a single method.
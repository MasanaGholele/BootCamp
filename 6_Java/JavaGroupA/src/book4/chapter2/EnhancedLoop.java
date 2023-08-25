package book4.chapter2;

public class EnhancedLoop {

    public static void main(String[] args) {
        String[] days = getDaysOfWeek();

        printStringArray(days);
    }

    public static void printStringArray(String[] strings)
    {
        for (String s : strings)
            System.out.println(s);
    }

    public static String[] getDaysOfWeek()
    {
        String[] days = { "Sunday", "Monday", "Tuesday",
                "Wednesday", "Thursday",
                "Friday", "Saturday" };
        return days;
    }
}

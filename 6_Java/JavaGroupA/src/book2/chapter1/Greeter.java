package book2.chapter1;
import javax.swing.JOptionPane;
public class Greeter
{
    public void sayHello()
    {
//    System.out.println("Hello, World!");
        JOptionPane.showMessageDialog(null,
                "Hello, World!", "Greeter",
                JOptionPane.INFORMATION_MESSAGE);
    }
}
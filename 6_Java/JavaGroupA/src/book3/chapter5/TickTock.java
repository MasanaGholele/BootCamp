package book3.chapter5;

import java.awt.event.*;
import javax.swing.*;

public class TickTock {
    public static void main(String[] args) {
        // create a timer that calls the Ticker class
        // at one second intervals
        Timer t = new Timer(1000, new Ticker());
        t.start();
        // display a message box to prevent the
        // program from ending immediately
        JOptionPane.showMessageDialog(null,
                "Click OK to exit program");
    }
}

class Ticker implements ActionListener {
    private boolean tick = true;

    public void actionPerformed(ActionEvent event) {
        if (tick) {
            System.out.println("Tick...");
        } else {
            System.out.println("Tock...");
        }
        tick = !tick;
    }
}

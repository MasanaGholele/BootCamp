package book3.chapter7;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

// A static inner class is similar to an inner class but doesn’t require an instance of the outer class

public class TickTockAnon {
    private String tickMessage = "Tick...";
    private String tockMessage = "Tock...";

    public static void main(String[] args) {
        TickTockAnon t = new TickTockAnon();
        t.go();
    }
    private void go() {
        Timer t = new Timer(1000, new ActionListener() {
            private boolean tick = true;
            @Override
            public void actionPerformed(ActionEvent e) {
                if(tick) {
                    System.out.println(tickMessage); // the inner class directly accesses a field of the outer class
                } else {
                    System.out.println(tockMessage); // the inner class directly accesses a field of the outer class
                }
                tick = !tick;
            }
        });
        t.start();
//        This dialog box is necessary to give the timer a chance to run. The application ends when the user clicks OK.
        JOptionPane.showMessageDialog(null, "Click OK to exit program");
        System.exit(0); // without this the program will take slightly longer to exit
    }


//    private class Ticker implements ActionListener {
//        private boolean tick = true;
//        @Override
//        public void actionPerformed(ActionEvent e) {
//            if(tick) {
//                System.out.println(tickMessage); // the inner class directly accesses a field of the outer class
//            } else {
//                System.out.println(tockMessage); // the inner class directly accesses a field of the outer class
//            }
//            tick = !tick;
//        }
//    }
}

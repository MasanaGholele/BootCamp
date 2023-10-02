/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package igbooks.igbook1.lesson7;

import java.util.Set;
import java.util.HashSet;
import java.util.TreeSet;

/**
 *
 * @author masan
 */
public class SetExample {

    public static void main(String[] args) {
        Set<String> set = new HashSet<>();
        
        set.add("A");
        set.add("Z");
        set.add("B");
        set.add("B");

        for(String item: set) {
            System.out.println(item);
        }
        
        Set<String> set2 = new TreeSet<>();
        
        set2.add("one");
        set2.add("two");
        set2.add("three");

        for(String item2: set2) {
            System.out.println(item2);
        }
        
        Set<String> set3 = new TreeSet<>();
        
        set3.add("one1");
        set3.add("two2");
        set3.add("three3");

        for(String item3: set3) {
            System.out.println(item3);
        }
        
    }

}
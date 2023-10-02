/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package igbooks.igbook1.lesson7;

import java.util.Set;
import java.util.TreeSet;

/**
 *
 * @author masan
 */
public class TestComparable {
    
    public static void main(String[] args) {
           
        Set<Student> studentList = new TreeSet<>();
        
        studentList.add(new Student("Thomas Jefferson", 1111L, 3.8 ));
        studentList.add(new Student ("John Adams", 2222L, 3.9));
        studentList.add(new Student ("George Washington", 3333L, 3.4));
        
        for(Student student: studentList) {
            System.out.println(student);
        }            
}
}
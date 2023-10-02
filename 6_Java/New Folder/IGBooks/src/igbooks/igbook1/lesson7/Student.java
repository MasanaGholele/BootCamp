/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package igbooks.igbook1.lesson7;

/**
 *
 * @author masan
 */
public class Student implements Comparable<Student> {

    private String name;
    private Long id;
    private Double gpa;

    public Student(String name, Long id, Double gpa) {
        this.name = name;
        this.id = id;
        this.gpa = gpa;

    }

    @Override
    public int compareTo(Student s) {

        int result = this.getName().compareTo(s.getName());
        if (result > 0) {
            return 1;
        } else if (result < 0) {
            return -1;
        } else {
            return 0;
        }
        // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }
    
    @Override 
    
    public String toString() {
        return this.name + " " + this.gpa;
    }

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @return the gpa
     */
    public Double getGpa() {
        return gpa;
    }

}

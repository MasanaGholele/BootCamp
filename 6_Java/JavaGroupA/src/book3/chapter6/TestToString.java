package book3.chapter6;

public class TestToString implements Cloneable
{
    public static void main(String[] args)
    {
        Employee emp = new Employee ("Masana", "Gholele");

        System.out.println(emp.toString());
        // another way of implementing the toString method
        System.out.println(emp);
    }
}
class Employee
{
    private String lastName;
    private String firstName;
    public Employee(String lastName, String firstName)
    {
        this.lastName = lastName;
        this.firstName = firstName;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return  true;
        }

        if (this == null || obj == null) {
            return false;
        }

        // Method 1 to check if it's an instance of the same class
        if (this.getClass() != obj.getClass()) {
            return false;
        }

        // Method 2 to check if it's an instance of the same class
        if ( obj instanceof Employee) {
            Employee emp = (Employee) obj;
            if (this.firstName.equals( emp.firstName) && this.lastName.equals(emp.lastName) ) {
                return true;
            }
        }

        return false;
    }

//    @Override
//    public Object clone() {
//        Employee emp = new Employee(this.firstName, this.lastName);
//        return emp;
//    }

    @Override
    public Object clone() {
        Employee emp;
        try
        {
            emp = (Employee) super.clone();
        }
        catch (CloneNotSupportedException e)
        {
            return null; // will never happen
        }
        return emp;
    }

    @Override
    public String toString() {
        return
                "lastName='" + lastName + '\'' +
                ", firstName='" + firstName;
    }
}
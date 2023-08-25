package book3.chapter4;

import java.text.NumberFormat;
import java.util.Scanner;

public class Employee
{
    public Employee getEmployee()
    {
        return this;
    }

}

class SalariedEmployee extends Employee
{
    double salary;

    public SalariedEmployee(double salary)
    {
        this.salary = salary;
    }

    public String getFormattedSalary()
    {
        NumberFormat cf = NumberFormat.getCurrencyInstance();
        return cf.format(this.salary);
    }
}

class HourlyEmployee extends Employee
{
    double rate;

    public HourlyEmployee(double rate) {
        this.rate = rate;
    }

    public String getFormattedRate()
    {
        NumberFormat nf = NumberFormat.getCurrencyInstance();
        return nf.format(this.rate);
    }
}

class EmployeeApp
{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Please enter S if you're you receive a monthly salary. Enter H if you're paid an hourly wage.");
        String employeeType = sc.nextLine();
        System.out.println("Please enter the amount you receive.");
        double employeeAmount = sc.nextDouble();

        Employee emp;

        if (employeeType.equalsIgnoreCase("S"))
        {
            emp = new SalariedEmployee(employeeAmount);
            System.out.println(((SalariedEmployee)emp ).getFormattedSalary());

        } else if (employeeType.equalsIgnoreCase("H"))
        {
            emp = new HourlyEmployee(employeeAmount);
            System.out.println(((HourlyEmployee) emp).getFormattedRate());
        }
        else
        {
            System.out.println("Invalid employee type. Please try again.");
            System.exit(0);
        }



        // Creating a new SalariedEmployee but storing it in type Employee;
//        Employee emp = new SalariedEmployee(20000.00);
//        Employee emp = new HourlyEmployee(50.55);
//
//        String msg = "";
//
//        // instanceof tells us whether it's an instance of the SalariedEmployee or HourlyEmployee
//        if (emp instanceof SalariedEmployee)
//        {
//            // Casting the emp which is of type Employee to SalariedEmployee.
//            // So that we can use the getFormattedSalary method which belongs in the SalariedEmployee class.
//            msg = "The employee's salary is " + ((SalariedEmployee) emp).getFormattedSalary();
//        }
//        else if (emp instanceof HourlyEmployee)
//        {
//            msg = "The employee's salary is " + ((HourlyEmployee) emp).getFormattedRate();
//        }
//
//        System.out.println(msg);

    }
}
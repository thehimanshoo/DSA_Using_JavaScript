/*
                                Employees Earning More Than Their Manager
                               -------------------------------------------

Table: Employee

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
| salary      | int     |
| managerId   | int     |
+-------------+---------+
id is the primary key (column with unique values) for this table.
Each row of this table indicates the ID of an employee, their name, salary, and the ID of their manager.

Write a solution to find the employees who earn more than their managers.
Return the result table in any order.
The result format is in the following example.

Example 1:

Input: 
Employee table:
+----+-------+--------+-----------+
| id | name  | salary | managerId |
+----+-------+--------+-----------+
| 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  | Null      |
| 4  | Max   | 90000  | Null      |
+----+-------+--------+-----------+
Output: 
+----------+
| Employee |
+----------+
| Joe      |
+----------+
Explanation: Joe is the only employee who earns more than his manager.

*/

function findEmployeesWithHigherSalaryThanManagers(employee) {
    // Create a map for quick lookup of manager salaries
    const managerSalaryMap = {};
    employee.forEach(e => {
        managerSalaryMap[e.id] = e.salary;
    });

    // Find employees earning more than their managers
    const result = employee
        .filter(e => e.managerId && e.salary > managerSalaryMap[e.managerId])
        .map(e => ({ Employee: e.name }));

    return result;
}

// Example Input
const employee = [
    { id: 1, name: "Joe", salary: 70000, managerId: 3 },
    { id: 2, name: "Henry", salary: 80000, managerId: 4 },
    { id: 3, name: "Sam", salary: 60000, managerId: null },
    { id: 4, name: "Max", salary: 90000, managerId: null }
];

// Call the function
const result = findEmployeesWithHigherSalaryThanManagers(employee);
console.log(result);
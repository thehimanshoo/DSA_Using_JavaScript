/*
                                        Customer Who Never Order
                                       --------------------------

able: Customers

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
+-------------+---------+
id is the primary key (column with unique values) for this table.
Each row of this table indicates the ID and name of a customer.

Table: Orders

+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| customerId  | int  |
+-------------+------+
id is the primary key (column with unique values) for this table.
customerId is a foreign key (reference columns) of the ID from the Customers table.
Each row of this table indicates the ID of an order and the ID of the customer who ordered it.


Write a solution to find all customers who never order anything.
Return the result table in any order.
The result format is in the following example.

Example 1:

Input: 
Customers table:
+----+-------+
| id | name  |
+----+-------+
| 1  | Joe   |
| 2  | Henry |
| 3  | Sam   |
| 4  | Max   |
+----+-------+
Orders table:
+----+------------+
| id | customerId |
+----+------------+
| 1  | 3          |
| 2  | 1          |
+----+------------+
Output: 
+-----------+
| Customers |
+-----------+
| Henry     |
| Max       |
+-----------+

*/

function findCustomersWithoutOrders(customers, orders) {
    const orderedCustomerIds = new Set(orders.map(order => order.customerId));
    const result = [];

    // Find customers who are not in the orderedCustomerIds set
    customers.forEach(customer => {
        if (!orderedCustomerIds.has(customer.id)) {
            result.push({ Customers: customer.name });
        }
    });

    return result;
}

// Example Input
const customers = [
    { id: 1, name: "Joe" },
    { id: 2, name: "Henry" },
    { id: 3, name: "Sam" },
    { id: 4, name: "Max" }
];

const orders = [
    { id: 1, customerId: 3 },
    { id: 2, customerId: 1 }
];

// Call the function
const result = findCustomersWithoutOrders(customers, orders);
console.log(result);
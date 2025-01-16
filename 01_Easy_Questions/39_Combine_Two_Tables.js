/*
                                                Combine Two Tables
                                               --------------------

Table: Person

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| personId    | int     |
| lastName    | varchar |
| firstName   | varchar |
+-------------+---------+
personId is the primary key (column with unique values) for this table.
This table contains information about the ID of some persons and their first and last names.

 

Table: Address

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| addressId   | int     |
| personId    | int     |
| city        | varchar |
| state       | varchar |
+-------------+---------+
addressId is the primary key (column with unique values) for this table.
Each row of this table contains information about the city and state of one person with ID = PersonId.


Write a solution to report the first name, last name, city, and state of each person in the Person table. 
If the address of a personId is not present in the Address table, report null instead.
Return the result table in any order. The result format is in the following example.

Example 1:

Input: 
Person table:
+----------+----------+-----------+
| personId | lastName | firstName |
+----------+----------+-----------+
| 1        | Wang     | Allen     |
| 2        | Alice    | Bob       |
+----------+----------+-----------+
Address table:
+-----------+----------+---------------+------------+
| addressId | personId | city          | state      |
+-----------+----------+---------------+------------+
| 1         | 2        | New York City | New York   |
| 2         | 3        | Leetcode      | California |
+-----------+----------+---------------+------------+
Output: 
+-----------+----------+---------------+----------+
| firstName | lastName | city          | state    |
+-----------+----------+---------------+----------+
| Allen     | Wang     | Null          | Null     |
| Bob       | Alice    | New York City | New York |
+-----------+----------+---------------+----------+
Explanation: 
There is no address in the address table for the personId = 1 so we return null in their city and state.
addressId = 1 contains information about the address of personId = 2.

*/

function getPersonWithAddress(person, address) {
    return person.map(p => {
        const addr = address.find(a => a.personId === p.personId);
        return {
            firstName: p.firstName,
            lastName: p.lastName,
            city: addr ? addr.city : null,
            state: addr ? addr.state : null
        };
    });
}

// Example Input
const person = [
    { personId: 1, lastName: "Wang", firstName: "Allen" },
    { personId: 2, lastName: "Alice", firstName: "Bob" }
];

const address = [
    { addressId: 1, personId: 2, city: "New York City", state: "New York" },
    { addressId: 2, personId: 3, city: "Leetcode", state: "California" }
];

// Call the function
const result = getPersonWithAddress(person, address);
console.log(result);

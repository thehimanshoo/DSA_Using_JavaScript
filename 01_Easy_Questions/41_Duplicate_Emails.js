/*
                                                    Duplicate Emails
                                                   ------------------
                                                   
    Table: Person

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| email       | varchar |
+-------------+---------+
id is the primary key (column with unique values) for this table.
Each row of this table contains an email. The emails will not contain uppercase letters.

Write a solution to report all the duplicate emails. Note that it's guaranteed that the email field is not NULL.
Return the result table in any order.
The result format is in the following example.

Example 1:

Input: 
Person table:
+----+---------+
| id | email   |
+----+---------+
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |
+----+---------+
Output: 
+---------+
| Email   |
+---------+
| a@b.com |
+---------+
Explanation: a@b.com is repeated two times.

*/

function findDuplicateEmails(person) {
    const emailCount = {};
    const result = [];

    // Count occurrences of each email
    person.forEach(row => {
        emailCount[row.email] = (emailCount[row.email] || 0) + 1;
    });

    // Find emails with count > 1
    for (const email in emailCount) {
        if (emailCount[email] > 1) {
            result.push({ Email: email });
        }
    }

    return result;
}

// Example Input
const person = [
    { id: 1, email: "a@b.com" },
    { id: 2, email: "c@d.com" },
    { id: 3, email: "a@b.com" }
];

// Call the function
const result = findDuplicateEmails(person);
// console.log(result);


console.log(navigator.platform)
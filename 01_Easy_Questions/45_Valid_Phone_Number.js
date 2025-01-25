/*
                                                Valid Phone Numbers
                                               ---------------------

Given a text file file.txt that contains a list of phone numbers (one per line), 
write a one-liner bash script to print all valid phone numbers.

You may assume that a valid phone number must appear in one of the following 
two formats: (xxx) xxx-xxxx or xxx-xxx-xxxx. (x means a digit) You may also 
assume each line in the text file must not contain leading or trailing white spaces.

Example:

Assume that file.txt has the following content:
987-123-4567
123 456 7890
(123) 456-7890

Your script should output the following valid phone numbers:
987-123-4567
(123) 456-7890

*/

const fs = require('fs');

// Read the file
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Split lines and filter valid phone numbers
    const validPhoneNumbers = data.split('\n').filter(line => 
        /^(\([0-9]{3}\) [0-9]{3}-[0-9]{4}|[0-9]{3}-[0-9]{3}-[0-9]{4})$/.test(line.trim())
    );

    // Print valid phone numbers
    validPhoneNumbers.forEach(phone => console.log(phone));
});
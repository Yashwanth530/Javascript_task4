// Part 1: Array Manipulation Methods

// 1. Create an array of 5 fruits. Add 3 fruits at the end using push() and print the array.

let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

fruits.push("Pineapple", "Kiwi", "Papaya");

console.log(fruits);

// 2. Create an array of 6 numbers. Remove the last element using pop() and print the result.

let numbers = [10, 20, 30, 40, 50, 60];

numbers.pop();

console.log(numbers);
// 3. Create an array of 5 names. Remove the first element using shift() and print the array.
let names = ["Yashwanth", "Karthik", "Raj", "Arun", "Ravi"];

names.shift();

console.log(names);
// 4. Create an array of 4 numbers. Add two numbers at the beginning using unshift().
let numbers1 = [30, 40, 50, 60];

numbers.unshift(10, 20);

console.log(numbers1);
// 5. Given let arr = [10, 20, 30, 40, 50], remove 2 elements starting from index 1 using splice().

let arr = [10, 20, 30, 40, 50];

arr.splice(1, 2);

console.log(arr);
// 6. Given let arr = [1, 2, 3, 4, 5], replace the value 3 with 100 using splice().
let arr1 = [1, 2, 3, 4, 5];

arr.splice(2, 1, 100);

console.log(arr1);

// 7. Create an array of 5 numbers and use fill() to replace the elements from index 2 to index 4 with "hello".
let numbers2 = [1, 2, 3, 4, 5];

numbers.fill("hello", 2, 5);

console.log(numbers2);

console.clear();

// Part 2: Array Merge and Search Methods

// 8. Create two arrays of numbers and combine them using concat().

let arr3= [10, 20, 30];
let arr4 = [40, 50, 60];

let result = arr3.concat(arr4);

console.log(result);

// 9. Given let arr = [10, 20, 30, 40, 50, 60], extract elements from index 1 to index 4 using slice().

let arr5 = [10, 20, 30, 40, 50, 60];

let result1 = arr5.slice(1, 4);

console.log(result1);

// 10. Create a nested array and convert it into a single-level array using flat(Infinity).

let arr6 = [1, 2, [3, 4], [5, [6, 7]]];

let result2 = arr6.flat(Infinity);

console.log(result2);

// 11. Given let arr = [10, 20, 30, 40, 50], check whether the value 30 exists using includes()

let arr7 = [10, 20, 30, 40, 50];

console.log(arr7.includes(30));

// 12. Given let arr = [5, 10, 15, 20, 25], find the index of 20 using indexOf().

let arr8 = [5, 10, 15, 20, 25];

console.log(arr8.indexOf(20));

// 13. Given let arr = [1, 2, 3, 2, 1, 2], find the last index of 2 using lastIndexOf().

let arr9 = [1, 2, 3, 2, 1, 2];

console.log(arr9.lastIndexOf(2));

// 14. Create an array of numbers and arrange its elements using sort().

let numbers3 = [40, 10, 50, 20, 30];

numbers.sort((a, b) => a - b);

console.log(numbers3);

// 15. Create an array of 7 numbers and reverse the order using reverse().

let numbers4 = [10, 20, 30, 40, 50, 60, 70];

numbers.reverse();

console.log(numbers4);

console.clear();

// Part 3: Spread and Rest Operators

//16. Create two arrays containing 4 numbers each. Merge them into one array using the spread operator.

let arr10 = [10, 20, 30, 40];
let arr11 = [50, 60, 70, 80];

let arr12 = [...arr10, ...arr11];

console.log(arr12);
// 17. Create two objects: one containing student details and another containing job details. Merge both objects using the spread operator.

let student = {
    name: "Yashwanth",
    age: 21,
    course: "B.Tech"
};

let job = {
    company: "Stackly",
    role: "Frontend Developer"
};

let details = { ...student, ...job };

console.log(details);

// 18. Create a function that accepts two parameters and uses the rest operator to collect all remaining arguments into an array.
function studentDetails(name, age, ...details) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Other Details:", details);
}

studentDetails("Yashwanth", 21, "B.Tech", "JavaScript", "Developer");

// 19. Write a function using function one(a, b, ...c) that prints the sum of a, b, c[0], and c[1].

function one(a, b, ...c) {
    let sum = a + b + c[0] + c[1];
    console.log("Sum:", sum);
}

one(10, 20, 30, 40);

// 20. Create two arrays and use the spread operator to copy all elements from the first array into a new array.

let arr13 = [10, 20, 30, 40, 50];

let arr14 = [...arr13];

console.log("Original Array:", arr13);
console.log("Copied Array:", arr14);

console.clear();

// Part 4: Array Destructuring
// 21. Given let arr = [10, 20, 30, 40], extract all four values into separate variables using array destructuring.

let arr15 = [10, 20, 30, 40];

let [a, b, c, d] = arr15;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
// 22. Given let nested = [1, 2, [3, 4, [5, 6]]], extract the values 1, 2, 3, 4, 5, and 6 using nested destructuring.
let nested = [1, 2, [3, 4, [5, 6]]];

let [a1, b1, [c1, d1, [e, f]]] = nested;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

// 23. Create an array containing a student's name, age, and CGPA. Extract these values using destructuring and print them.

let student1 = ["Yashwanth", 21, 8.5];

let [name, age, cgpa] = student1;

console.log("Name:", name);
console.log("Age:", age);
console.log("CGPA:", cgpa);

console.clear();

// Part 5: Object Destructuring

// 24. Create an object containing name, role, and location. Extract these properties using object destructuring.
let employee = {
    name: "Yashwanth",
    role: "Frontend Developer",
    location: "Bangalore"
};

let { name1, role, location: employeeLocation } = employee;

console.log("Name:", name1);
console.log("Role:", role);
console.log("Location:", employeeLocation);

// 25. Create an object containing a student's name and a nested address object with city and state. Extract the city and state using nested object destructuring.

let student3 = {
    name: "Yashwanth",
    address: {
        city: "Tirupati",
        state: "Andhra Pradesh"
    }
};

let { address: { city, state } } = student3;

console.log("City:", city);
console.log("State:", state);

// 26. Given an object with name, role, and location: { mainLocation, currentLocation }, print all four values using destructuring.

let employeeDetails = {
    name: "Yashwanth",
    role: "Frontend Developer",
    mainLocation: "Bangalore",
    currentLocation: "Tirupati"
};

let {
    name: employeeName,
    role: employeeRole,
    mainLocation: employeeMainLocation,
    currentLocation: employeeCurrentLocation
} = employeeDetails;

console.log("Name:", employeeName);
console.log("Role:", employeeRole);
console.log("Main Location:", employeeMainLocation);
console.log("Current Location:", employeeCurrentLocation);

console.clear();

// Part 6: Mixed Practical Challenges

// 27. Create an array of 10 numbers. Remove the first and last elements, add two new numbers at the beginning, and print the final array.

let numbers27 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

numbers27.shift();
numbers27.pop();

numbers27.unshift(5, 15);

console.log(numbers27);

// 28. Create an array containing duplicate numbers. Use includes(), indexOf(), and lastIndexOf() to check and print information about one selected number.
let numbers28 = [10, 20, 30, 20, 40, 20, 50];
let selectedNumber28 = 20;

console.log("Number exists:", numbers28.includes(selectedNumber28));
console.log("First index:", numbers28.indexOf(selectedNumber28));
console.log("Last index:", numbers28.lastIndexOf(selectedNumber28));
// 29. Create two objects containing employee information. Merge them using the spread operator, then destructure and print the employee's name and role.
let employee29 = {
    name: "Yashwanth",
    age: 21
};

let job29 = {
    role: "Frontend Developer",
    company: "Stackly"
};

let employeeDetails29 = { ...employee29, ...job29 };

let { name: employeeName29, role: employeeRole29 } = employeeDetails29;

console.log("Name:", employeeName29);
console.log("Role:", employeeRole29);
// 30. Create a nested array containing numbers. Flatten it using flat(Infinity), reverse the resulting array, and print the final result.

let numbers30 = [1, 2, [3, 4], [5, [6, 7, 8]]];

let flatNumbers30 = numbers30.flat(Infinity);

flatNumbers30.reverse();

console.log(flatNumbers30);
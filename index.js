// JAVASCRIPT BASICS
console.log("Hello JavaScript");
console.log(10 + 20)

console.log() 

//VARIABLES — VAR, LET, CONST

var a = 10;
let b = 20;
const c = 30;
console.log(a);
console.log(b);
console.log(c);

// REASSIGNMENT

let x = 10;
x = 20;
console.log(x);
const y = 10;
y = 20;   // Error

//var    → function scoped
//let    → block scoped
//const  → block scoped + cannot be reassigned

// SCOPE

//GLOBAL SCOPE
let college = "United University";
function show() {
    console.log(college);
}
show();

//FUNCTION SCOPE
function test() {
    let x = 10;
    console.log(x);
}
test();
console.log(x); // Error
//BLOCK SCOPE
if (true) {
    let x = 10;
    const y = 20;
    console.log(x);
    console.log(y);
}
console.log(x); // Error
//VAR VS LET
if (true) {
    var a = 10;
    let b = 20;
}
console.log(a); // 10
console.log(b); // Error
//SCOPE CHAIN
let college = "United University";
function teacher() {
    let subject = "JavaScript";
    function lecture() {
        let topic = "Scope";
        console.log(college);
        console.log(subject);
        console.log(topic);
    }
    lecture();
}
teacher();

// DATA TYPES

let name = "Rahul";        // String
let age = 20;              // Number
let passed = true;         // Boolean
let x;                     // Undefined
let y = null;              // Null
console.log(typeof name);
console.log(typeof age);
console.log(typeof passed);
console.log(typeof x);
console.log(typeof y);
let big = 12345678901234567890n; // BigInt
let id = Symbol("id");           // Symbol

//PRIMITIVE VS REFERENCE TYPES

//Primitive
let a = 10;
let b = a;
b = 20;
console.log(a); // 10
console.log(b); // 20
//REFERENCE
let student1 = {
    name: "Rahul"
};
let student2 = student1;
student2.name = "Amit";
console.log(student1.name);


//TYPE CONVERSION

let x = "10";
console.log(typeof x);
let y = Number(x);
console.log(y);
console.log(typeof y);

//Other conversions:
String(100);
Number("100");
Boolean(1);
Boolean(0);

//OPERATORS

//ARITHMETIC
let a = 10;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//INCREMENT / DECREMENT
let x = 10;
x++;
console.log(x);
x--;
console.log(x);


//ASSIGNMENT OPERATORS
let x = 10;
x += 5;
console.log(x);
x -= 2;
console.log(x);
x *= 2;
console.log(x);
x /= 2;
console.log(x);

//COMPARISON OPERATORS
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 == "10");
console.log(10 === "10");


//LOGICAL OPERATORS
let age = 20;
let student = true;
console.log(age >= 18 && student);
console.log(age >= 18 || student);
console.log(!student);

//IF
let marks = 75;
if (marks >= 40) {
    console.log("Pass");
}

//IF...ELSE
let marks = 35;
if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

//ELSE IF
let marks = 78;
if (marks >= 90) {
    console.log("A+");
} else if (marks >= 75) {
    console.log("A");
} else if (marks >= 60) {
    console.log("B");
} else if (marks >= 40) {
    console.log("C");
} else {
    console.log("Fail");
}

//TERNARY OPERATOR

let age = 20;
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

//SWITCH
let day = 2;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

//FOR LOOP
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//WHILE
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

//DO...WHILE
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

let i = 10;
while (i < 5) {
    console.log(i);
}

let i = 10;
do {
    console.log(i);
} while (i < 5);


//BREAK
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}

//CONTINUE
for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}

//FUNCTIONS
function greet() {
    console.log("Hello Students");
}
greet();

//FUNCTION PARAMETERS
function greet(name) {
    console.log("Hello " + name);
}
greet("Rahul");
greet("Amit");

//RETURN
function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log(result);

//FUNCTION EXPRESSION
const add = function(a, b) {
    return a + b;
};
console.log(add(10, 20));

//ARROW FUNCTION
const add = (a, b) => {
    return a + b;
};
console.log(add(10, 20));
const add = (a, b) => a + b;
console.log(add(10, 20));

//ARRAYS
let students = ["Rahul", "Amit", "Neha"];
console.log(students);
console.log(students[0]);
console.log(students[1]);

//MODIFY ARRAY
let students = ["Rahul", "Amit", "Neha"];
students[1] = "Priya";
console.log(students);

//ARRAY METHODS
let students = ["Rahul", "Amit"];
students.push("Neha");
console.log(students);
students.pop();
students.shift();
students.unshift("Priya");

//ARRAY LENGTH
let numbers = [10, 20, 30, 40];
console.log(numbers.length);

//LOOP THROUGH ARRAY
let students = ["Rahul", "Amit", "Neha"];
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

//FOR...OF
let students = ["Rahul", "Amit", "Neha"];
for (let student of students) {
    console.log(student);
}

//FOREACH()
let numbers = [10, 20, 30];
numbers.forEach(function(number) {
    console.log(number);
});
//Arrow version:
numbers.forEach(number => console.log(number));

//MAP()
let numbers = [1, 2, 3, 4];
let squares = numbers.map(function(number) {
    return number * number;
});
console.log(squares);

map() creates a new array.

//FILTER()
let marks = [35, 67, 89, 42, 25];
let passed = marks.filter(function(mark) {
    return mark >= 40;
});
console.log(passed);

//FIND()
let marks = [35, 67, 89, 42];
let result = marks.find(mark => mark > 80);
console.log(result);

//REDUCE()
let numbers = [10, 20, 30, 40];
let total = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);
console.log(total);

//STRINGS
let name = "JavaScript";
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.charAt(0));

//STRING METHODS
let text = "Hello JavaScript";
console.log(text.includes("Java"));
console.log(text.startsWith("Hello"));
console.log(text.endsWith("Script"));
console.log(text.indexOf("Java"));

//TEMPLATE LITERALS
//Old method:
let name = "Rahul";
let age = 20;
console.log("My name is " + name + " and my age is " + age);
//Modern:
console.log(`My name is ${name} and my age is ${age}`);

//OBJECTS
let student = {
   name: "Rahul",
    age: 20,
    course: "BCA"
};
console.log(student.name);
console.log(student.age);
console.log(student.course);

//OBJECT METHOD
let student = {
    name: "Rahul",
    greet: function() {
        console.log("Hello " + this.name);
    }
};
student.greet();

//ADD/DELETE OBJECT PROPERTY
let student = {
    name: "Rahul",
    age: 20
};
student.city = "Prayagraj";
delete student.age;
console.log(student);

//NESTED OBJECTS
let student = {
    name: "Rahul",
    address: {
        city: "Prayagraj",
        state: "UP"
    }
};
console.log(student.address.city);

//DESTRUCTURING
let student = {
    name: "Rahul",
    age: 20
};
let { name, age } = student;
console.log(name);
console.log(age);

//SPREAD OPERATOR
let a = [1, 2, 3];
let b = [...a, 4, 5];
console.log(b);
//Object:
let student = {
    name: "Rahul",
    age: 20
};
let updatedStudent = {
    ...student,
    age: 21
};
console.log(updatedStudent);

//REST PARAMETER
function add(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
console.log(add(10, 20, 30, 40));

//HOISTING
var
console.log(x);
var x = 10;

let
console.log(x);
let x = 10;

//FUNCTION HOISTING
greet();
function greet() {
    console.log("Hello");
}

greet();
const greet = () => {
    console.log("Hello");
};

//CLOSURES
function outer() {
    let count = 0;
    function inner() {
        count++;
       console.log(count);
    }
    return inner;
}
let counter = outer();
counter();
counter();
counter();

//THIS
let student = {
    name: "Rahul",
    showName: function() {
        console.log(this.name);
    }
};
student.showName();

//OPTIONAL CHAINING
let student = {
    name: "Rahul"
};
console.log(student.address?.city);

//NULLISH COALESCING
let name = null;
let result = name ?? "Unknown";
console.log(result);
//Then compare:
let x = 0;
console.log(x || 100);
console.log(x ?? 100);

//ERROR HANDLING
try {
    let result = x + 10;
} catch (error) {
    console.log("Something went wrong");
}

try {
    console.log("Program running");
} catch (error) {
    console.log(error);
} finally {
    console.log("This always runs");
}


//CHANGE CSS WITH JAVASCRIPT
<h1 id="title">Hello</h1>
<script>
let heading = document.getElementById("title");
heading.style.color = "red";
heading.style.fontSize = "40px";
</script>

//EVENTS
<button onclick="sayHello()">Click Me</button>
<script>
function sayHello() {
    alert("Hello Students!");
}
</script>

let button = document.querySelector("button");
button.addEventListener("click", function() {
    console.log("Button clicked");
});

//INPUT AND DOM
<input id="name">
<button onclick="showName()">Submit</button>
<p id="result"></p>
<script>
function showName() {
    let name = document.getElementById("name").value;
    document.getElementById("result").innerText =
        "Hello " + name;
}
</script>

//</input>FORM VALIDATION
function validate() {
    let name = document.getElementById("name").value;
    if (name == "") {
        alert("Name is required");
        return false;
    }
    return true;
}

//LOCALSTORAGE
localStorage.setItem("name", "Rahul");
let name = localStorage.getItem("name");
console.log(name);

localStorage.removeItem("name");

localStorage.clear();
//JSON
let student = {
    name: "Rahul",
    age: 20
};
let jsonData = JSON.stringify(student);
console.log(jsonData);

let objectData = JSON.parse(jsonData);
console.log(objectData.name);

//CLASSES
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showDetails() {
        console.log(this.name);
        console.log(this.age);
    }
}
let s1 = new Student("Rahul", 20);
s1.showDetails();

//INHERITANCE
class Student {
    study() {
        console.log("Student is studying");
    }
}
class BCAStudent extends Student {
    code() {
        console.log("Student is coding");
    }
}
let s = new BCAStudent();
s.study();
s.code();

//CALLBACK FUNCTION
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
function finish() {
    console.log("Welcome to JavaScript");
}
greet("Rahul", finish);

//PROMISE
let promise = new Promise(function(resolve, reject) {
    let success = true;
    if (success) {
        resolve("Task completed");
    } else {
        reject("Task failed");
    }
});
promise
    .then(result => console.log(result))
    .catch(error => console.log(error));

//    ASYNC/AWAIT
function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}
async function showData() {
    console.log("Waiting...");
    let result = await getData();
    console.log(result);
}
showData();

//FETCH API
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

async function getUsers() {
    try {
        let response =
            await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await response.json();
        console.log(users);
    } catch (error) {
        console.log(error);
    }
}
getUsers();
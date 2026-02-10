# 2-Week Beginner Coding Plan: Python, SQL & Golang

> **Who is this for?** Absolute beginners with zero coding experience.
> **Goal:** Build a solid foundation in Python, SQL, and Golang in 14 days.
> **Daily Time:** 2-3 hours per day

---

## How This Plan Works

| Language | Why Learn It? | Difficulty |
|----------|--------------|------------|
| **Python** | Easiest to start, used everywhere (web, AI, automation) | Beginner-friendly |
| **SQL** | Talk to databases, every job needs it | Easy syntax |
| **Golang** | Fast, modern, great for backend & cloud apps | Moderate |

**Week 1** = Python (Days 1-5) + SQL (Days 6-7)
**Week 2** = SQL continued (Days 8-9) + Golang (Days 10-14)

---

## Where to Learn (All Free)

### Python
| Resource | Link | What It Offers |
|----------|------|----------------|
| Python.org Tutorial | https://docs.python.org/3/tutorial/ | Official beginner guide |
| W3Schools Python | https://www.w3schools.com/python/ | Interactive examples |
| Programiz Python | https://www.programiz.com/python-programming | Step-by-step lessons |

### SQL
| Resource | Link | What It Offers |
|----------|------|----------------|
| SQLBolt | https://sqlbolt.com/ | Interactive SQL lessons |
| W3Schools SQL | https://www.w3schools.com/sql/ | Try-it-yourself editor |
| Khan Academy SQL | https://www.khanacademy.org/computing/computer-programming/sql | Video + practice |

### Golang
| Resource | Link | What It Offers |
|----------|------|----------------|
| Go Tour | https://go.dev/tour/ | Official interactive tutorial |
| Go by Example | https://gobyexample.com/ | Learn through code examples |
| W3Schools Go | https://www.w3schools.com/go/ | Simple beginner lessons |

### Setup (Install These First)
- **Python:** Download from https://www.python.org/downloads/ (click "Add to PATH" during install)
- **SQL:** Use https://sqliteonline.com/ (no install needed) or install DB Browser for SQLite
- **Golang:** Download from https://go.dev/dl/

---

# WEEK 1

---

## Day 1 (Monday) - Python: The Very Basics

### What to Learn
- What is programming? (giving instructions to a computer)
- What is Python? (a language the computer understands)
- `print()` - how to show text on screen
- Variables - storing information in named boxes
- Data types - text (string), numbers (int, float), true/false (boolean)

### Read / Watch
- W3Schools: Python Intro, Python Get Started, Python Syntax, Python Variables

### Practice Exercises

**Exercise 1: Hello World**
```python
# Your first program! Type this and run it:
print("Hello, World!")
print("My name is Nikhitha")
print("I am learning Python!")
```

**Exercise 2: Variables**
```python
# Store information in variables
name = "Nikhitha"
age = 25
city = "Hyderabad"

print("My name is", name)
print("I am", age, "years old")
print("I live in", city)
```

**Exercise 3: Simple Math**
```python
# Python can do math!
a = 10
b = 3

print("Addition:", a + b)       # 13
print("Subtraction:", a - b)    # 7
print("Multiplication:", a * b) # 30
print("Division:", a / b)       # 3.333...
```

**Exercise 4 (Try Yourself):**
Create variables for your favorite movie name, its rating (out of 10), and release year. Print them in a nice sentence.

### Ask Claude
> "Explain Python variables to me like I'm 5 years old. Give me 3 simple examples."

---

## Day 2 (Tuesday) - Python: Making Decisions

### What to Learn
- `input()` - getting information from the user
- `if`, `elif`, `else` - making decisions in code
- Comparison operators: `==`, `!=`, `>`, `<`, `>=`, `<=`

### Practice Exercises

**Exercise 1: User Input**
```python
name = input("What is your name? ")
print("Hello,", name, "! Welcome to Python!")
```

**Exercise 2: Age Checker**
```python
age = int(input("Enter your age: "))

if age >= 18:
    print("You are an adult!")
elif age >= 13:
    print("You are a teenager!")
else:
    print("You are a child!")
```

**Exercise 3: Simple Calculator**
```python
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
operation = input("Enter operation (+, -, *, /): ")

if operation == "+":
    print("Result:", num1 + num2)
elif operation == "-":
    print("Result:", num1 - num2)
elif operation == "*":
    print("Result:", num1 * num2)
elif operation == "/":
    if num2 != 0:
        print("Result:", num1 / num2)
    else:
        print("Cannot divide by zero!")
else:
    print("Invalid operation!")
```

**Exercise 4 (Try Yourself):**
Write a program that asks for a student's marks (out of 100) and prints the grade: A (90+), B (80+), C (70+), D (60+), F (below 60).

### Ask Claude
> "What is the difference between = and == in Python? I keep getting confused."

---

## Day 3 (Wednesday) - Python: Loops

### What to Learn
- `for` loop - repeat something a specific number of times
- `while` loop - repeat something until a condition is false
- `range()` - generating number sequences
- `break` and `continue`

### Practice Exercises

**Exercise 1: Counting with For Loop**
```python
# Print numbers 1 to 10
for i in range(1, 11):
    print(i)
```

**Exercise 2: Multiplication Table**
```python
num = int(input("Enter a number: "))

for i in range(1, 11):
    print(num, "x", i, "=", num * i)
```

**Exercise 3: Guessing Game**
```python
secret = 7

while True:
    guess = int(input("Guess the number (1-10): "))

    if guess == secret:
        print("Correct! You got it!")
        break
    elif guess < secret:
        print("Too low! Try again.")
    else:
        print("Too high! Try again.")
```

**Exercise 4 (Try Yourself):**
Print all even numbers from 1 to 50 using a loop.

### Ask Claude
> "Explain for loops vs while loops in Python. When should I use each one? Show me simple examples."

---

## Day 4 (Thursday) - Python: Lists & Functions

### What to Learn
- Lists - storing multiple items together
- List operations: append, remove, sort, len
- Functions - reusable blocks of code
- Parameters and return values

### Practice Exercises

**Exercise 1: Working with Lists**
```python
fruits = ["apple", "banana", "cherry"]

# Add an item
fruits.append("mango")
print("After adding:", fruits)

# Remove an item
fruits.remove("banana")
print("After removing:", fruits)

# Loop through list
print("My fruits:")
for fruit in fruits:
    print(" -", fruit)

print("Total fruits:", len(fruits))
```

**Exercise 2: Your First Function**
```python
def greet(name):
    print("Hello,", name, "! Have a great day!")

greet("Nikhitha")
greet("Python")
greet("World")
```

**Exercise 3: Function with Return Value**
```python
def calculate_average(numbers):
    total = sum(numbers)
    average = total / len(numbers)
    return average

marks = [85, 90, 78, 92, 88]
avg = calculate_average(marks)
print("Average marks:", avg)
```

**Exercise 4 (Try Yourself):**
Write a function called `is_even` that takes a number and returns `True` if it's even, `False` if it's odd. Test it with 5 different numbers.

### Ask Claude
> "What are Python lists? Explain with a real-life example like a shopping list. Show me the 5 most useful things I can do with lists."

---

## Day 5 (Friday) - Python: Putting It All Together

### What to Learn
- Dictionaries - storing key-value pairs
- String methods
- Mini project: combine everything learned

### Practice Exercises

**Exercise 1: Dictionary (like a real dictionary!)**
```python
student = {
    "name": "Nikhitha",
    "age": 25,
    "subjects": ["Python", "SQL", "Golang"],
    "grade": "A"
}

print("Name:", student["name"])
print("Subjects:", student["subjects"])

# Add new info
student["city"] = "Hyderabad"
print("Full info:", student)
```

**Exercise 2: String Fun**
```python
message = "  Hello, Python World!  "

print(message.strip())        # Remove spaces from sides
print(message.lower())        # all lowercase
print(message.upper())        # ALL UPPERCASE
print(message.replace("Python", "Coding"))  # Replace text
print("Python" in message)    # Check if word exists: True
```

**Exercise 3: Mini Project - Student Report Card**
```python
def create_report():
    name = input("Enter student name: ")

    subjects = {}
    while True:
        sub = input("Enter subject name (or 'done' to finish): ")
        if sub.lower() == 'done':
            break
        marks = int(input(f"Enter marks for {sub}: "))
        subjects[sub] = marks

    print("\n===== REPORT CARD =====")
    print(f"Student: {name}")
    print("-" * 25)

    total = 0
    for subject, marks in subjects.items():
        grade = "A" if marks >= 90 else "B" if marks >= 80 else "C" if marks >= 70 else "D" if marks >= 60 else "F"
        print(f"{subject}: {marks}/100 (Grade: {grade})")
        total += marks

    avg = total / len(subjects) if subjects else 0
    print("-" * 25)
    print(f"Average: {avg:.1f}")
    print(f"Result: {'PASS' if avg >= 60 else 'FAIL'}")
    print("=======================")

create_report()
```

### Ask Claude
> "I finished learning Python basics for 5 days. What are the most important concepts I should revise before moving forward?"

---

## Day 6 (Saturday) - SQL: The Basics

### What to Learn
- What is a database? (organized collection of data, like a spreadsheet)
- What is SQL? (language to talk to databases)
- `CREATE TABLE` - making a new table
- `INSERT INTO` - adding data
- `SELECT` - reading data

### Practice Exercises (Use sqliteonline.com)

**Exercise 1: Create Your First Table**
```sql
-- Create a students table
CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER,
    city TEXT,
    grade TEXT
);

-- Add some students
INSERT INTO students (name, age, city, grade) VALUES ('Nikhitha', 25, 'Hyderabad', 'A');
INSERT INTO students (name, age, city, grade) VALUES ('Rahul', 22, 'Mumbai', 'B');
INSERT INTO students (name, age, city, grade) VALUES ('Priya', 23, 'Delhi', 'A');
INSERT INTO students (name, age, city, grade) VALUES ('Amit', 24, 'Bangalore', 'C');
INSERT INTO students (name, age, city, grade) VALUES ('Sara', 21, 'Chennai', 'B');

-- See all students
SELECT * FROM students;
```

**Exercise 2: Selecting Specific Data**
```sql
-- Only names and cities
SELECT name, city FROM students;

-- Only students from Hyderabad
SELECT * FROM students WHERE city = 'Hyderabad';

-- Students with grade A
SELECT name, grade FROM students WHERE grade = 'A';

-- Students older than 22
SELECT * FROM students WHERE age > 22;
```

**Exercise 3: Sorting and Counting**
```sql
-- Sort by name A-Z
SELECT * FROM students ORDER BY name;

-- Sort by age (oldest first)
SELECT * FROM students ORDER BY age DESC;

-- Count total students
SELECT COUNT(*) AS total_students FROM students;
```

**Exercise 4 (Try Yourself):**
Create a `books` table with columns: id, title, author, pages, rating. Insert 5 books and write a query to find all books with rating above 4.

### Ask Claude
> "Explain SQL SELECT to me like I'm searching for something on a shopping website. Use simple examples."

---

## Day 7 (Sunday) - SQL: Intermediate Queries

### What to Learn
- `UPDATE` - changing existing data
- `DELETE` - removing data
- `AND`, `OR` - combining conditions
- `LIKE` - pattern matching
- `GROUP BY` - summarizing data

### Practice Exercises

**Exercise 1: Update and Delete**
```sql
-- Change Amit's grade to B
UPDATE students SET grade = 'B' WHERE name = 'Amit';

-- Check the change
SELECT * FROM students WHERE name = 'Amit';

-- Delete a student
DELETE FROM students WHERE name = 'Sara';

-- See remaining students
SELECT * FROM students;
```

**Exercise 2: Multiple Conditions**
```sql
-- Students with grade A AND age > 22
SELECT * FROM students WHERE grade = 'A' AND age > 22;

-- Students from Mumbai OR Delhi
SELECT * FROM students WHERE city = 'Mumbai' OR city = 'Delhi';

-- Names starting with 'P'
SELECT * FROM students WHERE name LIKE 'P%';

-- Names containing 'a'
SELECT * FROM students WHERE name LIKE '%a%';
```

**Exercise 3: Grouping and Aggregates**
```sql
-- Count students per grade
SELECT grade, COUNT(*) AS student_count
FROM students
GROUP BY grade;

-- Average age per grade
SELECT grade, AVG(age) AS avg_age
FROM students
GROUP BY grade;

-- Oldest student
SELECT name, age FROM students ORDER BY age DESC LIMIT 1;
```

**Exercise 4 (Try Yourself):**
Create an `expenses` table (id, item, category, amount, date). Insert 10 rows. Write queries to: find total spending per category, find the most expensive item, find all expenses above 500.

### Ask Claude
> "What is GROUP BY in SQL? Explain it like I'm organizing my closet into categories."

---

# WEEK 2

---

## Day 8 (Monday) - SQL: Joins & Relationships

### What to Learn
- Multiple tables that relate to each other
- `JOIN` - combining data from two tables
- `INNER JOIN`, `LEFT JOIN`
- Foreign keys

### Practice Exercises

**Exercise 1: Two Related Tables**
```sql
-- Courses table
CREATE TABLE courses (
    id INTEGER PRIMARY KEY,
    course_name TEXT,
    teacher TEXT
);

INSERT INTO courses VALUES (1, 'Mathematics', 'Dr. Sharma');
INSERT INTO courses VALUES (2, 'Science', 'Prof. Patel');
INSERT INTO courses VALUES (3, 'English', 'Ms. Reddy');

-- Enrollments table (links students to courses)
CREATE TABLE enrollments (
    student_id INTEGER,
    course_id INTEGER
);

INSERT INTO enrollments VALUES (1, 1);
INSERT INTO enrollments VALUES (1, 2);
INSERT INTO enrollments VALUES (2, 1);
INSERT INTO enrollments VALUES (3, 3);
INSERT INTO enrollments VALUES (4, 2);
```

**Exercise 2: JOIN - See Student Names with Course Names**
```sql
-- Which student is in which course?
SELECT students.name, courses.course_name
FROM enrollments
JOIN students ON enrollments.student_id = students.id
JOIN courses ON enrollments.course_id = courses.id;
```

**Exercise 3: Useful Join Queries**
```sql
-- How many students per course?
SELECT courses.course_name, COUNT(*) AS student_count
FROM enrollments
JOIN courses ON enrollments.course_id = courses.id
GROUP BY courses.course_name;

-- What courses is Nikhitha taking?
SELECT courses.course_name, courses.teacher
FROM enrollments
JOIN students ON enrollments.student_id = students.id
JOIN courses ON enrollments.course_id = courses.id
WHERE students.name = 'Nikhitha';
```

### Ask Claude
> "Explain SQL JOINs to me using a simple real-life example. I don't understand why we need multiple tables."

---

## Day 9 (Tuesday) - SQL: Review + Mini Project

### Mini Project: Library Database
```sql
-- Create tables
CREATE TABLE authors (
    id INTEGER PRIMARY KEY,
    name TEXT,
    country TEXT
);

CREATE TABLE books (
    id INTEGER PRIMARY KEY,
    title TEXT,
    author_id INTEGER,
    genre TEXT,
    year INTEGER,
    available INTEGER DEFAULT 1
);

CREATE TABLE members (
    id INTEGER PRIMARY KEY,
    name TEXT,
    join_date TEXT
);

CREATE TABLE borrowings (
    id INTEGER PRIMARY KEY,
    book_id INTEGER,
    member_id INTEGER,
    borrow_date TEXT,
    return_date TEXT
);

-- Insert sample data and practice:
-- 1. Add 5 authors
-- 2. Add 8 books
-- 3. Add 5 members
-- 4. Add some borrowing records
-- 5. Write queries to find:
--    a. All books by a specific author
--    b. Currently borrowed books (return_date is NULL)
--    c. Most popular genre
--    d. Members who have borrowed more than 1 book
```

### Ask Claude
> "Give me 5 SQL practice problems for beginners with answers. I want to test myself."

---

## Day 10 (Wednesday) - Golang: Getting Started

### What to Learn
- What is Go/Golang? (Google's language, fast and simple)
- Go program structure
- `fmt.Println()` - printing text
- Variables and types
- Basic math operations

### Practice Exercises

**Exercise 1: Hello World in Go**
```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
    fmt.Println("I am learning Go!")
}
```
Save as `hello.go` and run: `go run hello.go`

**Exercise 2: Variables in Go**
```go
package main

import "fmt"

func main() {
    // Method 1: Declare then assign
    var name string = "Nikhitha"
    var age int = 25

    // Method 2: Short declaration (Go figures out the type)
    city := "Hyderabad"
    rating := 4.5
    isStudent := true

    fmt.Println("Name:", name)
    fmt.Println("Age:", age)
    fmt.Println("City:", city)
    fmt.Println("Rating:", rating)
    fmt.Println("Student:", isStudent)
}
```

**Exercise 3: Basic Math**
```go
package main

import "fmt"

func main() {
    a := 15
    b := 4

    fmt.Println("Add:", a + b)
    fmt.Println("Subtract:", a - b)
    fmt.Println("Multiply:", a * b)
    fmt.Println("Divide:", a / b)       // Integer division = 3
    fmt.Println("Remainder:", a % b)    // Modulo = 3
}
```

**Exercise 4 (Try Yourself):**
Create variables for a product: name, price, quantity, and whether it's in stock. Print them all.

### Ask Claude
> "I just learned Python. Now I'm starting Go. What are the 5 biggest differences I should know about?"

---

## Day 11 (Thursday) - Golang: Control Flow

### What to Learn
- `if/else` statements
- `for` loop (Go only has ONE loop type!)
- `switch` statement
- Getting user input with `fmt.Scan`

### Practice Exercises

**Exercise 1: If/Else in Go**
```go
package main

import "fmt"

func main() {
    var marks int
    fmt.Print("Enter your marks: ")
    fmt.Scan(&marks)

    if marks >= 90 {
        fmt.Println("Grade: A - Excellent!")
    } else if marks >= 80 {
        fmt.Println("Grade: B - Good!")
    } else if marks >= 70 {
        fmt.Println("Grade: C - Average")
    } else {
        fmt.Println("Grade: F - Need improvement")
    }
}
```

**Exercise 2: For Loop (the only loop in Go!)**
```go
package main

import "fmt"

func main() {
    // Like a traditional for loop
    fmt.Println("Counting 1 to 5:")
    for i := 1; i <= 5; i++ {
        fmt.Println(i)
    }

    // Like a while loop
    fmt.Println("\nCountdown:")
    count := 5
    for count > 0 {
        fmt.Println(count)
        count--
    }
    fmt.Println("Go!")
}
```

**Exercise 3: Multiplication Table**
```go
package main

import "fmt"

func main() {
    var num int
    fmt.Print("Enter a number: ")
    fmt.Scan(&num)

    for i := 1; i <= 10; i++ {
        fmt.Printf("%d x %d = %d\n", num, i, num*i)
    }
}
```

**Exercise 4: Switch Statement**
```go
package main

import "fmt"

func main() {
    var day int
    fmt.Print("Enter day number (1-7): ")
    fmt.Scan(&day)

    switch day {
    case 1:
        fmt.Println("Monday - Start of the week!")
    case 2:
        fmt.Println("Tuesday")
    case 3:
        fmt.Println("Wednesday - Midweek!")
    case 4:
        fmt.Println("Thursday")
    case 5:
        fmt.Println("Friday - Almost weekend!")
    case 6, 7:
        fmt.Println("Weekend - Relax!")
    default:
        fmt.Println("Invalid day number")
    }
}
```

### Ask Claude
> "Why does Go only have for loops and no while loops? Show me how to write while-loop style code in Go."

---

## Day 12 (Friday) - Golang: Functions & Arrays/Slices

### What to Learn
- Functions - writing reusable code
- Arrays - fixed size collections
- Slices - flexible size collections (used more often)

### Practice Exercises

**Exercise 1: Functions**
```go
package main

import "fmt"

// Function with parameters and return value
func add(a int, b int) int {
    return a + b
}

// Function returning multiple values (Go specialty!)
func divide(a, b float64) (float64, string) {
    if b == 0 {
        return 0, "Cannot divide by zero!"
    }
    return a / b, "Success"
}

func main() {
    result := add(10, 20)
    fmt.Println("10 + 20 =", result)

    answer, message := divide(10, 3)
    fmt.Println("10 / 3 =", answer, "-", message)

    answer2, message2 := divide(10, 0)
    fmt.Println("10 / 0 =", answer2, "-", message2)
}
```

**Exercise 2: Slices**
```go
package main

import "fmt"

func main() {
    // Create a slice
    fruits := []string{"apple", "banana", "cherry"}
    fmt.Println("Fruits:", fruits)

    // Add items
    fruits = append(fruits, "mango", "grape")
    fmt.Println("After adding:", fruits)

    // Access items
    fmt.Println("First fruit:", fruits[0])
    fmt.Println("Last fruit:", fruits[len(fruits)-1])

    // Loop through
    fmt.Println("\nAll fruits:")
    for index, fruit := range fruits {
        fmt.Printf("  %d. %s\n", index+1, fruit)
    }

    fmt.Println("Total:", len(fruits))
}
```

**Exercise 3: Function with Slice**
```go
package main

import "fmt"

func average(numbers []float64) float64 {
    total := 0.0
    for _, num := range numbers {
        total += num
    }
    return total / float64(len(numbers))
}

func main() {
    marks := []float64{85, 92, 78, 96, 88}
    avg := average(marks)
    fmt.Printf("Average marks: %.2f\n", avg)
}
```

### Ask Claude
> "What are Go slices? How are they different from arrays? Explain with a simple example."

---

## Day 13 (Saturday) - Golang: Maps & Structs

### What to Learn
- Maps - key-value pairs (like Python dictionaries)
- Structs - custom data types (like blueprints)

### Practice Exercises

**Exercise 1: Maps**
```go
package main

import "fmt"

func main() {
    // Create a map
    scores := map[string]int{
        "Math":    95,
        "Science": 88,
        "English": 92,
    }

    // Access
    fmt.Println("Math score:", scores["Math"])

    // Add
    scores["History"] = 85

    // Loop
    fmt.Println("\nAll scores:")
    for subject, score := range scores {
        fmt.Printf("  %s: %d\n", subject, score)
    }

    // Check if key exists
    score, exists := scores["Art"]
    if exists {
        fmt.Println("Art:", score)
    } else {
        fmt.Println("Art: not found")
    }
}
```

**Exercise 2: Structs (Blueprints for Data)**
```go
package main

import "fmt"

// Define a struct - a blueprint
type Student struct {
    Name    string
    Age     int
    Grade   string
    Marks   []int
}

// Method on struct
func (s Student) Average() float64 {
    total := 0
    for _, m := range s.Marks {
        total += m
    }
    return float64(total) / float64(len(s.Marks))
}

func main() {
    // Create a student
    student1 := Student{
        Name:  "Nikhitha",
        Age:   25,
        Grade: "A",
        Marks: []int{90, 85, 92, 88},
    }

    fmt.Println("Name:", student1.Name)
    fmt.Println("Grade:", student1.Grade)
    fmt.Printf("Average: %.1f\n", student1.Average())
}
```

### Ask Claude
> "Explain Go structs like I'm organizing a contact list. Keep it simple with a beginner example."

---

## Day 14 (Sunday) - Review + Mini Projects

### Python Mini Project: To-Do List
```python
todos = []

while True:
    print("\n--- To-Do App ---")
    print("1. Add task")
    print("2. View tasks")
    print("3. Complete task")
    print("4. Quit")

    choice = input("Choose (1-4): ")

    if choice == "1":
        task = input("Enter task: ")
        todos.append({"task": task, "done": False})
        print("Task added!")
    elif choice == "2":
        if not todos:
            print("No tasks yet!")
        for i, todo in enumerate(todos, 1):
            status = "Done" if todo["done"] else "Pending"
            print(f"  {i}. [{status}] {todo['task']}")
    elif choice == "3":
        num = int(input("Task number to complete: "))
        if 1 <= num <= len(todos):
            todos[num-1]["done"] = True
            print("Marked as done!")
    elif choice == "4":
        print("Goodbye!")
        break
```

### SQL Mini Project: Student Database Queries
```sql
-- Write queries to answer:
-- 1. Find all students who scored above 80 in Math
-- 2. Find the top 3 students by average score
-- 3. Which teacher has the most students?
-- 4. List students who haven't enrolled in any course
```

### Go Mini Project: Simple Calculator
```go
package main

import "fmt"

func calculate(a, b float64, op string) (float64, error) {
    switch op {
    case "+":
        return a + b, nil
    case "-":
        return a - b, nil
    case "*":
        return a * b, nil
    case "/":
        if b == 0 {
            return 0, fmt.Errorf("cannot divide by zero")
        }
        return a / b, nil
    default:
        return 0, fmt.Errorf("unknown operator: %s", op)
    }
}

func main() {
    var a, b float64
    var op string

    fmt.Print("Enter first number: ")
    fmt.Scan(&a)
    fmt.Print("Enter operator (+, -, *, /): ")
    fmt.Scan(&op)
    fmt.Print("Enter second number: ")
    fmt.Scan(&b)

    result, err := calculate(a, b, op)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Printf("%.2f %s %.2f = %.2f\n", a, op, b, result)
    }
}
```

---

# Quiz: Test Yourself!

## Python Quiz (10 Questions)

**Q1.** What does `print("Hello")` do?
- a) Saves "Hello" to a file
- b) Displays "Hello" on the screen
- c) Creates a variable called Hello
- d) Deletes the word Hello

**Answer:** b) Displays "Hello" on the screen

---

**Q2.** What is the output of: `x = 5; x = x + 3; print(x)`
- a) 5
- b) 3
- c) 8
- d) Error

**Answer:** c) 8 - Variables can be updated!

---

**Q3.** Which is correct to check if age is 18?
- a) `if age = 18:`
- b) `if age == 18:`
- c) `if age equals 18:`
- d) `if age is 18:`

**Answer:** b) `if age == 18:` (== for comparison, = for assignment)

---

**Q4.** What does this print?
```python
for i in range(3):
    print(i)
```
- a) 1, 2, 3
- b) 0, 1, 2
- c) 0, 1, 2, 3
- d) 1, 2

**Answer:** b) 0, 1, 2 - range starts from 0 and stops before 3

---

**Q5.** How do you add "mango" to a list called fruits?
- a) `fruits.add("mango")`
- b) `fruits.append("mango")`
- c) `fruits.insert("mango")`
- d) `fruits + "mango"`

**Answer:** b) `fruits.append("mango")`

---

**Q6.** What is a Python dictionary?
- a) A list of words and meanings
- b) A collection of key-value pairs
- c) A type of loop
- d) A function

**Answer:** b) A collection of key-value pairs like `{"name": "Nikhitha", "age": 25}`

---

**Q7.** What does `len([1, 2, 3, 4])` return?
- a) 3
- b) 4
- c) 10
- d) Error

**Answer:** b) 4 - len() counts the number of items

---

**Q8.** How do you define a function in Python?
- a) `function greet():`
- b) `def greet():`
- c) `func greet():`
- d) `create greet():`

**Answer:** b) `def greet():`

---

**Q9.** What is the output?
```python
name = "Python"
print(name[0])
```
- a) Python
- b) P
- c) 0
- d) Error

**Answer:** b) P - String indexing starts at 0

---

**Q10.** What does `input()` return?
- a) A number
- b) A boolean
- c) A string (text)
- d) Nothing

**Answer:** c) A string - even if you type a number, input() gives you text. Use `int()` to convert.

---

## SQL Quiz (10 Questions)

**Q1.** What does SQL stand for?
- a) Simple Question Language
- b) Structured Query Language
- c) Standard Query Logic
- d) System Query Language

**Answer:** b) Structured Query Language

---

**Q2.** Which command retrieves data from a table?
- a) GET
- b) FETCH
- c) SELECT
- d) RETRIEVE

**Answer:** c) SELECT

---

**Q3.** Which command adds a new row?
- a) ADD INTO
- b) INSERT INTO
- c) CREATE ROW
- d) NEW ROW

**Answer:** b) INSERT INTO

---

**Q4.** What does `SELECT * FROM students` do?
- a) Deletes all students
- b) Selects the first student
- c) Selects all columns and rows from students table
- d) Creates a new table

**Answer:** c) Selects all columns and rows (* means "everything")

---

**Q5.** How do you filter results?
- a) `SELECT * FROM students FILTER age > 20`
- b) `SELECT * FROM students WHERE age > 20`
- c) `SELECT * FROM students IF age > 20`
- d) `SELECT * FROM students HAVING age > 20`

**Answer:** b) WHERE is used to filter rows

---

**Q6.** Which sorts results A to Z?
- a) `ORDER BY name`
- b) `SORT BY name`
- c) `GROUP BY name`
- d) `ARRANGE BY name`

**Answer:** a) ORDER BY name (ASC is default, use DESC for Z to A)

---

**Q7.** What does COUNT(*) do?
- a) Counts columns
- b) Counts tables
- c) Counts the number of rows
- d) Counts characters

**Answer:** c) Counts the number of rows matching the query

---

**Q8.** What is a JOIN used for?
- a) Merging two databases
- b) Combining rows from two or more tables
- c) Adding columns to a table
- d) Connecting to a server

**Answer:** b) Combining rows from two or more tables based on a related column

---

**Q9.** How do you delete a row where id is 5?
- a) `REMOVE FROM students WHERE id = 5`
- b) `DELETE FROM students WHERE id = 5`
- c) `DROP students WHERE id = 5`
- d) `ERASE FROM students WHERE id = 5`

**Answer:** b) DELETE FROM students WHERE id = 5

---

**Q10.** What does `LIKE 'A%'` match?
- a) Anything ending with A
- b) Exactly "A"
- c) Anything starting with A
- d) Anything containing A

**Answer:** c) Anything starting with A (% means "any characters after")

---

## Golang Quiz (10 Questions)

**Q1.** Who created Go?
- a) Microsoft
- b) Apple
- c) Google
- d) Amazon

**Answer:** c) Google (released in 2009)

---

**Q2.** How do you declare a variable quickly in Go?
- a) `let x = 5`
- b) `var x = 5` or `x := 5`
- c) `x = 5`
- d) `int x = 5`

**Answer:** b) Both `var x = 5` and `x := 5` work. `:=` is the short form.

---

**Q3.** How many loop types does Go have?
- a) 3 (for, while, do-while)
- b) 2 (for, while)
- c) 1 (for only)
- d) 4

**Answer:** c) 1 - Go only has `for`, but it can work like while and for-each too!

---

**Q4.** What does `fmt.Println()` do?
- a) Reads input
- b) Prints text with a newline
- c) Formats a string
- d) Creates a file

**Answer:** b) Prints text followed by a newline

---

**Q5.** What is special about Go functions?
- a) They can't take parameters
- b) They can return multiple values
- c) They don't need a name
- d) They run automatically

**Answer:** b) Go functions can return multiple values like `func divide(a, b int) (int, error)`

---

**Q6.** What is a Go slice?
- a) A fixed-size array
- b) A flexible, dynamic-size list
- c) A string operation
- d) A type of loop

**Answer:** b) A flexible, dynamic-size list (more commonly used than arrays)

---

**Q7.** How do you add to a slice in Go?
- a) `slice.add(item)`
- b) `slice.push(item)`
- c) `slice = append(slice, item)`
- d) `slice += item`

**Answer:** c) `slice = append(slice, item)`

---

**Q8.** What is a struct in Go?
- a) A type of function
- b) A custom data type with named fields
- c) A loop structure
- d) A package name

**Answer:** b) A custom data type that groups related fields together

---

**Q9.** Every Go program starts from which function?
- a) `func start()`
- b) `func init()`
- c) `func main()`
- d) `func run()`

**Answer:** c) `func main()` in `package main`

---

**Q10.** What does `:=` do in Go?
- a) Compares two values
- b) Declares AND assigns a variable (short form)
- c) Creates a constant
- d) Defines a function

**Answer:** b) Declares and assigns in one step. Go figures out the type automatically.

---

# How to Use Claude to Learn Coding

Claude is your **24/7 personal coding tutor**. Here's how to get the most out of it:

## How to Ask Claude for Help

### 1. Explain Concepts Simply
```
"Explain [concept] like I'm 5 years old"
"What is [concept] in simple words with an example?"
"Compare [concept A] vs [concept B] with a real-life analogy"
```
**Examples:**
- "Explain Python loops like I'm 5 years old"
- "What is a SQL JOIN in simple words?"
- "Compare Python lists vs Go slices"

### 2. Debug Your Code
```
"I wrote this code but it's not working. Here's the error: [paste error]"
"Why does this code print [wrong output] instead of [expected output]?"
```
**Example:**
- "I wrote `print(Hello)` and got an error. What's wrong?"

### 3. Practice Problems
```
"Give me 5 easy Python exercises about [topic]"
"Create a SQL quiz with 10 questions for beginners"
"Give me a Go coding challenge about [topic]"
```

### 4. Code Review
```
"Is this code correct? How can I make it better?"
"Review my code and tell me if I'm doing anything wrong"
```

### 5. Step-by-Step Building
```
"Help me build a [project] step by step. Start simple."
"Walk me through creating a [feature] one line at a time"
```

### 6. Compare Languages
```
"Show me how to write a for loop in Python, SQL, and Go side by side"
"What's the Go equivalent of Python's dictionary?"
```

## Tips for Asking Good Questions

| Do This | Not This |
|---------|----------|
| "I tried X and got error Y" | "It doesn't work" |
| "Explain with a simple example" | "Explain everything about X" |
| "I'm a beginner, keep it simple" | (assume Claude knows your level) |
| Paste your actual code | Describe code vaguely |
| Ask one topic at a time | Ask 10 things at once |

## Sample Claude Conversations for Learning

### Learning a New Concept
> **You:** "I don't understand Python functions. Explain like I'm making a sandwich."
>
> **Claude:** Will give you an analogy like: "A function is like a recipe. You define it once (write the recipe), and every time you call it (follow the recipe), it does the same steps. You can pass ingredients (parameters) and get a sandwich back (return value)."

### When You're Stuck
> **You:** "I wrote this code to add numbers but it gives me '23' instead of 5:
> ```python
> a = input('Enter number: ')  # I typed 2
> b = input('Enter number: ')  # I typed 3
> print(a + b)
> ```
> What's wrong?"
>
> **Claude:** Will explain that `input()` returns text, so "2" + "3" = "23" (text joining). You need `int(input(...))`.

### Building Something
> **You:** "Help me build a simple quiz game in Python. I only know variables, if/else, and loops. Keep it beginner level."

---

# Visual Schedule Overview

## Week 1

| Day | Language | Topic | Time |
|-----|----------|-------|------|
| Day 1 (Mon) | Python | Variables, Print, Data Types | 2-3 hrs |
| Day 2 (Tue) | Python | If/Else, Input, Conditions | 2-3 hrs |
| Day 3 (Wed) | Python | Loops (for, while) | 2-3 hrs |
| Day 4 (Thu) | Python | Lists & Functions | 2-3 hrs |
| Day 5 (Fri) | Python | Dictionaries, Strings, Mini Project | 2-3 hrs |
| Day 6 (Sat) | SQL | CREATE, INSERT, SELECT | 2-3 hrs |
| Day 7 (Sun) | SQL | UPDATE, DELETE, GROUP BY | 2-3 hrs |

## Week 2

| Day | Language | Topic | Time |
|-----|----------|-------|------|
| Day 8 (Mon) | SQL | JOINs & Relationships | 2-3 hrs |
| Day 9 (Tue) | SQL | Review + Library Mini Project | 2-3 hrs |
| Day 10 (Wed) | Golang | Variables, Print, Types | 2-3 hrs |
| Day 11 (Thu) | Golang | If/Else, Loops, Switch | 2-3 hrs |
| Day 12 (Fri) | Golang | Functions & Slices | 2-3 hrs |
| Day 13 (Sat) | Golang | Maps & Structs | 2-3 hrs |
| Day 14 (Sun) | All | Review + Mini Projects in All 3 | 2-3 hrs |

---

# After These 2 Weeks: What's Next?

1. **Python Next Steps:** File handling, classes (OOP), pip packages, build a web app with Flask
2. **SQL Next Steps:** Subqueries, indexes, transactions, try PostgreSQL or MySQL
3. **Golang Next Steps:** Error handling, goroutines (concurrency), build a REST API
4. **Practice Daily:** Even 30 minutes of coding a day beats 5 hours once a week
5. **Build Projects:** The best way to learn is by building things you actually want to use

> **Ask Claude:** "I finished the 2-week plan. What project should I build next to practice all three languages together?"

---

*Good luck on your coding journey! Remember: every expert was once a beginner. Take it one day at a time.* 🎯

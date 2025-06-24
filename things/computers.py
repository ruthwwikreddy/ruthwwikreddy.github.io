#Write a python code to check whether the number is odd or even
num = int(input("Enter the Number: "))
if num % 2 == 0:
    print(num, "is an even number")
else:
    print(num, "is an odd number")

"""
Enter the Number: 7
7 is an odd number
"""

#Write a python code to check which number is biggest among 3 numbers
a = int(input("Enter the First Number: "))
b = int(input("Enter the Second Number: "))
c = int(input("Enter the Third Number: "))

if a >= b and a >= c:
    print(a, "is the biggest number")
elif b >= a and b >= c:
    print(b, "is the biggest number")
elif c >= a and c >= b:
    print(c, "is the biggest number")
else:
    print("All numbers are equal")

"""
Enter the First Number: 25
Enter the Second Number: 12
Enter the Third Number: 78
78 is the biggest number
"""

#Write a python code to make a factorial of an input number
fact_num = int(input("Enter a Number to find its Factorial: "))
factorial = 1

if fact_num < 0:
    print("Factorial does not exist for negative numbers")
elif fact_num == 0:
    print("The factorial of 0 is 1")
else:
    for i in range(1, fact_num + 1):
        factorial *= i
    print("The factorial of", fact_num, "is", factorial)

"""
Enter a Number to find its Factorial: 5
The factorial of 5 is 120
"""

#Write a python code to make a factorial of an input number using while loop
fact_num1 = int(input("Enter a Number to find its Factorial: "))
fact = 1
i = 1

if fact_num1 < 0:
    print("Factorial does not exist for negative numbers")
elif fact_num1 == 0:
    print("The factorial of 0 is 1")
else:
    while i <= fact_num1:
        fact *= i
        i += 1
    print("The factorial of", fact_num1, "is", fact)

"""
Enter a Number to find its Factorial: 4
The factorial of 4 is 24
"""

#Write a python code to display 1-100 using while loop
print("Numbers from 1 to 100 using while loop:")
i = 1
while i <= 100:
    print(i, end=' ')
    i += 1

"""
Numbers from 1 to 100 using while loop:
1 2 3 4 5 6 7 8 9 10 ... 100
"""

#Write a python code to display 1-100 using for loop
print("\nNumbers from 1 to 100 using for loop:")
for j in range(1, 101):
    print(j, end=' ')

"""
Numbers from 1 to 100 using for loop:
1 2 3 4 5 6 7 8 9 10 ... 100
"""

#Write a python code to display even numbers between 10-20
print("\nEven numbers between 10 and 20:")
for k in range(10, 21):
    if k % 2 == 0:
        print(k, end=' ')

"""
Even numbers between 10 and 20:
10 12 14 16 18 20
"""

#Write a python code to check whether the number is odd or even and use repetition and when typed exit make a exit
print("\nOdd or Even Checker (Type 'exit' to stop):")
for _ in range(100): 
    user_input = input("Enter a number (or type 'exit' to quit): ")
    
    if user_input.lower() == 'exit':
        print("Program exited.")
        break
    else:
        try:
            check_num = int(user_input)
            if check_num % 2 == 0:
                print(check_num, "is an even number")
            else:
                print(check_num, "is an odd number")
        except ValueError:
            print("Invalid input. Please enter a valid number or type 'exit' to quit.")

"""
Odd or Even Checker (Type 'exit' to stop):
Enter a number (or type 'exit' to quit): 9
9 is an odd number
Enter a number (or type 'exit' to quit): 14
14 is an even number
Enter a number (or type 'exit' to quit): exit
Program exited.
"""

#Write a python code to display multiplication table for an input number using for loop
table_num1 = int(input("Enter a Number to display its Multiplication Table (for loop): "))
print(f"Multiplication Table for {table_num1}:")
for m in range(1, 11):
    print(table_num1, "x", m, "=", table_num1 * m)

"""
Enter a Number to display its Multiplication Table (for loop): 6
Multiplication Table for 6:
6 x 1 = 6
6 x 2 = 12
6 x 3 = 18
6 x 4 = 24
6 x 5 = 30
6 x 6 = 36
6 x 7 = 42
6 x 8 = 48
6 x 9 = 54
6 x 10 = 60
"""

#Write a python code to display multiplication table for an input number using while loop
table_num2 = int(input("Enter a Number to display its Multiplication Table (while loop): "))
print(f"Multiplication Table for {table_num2}:")
n = 1
while n <= 10:
    print(table_num2, "x", n, "=", table_num2 * n)
    n += 1

"""
Enter a Number to display its Multiplication Table (while loop): 8
Multiplication Table for 8:
8 x 1 = 8
8 x 2 = 16
8 x 3 = 24
8 x 4 = 32
8 x 5 = 40
8 x 6 = 48
8 x 7 = 56
8 x 8 = 64
8 x 9 = 72
8 x 10 = 80
"""

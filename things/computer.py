# Write a python code to check whether the number is odd or even
num = int(input("Enter the Number: "))
if num % 2 == 0:
    print(num, "is an even number")
else:
    print(num, "is an odd number")

# Write a python code to display 1 - 10 using for loop
for i in range(1, 11):
    print(i)

# Write a python code to display 1 - 10 using while loop
i = 1
while i <= 10:
    print(i)
    i += 1

# Write a python program to display even numbers between 10 and 20 by using for loop
for i in range(10, 21):
    if i % 2 == 0:
        print(i)

# Write a python program to display even numbers between 10 and 20 by using while loop
i = 10
while i <= 20:
    if i % 2 == 0:
        print(i)
    i += 1

# Python program to display the pattern
for i in range(0, 5, 1):
    print("*", end=" ")
print()

# Write a Python Program to displace the pattern 13579
for i in range(1, 10, 2):
    print(i, end=" ")
print()

# Write a python code to check which number is biggest among 3 numbers
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

# Write a python code to make a factorial of an input number
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

# Write a python code to make a factorial of an input number using while loop
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

# Write a python code to check whether the number is odd or even and use repetition and when typed exit make a exit
print("Odd or Even Checker (Type 'exit' to stop):")
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

# Write a python code to display multiplication table for an input number using for loop
table_num1 = int(input("Enter a Number to display its Multiplication Table (for loop): "))
print(f"Multiplication Table for {table_num1}:")
for m in range(1, 11):
    print(table_num1, "x", m, "=", table_num1 * m)

# Write a python code to display multiplication table for an input number using while loop
table_num2 = int(input("Enter a Number to display its Multiplication Table (while loop): "))
print(f"Multiplication Table for {table_num2}:")
n = 1
while n <= 10:
    print(table_num2, "x", n, "=", table_num2 * n)
    n += 1

# Write a python code to see if a number if it is a prime number or not in a function using arguments and return statements
def is_prime(num):
    a = 0
    for i in range(1, num + 1):
        if num % i == 0:
            a += 1
    return a == 2

n = int(input("Enter a number: "))
if is_prime(n):
    print(f"{n} is a prime number.")
else:
    print(f"{n} is not a prime number.")

# Write a python code to see if a number if it is a prime number or not in a function using arguments and without using return statements
def check_prime(num):
    a = 0
    for i in range(1, num + 1):
        if num % i == 0:
            a += 1
    if a == 2:
        print(f"{num} is a prime number.")
    else:
        print(f"{num} is not a prime number.")

n = int(input("Enter a number: "))
check_prime(n)

# Write a python code to see if a number if it is a prime number or not in a function without using arguments and using return statements
def is_prime_input():
    num = int(input("Enter a number: "))
    a = 0
    for i in range(1, num + 1):
        if num % i == 0:
            a += 1
    return a == 2

if is_prime_input():
    print("It is a prime number.")
else:
    print("It is not a prime number.")

# Write a python code to see if a number if it is a prime number or not in a function without using arguments and without using return statements
def check_prime_input():
    num = int(input("Enter a number: "))
    a = 0
    for i in range(1, num + 1):
        if num % i == 0:
            a += 1
    if a == 2:
        print("It is a prime number.")
    else:
        print("It is not a prime number.")

check_prime_input()

# Write a python code to check whether a given string is a palindrome or not
def is_palindrome(s):
    return s == s[::-1]

string = input("Enter a string: ")
if is_palindrome(string):
    print(f"'{string}' is a palindrome.")
else:
    print(f"'{string}' is not a palindrome.")

# Write a python code to print the Fibonacci series up to n terms
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        print(a, end=" ")
        a, b = b, a + b
    print()

terms = int(input("Enter the number of terms for Fibonacci series: "))
fibonacci(terms)

# Write a user defined function in Python named Puzzle(W,N) which takes the argument W as an English word and N as an integer and returns the string where every Nth Alphabet of the word W is replaced with an underscore (“_”)
def Puzzle(W, N):
    new_word = ""
    for i in range(len(W)):
        if (i + 1) % N == 0:
            new_word += "_"
        else:
            new_word += W[i]
    return new_word

word = input("Enter a word: ")
n = int(input("Enter the N value: "))
print(Puzzle(word, n))

# Write a user defined function in Python named showGrades(S) which takes the dictionary S as an argument. The dictionary, S contains Name: [Eng, Math, Science] as key: value pairs. The function displays the corresponding grade obtained by the students according to the grading rules.
def showGrades(S):
    for name, marks in S.items():
        avg = sum(marks) / len(marks)
        if avg >= 90:
            grade = "A"
        elif avg >= 60:
            grade = "B"
        else:
            grade = "C"
        print(f"{name} - {grade}")

S = {}
n = int(input("Enter number of students: "))
for _ in range(n):
    name = input("Enter student name: ")
    eng = int(input("Enter English marks: "))
    math = int(input("Enter Math marks: "))
    science = int(input("Enter Science marks: "))
    S[name] = [eng, math, science]

showGrades(S)

# Write a function dispBook(BOOKS) in Python, that takes a dictionary Books as an argument and displays the names in uppercase of those books whose name starts with a consonant.
def dispBook(BOOKS):
    vowels = "AEIOU"
    for name in BOOKS.values():
        name_stripped = name.strip()
        if name_stripped and name_stripped[0].upper() not in vowels:
            print(name_stripped.upper())

BOOKS = {
    1: "Python",
    2: "Internet Fundamentals ",
    3: "Networking ",
    4: "Oracle sets ",
    5: "Understanding HTML"
}

dispBook(BOOKS)

# Write a Python Program containing a function FindWord(STRING, SEARCH), that accepts two arguments: STRING and SEARCH, and prints the count of occurrence of SEARCH in STRING.
def FindWord(STRING, SEARCH):
    print("The word", SEARCH, "occurs", STRING.count(SEARCH), "times.")

STRING = input("Enter the sentence: ")
SEARCH = input("Enter the word to search: ")
FindWord(STRING, SEARCH)

# Write a function, lenWords(STRING), that takes a string as an argument and returns a tuple containing length of each word of a string.
def lenWords(STRING):
    words = STRING.split()
    lengths = tuple(len(word) for word in words)
    return lengths

STRING = input("Enter a sentence: ")
print(lenWords(STRING))

# Write a function countNow(PLACES) in Python, that takes the dictionary, PLACES as an argument and displays the names (in uppercase) of the places whose names are longer than 5 characters.
def countNow(PLACES):
    for place in PLACES:
        if len(place) > 5:
            print(place.upper())

PLACES = []
n = int(input("Enter number of places: "))
for i in range(n):
    place = input("Enter place name: ")
    PLACES.append(place)

countNow(PLACES)

# Write a python code to split a list using :
my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
print(my_list[:5])
print(my_list[5:])

# Write a python code to split a dictionary using :
my_dict = {1: "apple", 2: "banana", 3: "cherry", 4: "mango", 5: "grape"}
items = list(my_dict.items())
first_part = dict(items[:3])
second_part = dict(items[3:])
print(first_part)
print(second_part)
print(my_dict[1])

# Write python code to split a set using slicing by converting it to a list first
my_set = {1, 2, 3, 4, 5, 6, 7, 8, 9}
my_list = list(my_set)
part1 = set(my_list[:5])
part2 = set(my_list[5:])
print("First part:", part1)
print("Second part:", part2)
print(tuple(my_set))

# Write a python code to check where a number is prime or not
abc = 0
num = int(input("Enter a number: "))
for i in range(1, num + 1):
    if num % i == 0:
        abc += 1
if abc == 2:
    print(num, "is a prime number")
else:
    print(num, "is not a prime number")

# Check if number is prime or perfect
num = int(input("Enter a number: "))
is_prime = num > 1 and all(num % i != 0 for i in range(2, int(num**0.5) + 1))
sum_div = sum(i for i in range(1, num) if num % i == 0)

if is_prime:
    print(num, "is a prime number")
elif sum_div == num and num > 0:
    print(num, "is a perfect number")
else:
    print(num, "is neither a prime nor a perfect number")

# Write a python code to check whether a number is a strong number or not
num = int(input("Enter a number: "))
temp = num
sum = 0
while temp > 0:
    digit = temp % 10
    factorial = 1
    for i in range(1, digit + 1):
        factorial *= i
    sum += factorial
    temp //= 10

if num == sum:
    print(num, "is a strong number")
else:
    print(num, "is not a strong number")

# Python program to display the pattern 12345 using for and while loops
# Using while loop
start = 1
end = 5
while start <= end:
    print(start, end=" ")
    start += 1
print()

# Using for loop
for i in range(1, 6):
    print(i, end=" ")
print()

# Python program to display this pattern: A B C D E
# Using while loop
start = 65
end = 69
while start <= end:
    print(chr(start), end=" ")
    start += 1
print()

# Using for loop
for i in range(65, 70):
    print(chr(i), end=" ")
print()

# Python Program to display this pattern: abcde using for and while loops
# Using for loop
for i in range(97, 102, 1):
    print(chr(i), end="")
print()

# Using while loop
start = 97
end = 101
while start <= end:
    print(chr(start), end="")
    start += 1
print()

# Python program to display this pattern:
# 12345
# 678910
# ... till 25
start = 1
for i in range(5):
    for j in range(5):
        print(start, end="")
        start += 1
    print()

# Python program to display this pattern:
# 1
# 23
# 456
# 78910
# 1112131415
start = 1
for i in range(1, 6):
    for j in range(i):
        print(start, end="")
        start += 1
    print()

# Python program to display this pattern:
# I
# II
# III
# IIII
# IIIII
for i in range(1, 6):
    print("I" * i)

# Python program to display this pattern:
# 1
# 12
# 123
# 1234
for i in range(1, 5):
    k = 1
    for j in range(i):
        print(k, end="")
        k += 1
    print()

# Python program to display this pattern:
# 1234
# 123
# 12
# 1
p = 4
for i in range(p):
    k = 1
    for j in range(p - i):
        print(k, end="")
        k += 1
    print()

# Python program to display this pattern:
# A B C
# D E F
start = 65
for i in range(2):
    for j in range(3):
        print(chr(start), end=" ")
        start += 1
    print()

# Python program to display Pyramid * pattern
rows = int(input("Enter the row size: "))
for i in range(1, rows + 1):
    for _ in range(rows - i):
        print(" ", end="")
    for _ in range(2 * i - 1):
        print("*", end="")
    print()

# Python program to strip the letter 'H' from the start and end of the string "Have a nice day"
text = "Have a nice day"
print(text.strip('H'))

# Python program to reverse the digits of a number, e.g., 123 -> 321
num = int(input("Enter a number to reverse its digits: "))
reversed_num = 0
temp = num
while temp > 0:
    digit = temp % 10
    reversed_num = reversed_num * 10 + digit
    temp //= 10
print(f"The reverse of {num} is {reversed_num}")

#OR

num = int(input("Enter a number to reverse its digits: "))
reversed_str = str(num)[::-1]    # Reverse string of digits
reversed_num = int(reversed_str) # Convert back to int
print(f"The reverse of {num} is {reversed_num}")

# Function lenWords(STRING) that takes a string and returns a tuple of lengths of each word
def lenWords(s):
    words = s.split()
    lengths = []
    for word in words:
        lengths.append(len(word))
    return tuple(lengths)

print(lenWords("Come let have some fun"))

#OR

def lenWords(s):
    return tuple(map(len, s.split()))
print(lenWords("Come let have some fun"))

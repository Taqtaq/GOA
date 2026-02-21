#1
# ფუნქცია არის კოდის ბლოკი, რომელიც აკეთებს კონკრეტულ დავალებას
# პარამეტრი არის ვარიაბლი, რომელიც ფუნქციას გადაეცემა
# არგუმენტი არის რეალური მნიშვნელობა, რომელიც გადაეცემა ფუნქციის პარამეტრს
# ფუნქციები მნიშვნელოვანია, რადგან კოდი ხდება სუფთა, გამეორების გარეშე და მარტივად მართვადი

def greet(name):  # name არის პარამეტრი
    print("Hello", name)

greet("Nika")  # "Nika" არის არგუმენტი
greet("Mariam")

#2
def add(num1, num2):  # num1, num2 პარამეტრები
    print(num1 + num2)

add(5, 10)  # არგუმენტები: 5 და 10
add(7, 3)

#3
def add(num1, num2):
    return num1 + num2

def multiply(num1, num2):
    return num1 * num2

result = add(5, 10) + multiply(2, 3)
print(result)

#4
def filter_evens(n):
    numbers = []
    for i in range(n + 1):
        if i % 2 == 0:
            numbers.append(i)
    return numbers

print(filter_evens(10))

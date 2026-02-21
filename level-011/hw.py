#8
# ფუნქცია არის კოდის ბლოკი, რომელსაც შეუძლია მიიღოს პარამეტრები (ინპუტები) და დააბრუნოს შედეგი ან რაღაც მოქმედება შეასრულოს
# პარამეტრი არის ცვლადი, რომელსაც ფუნქცია იღებს, არგუმენტი კი რეალური მნიშვნელობა, რომელიც გადასცეს ფუნქციას
# ფუნქციები მნიშვნელოვანია, რადგან კოდი ხდება კლებადი, გამეორების გარეშე და მარტივად მართვადი

#1
def is_even(number):
    return number % 2 == 0

print(is_even(4))
print(is_even(7))
print(is_even(10))
print(is_even(15))
print(is_even(0))

#2
def strong_pass(password):
    for char in password:
        if char.isdigit():
            return "Your password is strong"
    return "You should create a strong password"

print(strong_pass("mypassword1"))
print(strong_pass("abc"))
print(strong_pass("pass123"))
print(strong_pass("hello"))
print(strong_pass("P4ssword"))

#3
def contains_number(arr, number):
    if number in arr:
        return "The array contains your number"
    else:
        return "The array does not contain your number"

print(contains_number([1,2,3], 2))
print(contains_number([5,6,7], 4))
print(contains_number([10,20,30], 30))
print(contains_number([8,9,10], 11))
print(contains_number([0,1,2], 0))

#4
def check_age(age):
    if age >= 18:
        return "You are an adult"
    else:
        return "You are a kid"

print(check_age(15))
print(check_age(18))
print(check_age(20))
print(check_age(10))
print(check_age(30))

#5
def compare_numbers(num1, num2):
    if num1 > num2:
        return "The first number is greater than the second number"
    else:
        return "The second number is greater than the first number"

print(compare_numbers(5, 3))
print(compare_numbers(2, 8))
print(compare_numbers(10, 10))
print(compare_numbers(0, -1))
print(compare_numbers(7, 9))

#6
def check_name_length(name):
    if len(name) >= 5:
        return "The given name is long"
    else:
        return "The given name is short"

print(check_name_length("Anna"))
print(check_name_length("Nika"))
print(check_name_length("Alexander"))
print(check_name_length("Lia"))
print(check_name_length("Mariam"))

#7
def grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"

print(grade(95))
print(grade(82))
print(grade(75))
print(grade(63))
print(grade(50))

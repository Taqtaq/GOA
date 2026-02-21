#1
name = input("Sheiyvane saxeli: ")
surname = input("Sheiyvane gvari: ")
age = int(input("Sheiyvane sheni asaki: "))
height = int(input("Sheiyvane sheni simagle: "))
print(name, surname,age,height)

#2
x = int("10")
print(x) # 10

y = int(5.8)
print(y) # 5

a = float("3.14")
print(a) # 3.14

b = float(7)
print(b) # 7.0

c = str(100)
print(c) # "100"

d = str(2.5)
print(d) # "2.5"

e = bool(1)
print(e) # True

f = bool(0)
print(f) # False

#3
num1 = input("Sheiyvane ricxvi: ")
num2 = input("Sheiyvane ricxvi: ")
num3 = input("Sheiyvane ricxvi: ")
print((num1+num2+num3)/3)

#4
# მომხმარებლისგან ორი რიცხვის შეყვანა
num1 = float(input("შეიყვანეთ პირველი რიცხვი: "))
num2 = float(input("შეიყვანეთ მეორე რიცხვი: "))

# მათემატიკური ოპერატორის შეყვანა
operator = input("შეიყვანეთ ოპერატორი (+, -, *, /): ")

# ოპერაციის შემოწმება
if operator == "+":
    print("ჯამი არის:", num1 + num2)

elif operator == "-":
    print("სხვაობა არის:", num1 - num2)

elif operator == "*":
    print("ნამრავლი არის:", num1 * num2)

elif operator == "/":
    if num2 != 0:
        print("განაყოფი არის:", num1 / num2)
    else:
        print("ნულზე გაყოფა არ შეიძლება")

else:
    print("არასწორი ოპერატორი შეიყვანეთ")

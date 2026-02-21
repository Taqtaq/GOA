#2
# for loop გამოიყენება, როცა ციკლის გამეორებების რაოდენობა წინასწარ ვიცით
# while loop გამოიყენება, როცა გამეორების რაოდენობა წინასწარ უცნობია და ციკლი იმართება პირობის მიხედვით

#3
x = 1
while x < 100:
    x *= 2
print(x)

#4
i = 0
while i < 10:
    print(i)
    i += 1

#5
for i in range(1, 11):
    if i == 7:
        break
    print(i)

#6
for i in range(1, 101):
    if i % 4 == 0:
        print(i)

#7
name = input()
lastname = input()
age = input()
country = input()

print(f"You are {name}")
print(f"Your lastname is {lastname}")
print(f"You are {age} years old")
print(f"You live in {country}")

#8
total = 0
i = 0
while i <= 100:
    if i % 2 == 0:
        total += i
    i += 1
print(total)

#9
num = int(input())
factorial = 1
i = 1
while i <= num:
    factorial *= i
    i += 1
print(factorial)

#10
secret = 50  # შეგიძლიათ ნებისმიერი რიცხვი დაინიშნოს
num = int(input())

while num != secret:
    if num > secret:
        print("The number is too high try again!")
    elif num < secret:
        print("The number is too low try again!")
    num = int(input())

print("You have guessed the number")

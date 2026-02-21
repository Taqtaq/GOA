#2
total = 0
for i in range(1, 11):
    total += i ** 2
print(total)

#3
total_count = 0
for i in range(1, 101):
    if i % 3 == 0:
        total_count += 1
print(total_count)

#4
total = 0
for i in range(1, 101):
    if i % 2 != 0:
        total += i
print(total)

#5
n = int(input())
for i in range(1, n + 1):
    print(i)

#6
n = int(input())
for i in range(n):
    print("Hello")

#7
# while loop მუშაობს მანამ, სანამ პირობა არის True
# for loop ვიყენებთ, როცა გამეორებების რაოდენობა ვიცით
# while loop ვიყენებთ, როცა რაოდენობა წინასწარ არ ვიცით
# მაგალითი: while x < 5 — ციკლი შეჩერდება, როცა x გახდება 5

#8
for i in range(1, 6):
    print(i)

for i in range(1, 6):
    print(2 * i)

#9
i = 1
while i <= 10:
    print(i)
    i += 1

#10
num = int(input())
if num < 0:
    print("რიცხვი არის უარყოფითი")
elif num > 0:
    print("რიცხვი არის დადებითი")
else:
    print("რიცხვი არის ნული")

#1
for i in range(1,11):
    if i % 2 == 0:
        print('your number is even')
    else:
        print('your number is odd')

#2
fullname = "Nika Taqtaqishvili"
for i in range(1, 11):
    print(fullname, i)

#3
for i in fullname:
    print(i)

#4 5 რიცხვის შეყვანა და ჯამის დაბეჭდვა
total = 0
for i in range(5):
    num = int(input())
    total += num
print(total)

#5 3 რიცხვის საშუალო არითმეტიკული
total = 0
for i in range(3):
    num = int(input())
    total += num
print(total / 3)

#6 1-დან 10-ის ჩათვლით ლუწი რიცხვების ჯამი
total = 0
for i in range(1, 11):
    if i % 2 == 0:
        total += i
print(total)


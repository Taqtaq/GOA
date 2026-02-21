#2
# for loop გამოიყენება კოდის რამდენჯერმე შესრულებისთვის
# ვიყენებთ მაშინ, როცა გამეორებების რაოდენობა ცნობილია
# ხშირად გამოიყენება სიებზე, ტექსტზე და range-ზე გადასავლელად

#3
fullname = "Nika Taqtaqishvili"
for i in range(1, 21):
    print(fullname, i)

#4
for i in range(1,11):
    print(i)

#5
num = 5
if num % 2 == 0:
    print('your number is even')
else:
    print('your number is odd')

#6
for i in range(1,21):
    if i % 2 == 0:
        print('your number is even')
    else:
        print('your number is odd')

#7
""" 
True and True True
True and False False
False and True False
False and False False

True or True True
True or False True
False or True True
False or False False

True and False or False or True True
"""

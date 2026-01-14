#2
arr = [10, 20, 30, 40, 50, 60]
print(arr[2:5])  # 30, 40, 50

#3
arr = [5, 10, 15, 20, 25]
print(arr[:3])  # პირველი სამი ელემენტი

#4
arr = [1,2,3,4,5,6,7,8,9,10]
print(arr[::2])  # ყოველი მეორე ელემენტი

#5
arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
arr[:3] = ['x', 'y', 'z']
print(arr)

#6
text = "HelloWorld"
index = int(input("შეიყვანეთ index: "))
print(text[index])

#7
num = int(input("შეიყვანეთ რიცხვი: "))
text = "Programming"
print(text[:num])

#8
arr = [10,20,30,40,50,60]
print(arr[-3:])  # ბოლო 3 ელემენტი

#9
word = input("შეიყვანეთ სიტყვა: ")
print(word[::-1][::2])  # შემობრუნებული სიტყვა, ყოველი მეორე სიმბოლო

#10
name = "anna"
reversed_name = name[::-1]
if name == reversed_name:
    print("The given name is palindrome")
else:
    print("The given name is not palindrome")

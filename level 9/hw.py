#2
arr = [10, 20, 30, 40, 50]
index_to_remove = int(input("შეიყვანეთ index: "))
if 0 <= index_to_remove < len(arr):
    del arr[index_to_remove]
print(arr)

#3
numbers = [1,2,3,8,90,101,1090,909,10001,1009,1008]
max_num = numbers[0]
for num in numbers:
    if num > max_num:
        max_num = num
print(max_num)

#4
arr = [5, 10, 15, 20, 25]
print(arr[1:5])  # 2-ე ელემენტიდან 5-ე ჩათვლით

#5
nums = [1,2,3,4,5,6]
print(nums[::-1])  # მოცემული მასივის შეტრიალება

#6
# append()-ის ლოგიკა
arr = [1,2,3]
value_to_add = 4
arr += [value_to_add]  # ან arr = arr + [value_to_add]
print(arr)

# count()-ის ლოგიკა
arr = [1,2,3,2,2,4]
count_2 = 0
for i in arr:
    if i == 2:
        count_2 += 1
print(count_2)

# pop() გამოყენება
arr = [10,20,30]
removed = arr.pop()  # ამოღებს ბოლო ელემენტს
print(arr, removed)

# sort() გამოყენება
arr = [3,1,4,2]
arr.sort()
print(arr)

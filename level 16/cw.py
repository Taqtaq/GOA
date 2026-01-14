#1
def stanton_measure(arr):
    n = arr.count(1)       # Считаем, сколько раз встречается 1
    return arr.count(n)    # Считаем, сколько раз встречается n

#2
def consecutive_vowels(s):
    vowels = ['a', 'e', 'i', 'o', 'u']
    index = 0
    count = 0
    started = False

    for char in s:
        if char == vowels[index]:
            count += 1
            started = True
            index = (index + 1) % 5
        elif started and char in vowels:
            break

    return count
#3
def valid_parentheses(s):
    count = 0
    for char in s:
        if char == '(':
            count += 1
        elif char == ')':
            count -= 1
        if count < 0:
            return False
    return count == 0
#4
def square_digits(num):
    return int("".join(str(int(digit)**2) for digit in str(num)))
#5
def solution(*args):
    return len(args) != len(set(args))


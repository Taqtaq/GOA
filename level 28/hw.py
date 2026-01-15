#1

def digitize(n):
    return [int(d) for d in str(n)][::-1]
#2
def filter_list(l):
    return [x for x in l if isinstance(x, int)]

#3
def reverse_words(text):
    return " ".join(word[::-1] for word in text.split(" "))

#4
def descending_order(num):
    return int("".join(sorted(str(num), reverse=True)))

#5
def solve(arr):
    even = 0
    odd = 0

    for x in arr:
        if type(x) == int:
            if x % 2 == 0:
                even += 1
            else:
                odd += 1

    return even - odd

#6
def square_digits(num):
    return int("".join(str(int(d)**2) for d in str(num)))
#7
def solution(n):
    if n < 0:
        return 0

    total = 0
    for i in range(n):
        if i % 3 == 0 or i % 5 == 0:
            total += i

    return total

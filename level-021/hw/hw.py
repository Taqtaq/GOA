#1
def is_leap_year(year):
    if year % 400 == 0:
        return True
    if year % 100 == 0:
        return False
    if year % 4 == 0:
        return True
    return False
#2
def find_longest(numbers):
    longest = numbers[0]
    for number in numbers:
        if len(str(number)) > len(str(longest)):
            longest = number
    return longest
#3
def reverse_words(text):
    return ' '.join(word[::-1] for word in text.split(' '))


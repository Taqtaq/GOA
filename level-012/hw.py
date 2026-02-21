#1
def rps(p1, p2):
    if p1 == p2:
        return "Draw!"
    elif (p1 == "Rock" and p2 == "Scissors") or \
         (p1 == "Scissors" and p2 == "Paper") or \
         (p1 == "Paper" and p2 == "Rock"):
        return "Player 1 won!"
    else:
        return "Player 2 won!"

#2
def hello(name=None):
    if not name:  # если name пустой или None
        return "Hello, World!"
    # Сделать первую букву заглавной, остальные строчными
    formatted_name = name.capitalize()
    return f"Hello, {formatted_name}!"

#3
def remove_every_other(arr):
    return arr[::2]

#4
def count_sheeps(sheep_list):
    return sum(1 for s in sheep_list if s)

#5
def cookie(x):
    if isinstance(x, str):
        eater = "Zach"
    elif isinstance(x, (int, float)):
        eater = "Monica"
    else:
        eater = "the dog"
    return f"Who ate the last cookie? It was {eater}!"

#6
def array_plus_array(arr1, arr2):
    return sum(arr1) + sum(arr2)

#7
def grader(score):
    if score > 1 or score < 0.6:
        return "F"
    elif score >= 0.9:
        return "A"
    elif score >= 0.8:
        return "B"
    elif score >= 0.7:
        return "C"
    elif score >= 0.6:
        return "D"

#8
def simple_multiplication(number):
    if number % 2 == 0:
        return number * 8
    else:
        return number * 9


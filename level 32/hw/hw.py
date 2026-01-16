#1
def last(*args):
    # Если передан один аргумент
    if len(args) == 1:
        x = args[0]
        # Если это список, кортеж или строка — берём последний элемент
        if isinstance(x, (list, tuple, str)):
            return x[-1]
        # Иначе возвращаем само значение
        return x
    # Если аргументов несколько — возвращаем последний
    return args[-1]

#2
def has_unique_chars(s: str) -> bool:
    return len(s) == len(set(s))

#3
def high(s: str) -> str:
    best_word = ""
    best_score = 0

    for word in s.split():
        score = sum(ord(ch) - ord('a') + 1 for ch in word)

        if score > best_score:
            best_score = score
            best_word = word

    return best_word
#4
def more_zeroes(s: str) -> list[str]:
    result = []
    seen = set()

    for ch in s:
        if ch in seen:
            continue

        binary = bin(ord(ch))[2:]   # бинарное представление без '0b'
        if binary.count('0') > binary.count('1'):
            result.append(ch)
            seen.add(ch)

    return result

#5
def is_alt(s: str) -> bool:
    vowels = set("aeiou")

    for i in range(len(s) - 1):
        if (s[i] in vowels) == (s[i + 1] in vowels):
            return False

    return True

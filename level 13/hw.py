#1
def count_bits(n):
    return bin(n).count('1')

#2
def duplicate_count(text):
    text = text.lower()  
    counts = {}
    for char in text:
        counts[char] = counts.get(char, 0) + 1
    return sum(1 for v in counts.values() if v > 1)

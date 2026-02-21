#1
def sort_by_bit(arr):
    return sorted(arr, key=lambda x: (bin(x).count('1'), x))
#2
def duplicate_count(text):
    text = text.lower()
    count = 0

    for ch in set(text):
        if text.count(ch) > 1:
            count += 1

    return count

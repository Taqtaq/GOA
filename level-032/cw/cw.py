#1
class Node():
    def __init__(self, data, next=None):
        self.data = data
        self.next = next

def stringify_linked_list(node):
    if node is None:
        return "None"
    else:
        return f"{node.data} -> " + stringify_linked_list(node.next)
print(stringify_linked_list(Node(1, Node(2, Node(3)))))
#2
def sort_by_property(arr, sortBy):
    return sorted(arr, key=lambda x: x[sortBy], reverse=True)

#3

def extract_file_name(dirty_file_name): 
    name = dirty_file_name.split('_', 1)[1] 
    parts = name.split('.') 
    return '.'.join(parts[:-1])
#4
from collections import Counter

def longest_word(letters):
    letter_count = Counter(letters)
    best = []
    best_len = 0

    for w in words:
        if len(w) > 9:
            continue

        if Counter(w) <= letter_count:
            lw = len(w)
            if lw > best_len:
                best_len = lw
                best = [w]
            elif lw == best_len:
                best.append(w)

    return None if not best else sorted(best)

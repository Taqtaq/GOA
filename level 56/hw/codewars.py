# // 5
# // 7 kyu
# // Case-sensitive!

def case_sensitive(s):
    not_lower = [c for c in s if c.isalpha() and not c.islower()]
    return [len(not_lower) == 0, not_lower]


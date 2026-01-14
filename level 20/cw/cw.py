#1
def is_valid_word(word):
    word = word.lower()
    char_count = {}
    
    for char in word:
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1
            
    counts = list(char_count.values())
    
    return all(count == counts[0] for count in counts)
#2

def to_weird_case(string):
    def weird_word(word):
        result = []
        for index, char in enumerate(word):
            if index % 2 == 0:
                result.append(char.upper())
            else:
                result.append(char.lower())
        return ''.join(result)
    
    words = string.split(' ')
    weirded_words = [weird_word(word) for word in words]
    return ' '.join(weirded_words)
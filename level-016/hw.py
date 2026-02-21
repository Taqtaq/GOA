#1
def parse_float(value):
    try:
        return float(value)
    except:
        return 'none'


#2
def is_vow(arr):
    vowels = {
        97: "a",
        101: "e",
        105: "i",
        111: "o",
        117: "u"
    }
    res = []
    for i in arr:
        if i in vowels:
            res.append(vowels[i])
        else:
            res.append(i)
    return res
print(is_vow([100,100,116,105,117,117]))
# → [100, 100, 116, "i", "u", "u"]

#3
def no_space(x):
    return x.replace(" ", "")
print(no_space("8 j 8   mBliB8g  imjB8B8  jl  B"))

#4
def hamming_weight(x):
    count = 0
    while x:
        count += 1
        x &= x - 1
    return count

print(hamming_weight(2))

#5
def filter_list(l):
    return [x for x in l if type(x) == int]

#6
def password_validator(password):
    if len(password) < 8:
        return False

    has_upper = False
    has_lower = False
    has_digit = False

    for char in password:
        if char.isupper():
            has_upper = True
        elif char.islower():
            has_lower = True
        elif char.isdigit():
            has_digit = True

    return has_upper and has_lower and has_digit

#7
def spin_words(sentence):
    words = sentence.split()
    result = []

    for word in words:
        if len(word) >= 5:
            result.append(word[::-1])
        else:
            result.append(word)

    return " ".join(result)


#8
def get_the_vowels(word):
    # ვქმნით სტრიქონს ხმოვანებით, რათა ვიცოდეთ მათი თანმიმდევრობა
    vowels = 'aeiou'
    
    # ვიწყებთ პირველი ხმოვანი 'a'-დან, რომელსაც ვეძებთ
    next_vowel = 'a'
    
    # ნაპოვნი ხმოვანების რაოდენობის ქაუნთერი
    count = 0
    
    # ვიკვლევთ თითო სიმბოლოს სიტყვაში
    for char in word:
        # თუ მიმდინარე სიმბოლო ემთხვევა მოსალოდნელ ხმოვანს
        if char == next_vowel:
            # ზრდის ქაუნთერს
            count += 1
            
            # თუ მივედით 'u'-ს, შემდეგი ხმოვანი ისევ 'a' ხდება
            if next_vowel == 'u':
                next_vowel = 'a'
            else: 
                # წინააღმდეგ შემთხვევაში, ვიღებთ შემდეგ ხმოვანს თანმიმდევრობით
                next_vowel = vowels[vowels.index(next_vowel) + 1]
        
    # აბრუნებს ნაპოვნი თანმიმდევრული ხმოვანების რაოდენობას

    return count
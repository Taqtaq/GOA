#1
def to_uppercase(s):
    return s.upper()
#2
def sum_positive_numbers(arr):
    return sum(x for x in arr if x > 0)
#3
def vowel_indices(word):
    vowels = "aeiouyAEIOUY"
    return [i + 1 for i, letter in enumerate(word) if letter in vowels]
#4

def validate_pin(pin):
    return (len(pin) == 4 or len(pin) == 6) and pin.isdigit()

#5
def open_or_senior(data):
    result = []
    for age, handicap in data:
        if age >= 55 and handicap > 7:
            result.append("Senior")
        else:
            result.append("Open")
    return result
#6
def to_weird_case(words):
    # words - ეს არის შეყვანილი სტრიქონი, მაგალითად: "hello world"
    
    words = words.split(" ")
    # split(" ") აღყოფს სტრიქონს სიტყვებზე და ქმნის სიას.
    # მაგალითად: "hello world" -> ["hello", "world"]
    
    result = []
    # result - სიას, რომელიც შემდგომში შეიცავს შეცვლილ სიტყვებს
    
    for word in words:
        # ვცვლით თითოეულ სიტყვას ცალ-ცალკე
        
        weird = ''
        # weird - ცვლადი, სადაც შევინახავთ ახალ, "უცნაურად" გარდაქმნილ სიტყვას
        
        for i in range(len(word)):
            # ვსვლით თითოეულ ასოზე სიტყვაში, i არის ინდექსი 0-დან სიტყვას სიგრძემდე
            if i % 2 == 0:
                # თუ ინდექსი სავსე (0, 2, 4...), ასო მივცეთ დიდს
                weird += word[i].upper()
            else:
                # თუ ინდექსი ლუწი (1, 3, 5...), ასო მივცეთ პატარას
                weird += word[i].lower()
        
        result.append(weird)
        # შევინახავთ შეცვლილ სიტყვას სიაში result
    
    return " ".join(result)
    # ბოლოს ვაერთიანებთ სიაში არსებულ სიტყვებს ერთად, თავიდან ხდება სფეისებით გაყოფა
    # მაგალითად: ["HeLlO", "WoRlD"] -> "HeLlO WoRlD"

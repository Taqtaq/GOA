#2
# List არის მონაცემთა კოლექცია Python-ში, რომელიც შეუძლია შეინახოს მრავალი მნიშვნელობა ერთ ცვლადში
# Python-ის list-ში შეგვიძლია შევინახოთ სხვადასხვა ტიპის მონაცემები ერთად: რიცხვები, ტექსტი, ბულები, სხვ.

#3
numbers = []
for i in range(5):
    num = int(input())
    numbers.append(num)
print(sum(numbers))

#4
# Indexing არის გზაა, რომ მივიღოთ წვდომა list-ის კონკრეტულ ელემენტზე
# გამოყენება: კონკრეტული ელემენტის წაკითხვა, შეცვლა ან წაშლა

#5
family = ['Nika', 'Lasha', 'Tiko', 'Mariam']
print(family[0])
print(family[1])
print(family[2])
print(family[3])

#6
name = 'Nino'
# name[1] = 'a' 
# Python-ში strings არა mutableა, მათი ელემენტების შეცვლა პირდაპირ შეუძლებელია

#7
nums = [1, 2, 3, 4, 5]
nums[-1] = 10
print(nums)

#8
fruits = ['apple', 'banana', 'orange', 'kiwi']
print(len(fruits))  # len ფუნქცია აბრუნებს list-ის სიგრძეს

#9
mixed = [1, 'hello', True, 3.14]
for item in mixed:
    print(item)

#10
letters = ['a', 'b', 'c', 'd', 'e', 'f']
print(letters[1:4])    # ['b', 'c', 'd']
print(letters[:3])     # ['a', 'b', 'c']
print(letters[3:])     # ['d', 'e', 'f']
print(letters[::2])    # ['a', 'c', 'e'] - ყოველი მეორე ელემენტი

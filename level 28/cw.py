#1
def dont_give_me_five(start, end):
    return len([num for num in range(start, end + 1) if '5' not in str(num)])
#2
class HTMLGen:
    def a(self, text):
        return "<a>" + text + "</a>"

    def b(self, text):
        return "<b>" + text + "</b>"

    def p(self, text):
        return "<p>" + text + "</p>"

    def body(self, text):
        return "<body>" + text + "</body>"

    def div(self, text):
        return "<div>" + text + "</div>"

    def span(self, text):
        return "<span>" + text + "</span>"

    def title(self, text):
        return "<title>" + text + "</title>"

    def comment(self, text):
        return "<!--" + text + "-->"
#3
def differences_from_average(numbers):
    avg = sum(numbers) / len(numbers)
    return [round(num - avg, 2) for num in numbers]
#4
def solve(arr):
    counts = {}

    for x in arr:
        counts[x] = counts.get(x, 0) + 1

    return sorted(arr, key=lambda x: (-counts[x], x))
#5

def linked_sort(array_to_sort, linked_array, compare_function=None):
    # 1) склеиваем пары
    pairs = list(zip(array_to_sort, linked_array))

    # 2) сортируем
    if compare_function:
        pairs.sort(key=lambda x: x[0])
    else:
        pairs.sort(key=lambda x: str(x[0]))

    # 3) раскладываем обратно
    for i in range(len(pairs)):
        array_to_sort[i] = pairs[i][0]
        linked_array[i] = pairs[i][1]

    return array_to_sort

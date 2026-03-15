#6
def tribonacci(signature, n):
    if n == 0:
        return []
    if len(signature) > n:
        return signature[0:n]
    result = signature
    num = 0
    while len(result) < n:
        for i in range(3, n):
            num = sum(result[i-3:i])
            result.append(num)
    return result


print(tribonacci([1, 1, 1], 10))
print(tribonacci([1, 1, 1], 4))
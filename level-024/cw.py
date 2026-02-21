#1

def remove_smallest(numbers):
    if not numbers:
        return []
    min_value = min(numbers)
    min_index = numbers.index(min_value)
    return numbers[:min_index] + numbers[min_index + 1:]

#2
def persistence(num):
    count = 0
    while num >= 10:
        product = 1
        for digit in str(num):
            product *= int(digit)
        num = product
        count += 1
    return count

#3

# With input "20.0.0.10", "20.0.1.0"  => return  246
def ips_between(start, end):
    def ip_to_int(ip):
        parts = list(map(int, ip.split('.')))
        return (parts[0] << 24) + (parts[1] << 16) + (parts[2] << 8) + parts[3]
    
    return ip_to_int(end) - ip_to_int(start)
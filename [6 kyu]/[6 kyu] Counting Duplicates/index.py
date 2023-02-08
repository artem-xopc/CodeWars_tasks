def duplicate_count(text):
    count = {}
    for char in text.lower():
        count[char] = count.get(char, 0) + 1
        
    result = 0
    for char in  count:
        if count[char] > 1:
            result += 1
    return result
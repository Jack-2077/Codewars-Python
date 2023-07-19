def solution(text, ending):
    return ending in text[len(text)- len(ending):]

# return string.endswith(ending)
# return t in s[-len(t):]

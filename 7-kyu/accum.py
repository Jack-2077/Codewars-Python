def accum(s):
    output = ""
    for x in range(len(s)):
        output += s[x].upper() + s[x].lower() * x + '-'
    return output[:-1]

# output += (s[x] * (x+1)) + "-"
# return output.title()[:-1]

#return '-'.join(c.upper() + c.lower() * i for i, c in enumerate(s))


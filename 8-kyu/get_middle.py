def get_middle(s):
    str_len = len(s)
    return (s[str_len//2 - 1] if str_len % 2== 0 else "") + s[str_len//2]


def square_digits(num):
    str_num = str(num)
    arr_num = [str(int(x) ** 2) for x in str_num]
    return int(''.join(arr_num))

#     ret = ""
#     for x in str(num):
#         ret += str(int(x)**2)
#     return int(ret)

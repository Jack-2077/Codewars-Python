def remove_every_other(my_list):
    count = len(my_list)//2
    for x in range(count):
        my_list.pop(x + 1)
        
    return my_list    

#return my_list[::2]

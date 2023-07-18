def (numbers):
    if not numbers:
        return []
    min_index = numbers.index(min(numbers))
    return numbers[:min_index] + numbers[min_index + 1:]

# a = arr[:]
#  a.remove(min(arr))
#  return a


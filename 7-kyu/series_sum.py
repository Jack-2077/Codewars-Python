def series_sum(num):
  start = 1
  output = 0
  for x in range(num - 1):
    start += 3
    output += 1/(start)
  return "{:.2f}".format(output)

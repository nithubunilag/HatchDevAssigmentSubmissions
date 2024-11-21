# Selection Sort
for i = 0 to n - 1
    minimum = i
    for j = i + 1 to n
        if arr[j] < arr[minimum]
        swap arr[j] and arr[minimum]

return arr

# Bubble Sort
for i = 0 to n
    for j = 0 to n - i - 1
        if arr[j] < arr[j + 1]
            swap arr[j] and arr[j + 1]

return arr

# Insertion Sort
for i = 1 to n
    key = arr[i]
    j = i - 1
    
    while j >= 0 && arr[j] > key
        a[j + 1] = arr[j]
        decrement j 
    arr[j + 1] = key
    
return arr
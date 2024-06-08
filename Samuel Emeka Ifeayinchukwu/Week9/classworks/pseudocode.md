# 1. Pseudocode for Insertion sort

function insertionSort(array)

  // Loop through each element of the array starting from the second position (index 1)
  for (i = 1 to length(array))
    // Store the current element to be inserted
    currentElement = array[i]
    // Initialize j to the index one before the current element (i)
    j = i - 1

    // While j is within the array bounds and the element at j is greater than the current element
    while (j >= 0 and array[j] > currentElement)
      // Shift the element at j one position to the right (to make space for the current element)
      array[j + 1] = array[j]
      // Decrement j to compare with the previous element
      j = j - 1

    // Insert the current element at the correct sorted position (j + 1)
    array[j + 1] = currentElement

  // Return the sorted array
  return array

# Pseudocode for Selection sort

function selectionSort(array)

  // Loop through each element of the array (except the last element)
  for (i = 0 to length(array) - 1)
    // Initialize the minimum element index to the current index (i)
    minIndex = i

    // Loop through the remaining elements in the unsorted sub-array (from i+1 to end)
    for (j = i + 1 to length(array) - 1)
      // If an element is found to be less than the current minimum element
      if (array[j] < array[minIndex])
        // Update the minimum element index
        minIndex = j

    // Swap the element at the current index (i) with the element at the minimum element index
    swap(array[i], array[minIndex])

  // Return the sorted array
  return array


# Psuedocode for Bubble sort

function bubbleSort(array)

  // Loop through each element of the array (except the last element in each pass)
  for (i = 0 to length(array) - 1)
    // Initialize a flag to track if any swaps occurred in the inner loop (assuming the array is sorted)
    swapped = false

    // Loop through the unsorted sub-array (from 0 to length - i - 1) comparing adjacent elements
    for (j = 0 to length(array) - i - 1)
      // If the current element is greater than the next element
      if (array[j] > array[j + 1])
        // Swap the elements
        swap(array[j], array[j + 1])
        // Set the swapped flag to true to indicate a swap occurred
        swapped = true

    // If no swaps occurred in the inner loop, the array is already sorted, so exit the outer loop
    if (!swapped)
      break

  // Return the sorted array
  return array


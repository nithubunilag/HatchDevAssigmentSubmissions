export default class Sorter<T> {

    private merge<T>(left: T[], right: T[]): T[] {
        const merged: T[] = [];
        let leftIndex = 0;
        let rightIndex = 0;
      
        // Compare elements from both halves and add the smaller one to the merged array
        while (leftIndex < left.length && rightIndex < right.length) {
          if (left[leftIndex] < right[rightIndex]) {
            merged.push(left[leftIndex]);
            leftIndex++;
          } else {
            merged.push(right[rightIndex]);
            rightIndex++;
          }
        }
      
        // Add any remaining elements from either half
        merged.push(...left.slice(leftIndex));
        merged.push(...right.slice(rightIndex));
      
        return merged;
        }
    private partition<T>(array: T[], low: number, high: number): number {
        // Choose the last element as the pivot 
        const pivot = array[high];
        let i = low - 1;
      
        // Rearrange elements 
        for (let j = low; j < high; j++) {
          if (array[j] < pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
          }
        }
      
        // Place the pivot element in its final position (after elements less than it)
        [array[i + 1], array[high]] = [array[high], array[i + 1]];
        return i + 1; // Return the index of the pivot element
        }

    mergesort(arr: Array<T>): T[]{
        // Base case if array has length of 1 or 0
        if (arr.length <= 1) {
            return arr;
          }
        
          // Divide the array into two halves
          const middleIndex = Math.floor(arr.length / 2);
          const leftHalf = arr.slice(0, middleIndex);
          const rightHalf = arr.slice(middleIndex);
        
          // Recursively sort the left and right halves
          const sortedLeft = this.mergesort(leftHalf);
          const sortedRight = this.mergesort(rightHalf);
        
          // Merge the sorted halves back together
          return this.merge(sortedLeft, sortedRight);
        }
        
    quicksort(arr: Array<T>, low:number = 0, high:number = arr.length -1): T[] {

        if (low < high) {
            const pivotIndex = this.partition(arr, low, high);
            this.quicksort(arr, low, pivotIndex - 1); // Sort left half
            this.quicksort(arr, pivotIndex + 1, high); // Sort right half
          }
          return arr;
        }
    bubblesort(arr: Array<T>): T[]{
        for (let i = 0; i < arr.length - 1; i++) {
            let swapped = false;
            
            for (let j = 0; j < arr.length - i - 1; j++) {
              if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
              }
            }
            // If no swaps occurred in the inner loop, the array is already sorted
            if (!swapped) {
              break;
            }
          }
          return arr;
        }
    selectionsort(arr: Array<T>): T[]{
        for (let i = 0; i < arr.length; i++) {
            let minIndex = i; 
        
            // Find the index of the minimum element in the unsorted part
            for (let j = i + 1; j < arr.length; j++) {
              if (arr[j] < arr[minIndex]) {
                minIndex = j;
              }
            }
        
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
          }
          return arr;
        }
    insertionsort(arr: Array<T>): T[]{
        for (let i = 1; i < arr.length; i++) {
            const currentElement = arr[i];
            let j = i - 1;
        
            while (j >= 0 && arr[j] > currentElement) {
              arr[j + 1] = arr[j];
              j--;
            }
        
            
            arr[j + 1] = currentElement;
          }
          return arr;
    }
}


class SortingAlgs<T> {
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
}
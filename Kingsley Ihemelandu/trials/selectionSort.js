export const selectionSort = (data) => {
    if (!data) return []
    for (let i=0; i<data.length; i++) {
        let minIndex = i
        // find the minimum value in the unsorted part of the array
        for (let j=i+1; j<data.length; j++) {
            if (data[j] < data[minIndex]) {
                minIndex = j
            }
        }
        [data[i], data[minIndex]] = [data[minIndex], data[i]]
    }
}
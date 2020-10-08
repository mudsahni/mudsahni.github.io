

const InsertionSort = (array: number[]) => {
    const n: number = array.length
    const trace: { [key: string]: any }[] = []
    const sortedArray: number[] = [...array]

    for (let i = 1; i < n; i++) {
        let key: number = sortedArray[i]
        let j: number = i - 1
        trace.push({
            arrayState: [...sortedArray], currentIndex: j,
            comparisonIndex: i, unsortedIndex: i, isSorted: false
        })
        while (j >= 0 && key < sortedArray[j]) {
            trace.push({
                arrayState: [...sortedArray], currentIndex: j,
                comparisonIndex: j + 1, unsortedIndex: i, isSorted: false
            })

            sortedArray[j + 1] = sortedArray[j]
            j -= 1
            trace.push({
                arrayState: [...sortedArray], currentIndex: j,
                comparisonIndex: j + 1, unsortedIndex: i, isSorted: false
            })

        }
        trace.push({
            arrayState: [...sortedArray], currentIndex: j,
            comparisonIndex: j + 1, unsortedIndex: i, isSorted: false
        })

        sortedArray[j + 1] = key
        trace.push({
            arrayState: [...sortedArray], currentIndex: j + 1,
            comparisonIndex: j + 2, unsortedIndex: i, isSorted: false
        })

    }
    trace.push({
        arrayState: [...sortedArray], currentIndex: -1,
        comparisonIndex: -1, unsortedIndex: -1, isSorted: true
    })


    return trace
}

export default InsertionSort
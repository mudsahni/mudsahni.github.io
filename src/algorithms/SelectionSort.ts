
// const SelectionSort = (array: number[], currentTrace: { [key: string]: { value: any, func: any } }) => {
//     let sortStepArray: number[] = [...array]

//     if (currentTrace.unsortedIndex.value === sortStepArray.length) {
//         currentTrace.unsortedIndex.func(-1)
//         currentTrace.currentIndex.func(-1)
//         currentTrace.comparisonIndex.func(-1)
//         currentTrace.isSorted.func(true)
//     }
//     else if (currentTrace.comparisonIndex.value < sortStepArray.length) {
//         if (sortStepArray[currentTrace.currentIndex.value] > sortStepArray[currentTrace.comparisonIndex.value]) {
//             currentTrace.currentIndex.func(currentTrace.comparisonIndex.value)
//             currentTrace.comparisonIndex.func(currentTrace.comparisonIndex.value + 1)
//             // currentTrace.unsortedIndex.func(currentTrace.unsortedIndex.value + 1)
//         } else {
//             currentTrace.comparisonIndex.func(currentTrace.comparisonIndex.value + 1)
//         }
//     } else {
//         if (currentTrace.currentIndex.value !== currentTrace.unsortedIndex.value) {
//             [sortStepArray[currentTrace.unsortedIndex.value], sortStepArray[currentTrace.currentIndex.value]] =
//                 [sortStepArray[currentTrace.currentIndex.value], sortStepArray[currentTrace.unsortedIndex.value]]

//             currentTrace.arrayState.func([...sortStepArray])
//             currentTrace.currentIndex.func(currentTrace.unsortedIndex.value + 1)
//             currentTrace.unsortedIndex.func(currentTrace.unsortedIndex.value + 1)
//             currentTrace.comparisonIndex.func(currentTrace.currentIndex.value + 1)
//         } else {
//             currentTrace.currentIndex.func(currentTrace.unsortedIndex.value + 1)
//             currentTrace.unsortedIndex.func(currentTrace.unsortedIndex.value + 1)
//             currentTrace.comparisonIndex.func(currentTrace.currentIndex.value + 1)
//         }
//     }

// }

const SelectionSort = (array: number[]) => {
    const n: number = array.length
    const trace: { [key: string]: any }[] = []
    const sortedArray: number[] = [...array]

    for (let i = 0; i < n - 1; i++) {
        let min_idx: number = i
        // trace.push({
        //     arrayState: [...sortedArray], currentIndex: min_idx,
        //     unsortedIndex: i, comparisonIndex: min_idx + 1, isSorted: false
        // })

        for (let j = i + 1; j < n; j++) {
            trace.push({
                arrayState: [...sortedArray], currentIndex: min_idx,
                unsortedIndex: i, comparisonIndex: j, isSorted: false
            })
            if (sortedArray[min_idx] > sortedArray[j]) {
                trace.push({
                    arrayState: [...sortedArray], currentIndex: min_idx,
                    unsortedIndex: i, comparisonIndex: j, isSorted: false
                })

                min_idx = j
                trace.push({
                    arrayState: [...sortedArray], currentIndex: min_idx,
                    unsortedIndex: i, comparisonIndex: j + 1, isSorted: false
                })

            }
        }
        trace.push({
            arrayState: [...sortedArray], currentIndex: min_idx,
            unsortedIndex: i, comparisonIndex: n, isSorted: false
        });

        [sortedArray[i], sortedArray[min_idx]] = [sortedArray[min_idx], sortedArray[i]]
        trace.push({
            arrayState: [...sortedArray], currentIndex: i,
            unsortedIndex: i, comparisonIndex: i + 1, isSorted: false
        })

    }
    trace.push({
        arrayState: [...sortedArray], currentIndex: -1,
        unsortedIndex: -1, comparisonIndex: -1, isSorted: true
    })
    return trace
}

export default SelectionSort
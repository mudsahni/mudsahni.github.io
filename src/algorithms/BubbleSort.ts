// const BubbleSort = (array: number[], currentTrace: { [key: string]: { value: any, func: any } }) => {
//     let sortStepArray: number[] = [...array]
//     // let trace: any[][] = []
//     if (sortStepArray.length === currentTrace.unsortedIndex.value) {
//         // trace.push([-1, currentTrace.unsortedIndex.func])
//         // trace.push([-1, currentTrace.currentIndex.func])
//         // trace.push([true, currentTrace.isSorted.func])
//         // return trace
//         currentTrace.unsortedIndex.func(-1)
//         currentTrace.currentIndex.func(-1)
//         currentTrace.comparisonIndex.func(-1)
//         currentTrace.isSorted.func(true)
//     } else if (currentTrace.currentIndex.value >=
//         sortStepArray.length - currentTrace.unsortedIndex.value) {
//         // trace.push([1, currentTrace.currentIndex.func])
//         // trace.push([currentTrace.unsortedIndex.value + 1, currentTrace.unsortedIndex.func])
//         currentTrace.currentIndex.func(1)
//         currentTrace.comparisonIndex.func(1)
//         currentTrace.unsortedIndex.func(currentTrace.unsortedIndex.value + 1)
//     } else {
//         if (sortStepArray[currentTrace.currentIndex.value - 1] > sortStepArray[currentTrace.currentIndex.value]) {
//             [sortStepArray[currentTrace.currentIndex.value - 1], sortStepArray[currentTrace.currentIndex.value]] =
//                 [sortStepArray[currentTrace.currentIndex.value], sortStepArray[currentTrace.currentIndex.value - 1]];
//             currentTrace.arrayState.func([...sortStepArray])
//         }
//         currentTrace.currentIndex.func(currentTrace.currentIndex.value + 1)
//         currentTrace.comparisonIndex.func(currentTrace.comparisonIndex.value + 1)
//     }
// }

const BubbleSort = (array: number[]) => {
    const n: number = array.length
    const trace: { [key: string]: any }[] = []
    const sortedArray = [...array]

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            trace.push({
                arrayState: [...sortedArray], currentIndex: j,
                comparisonIndex: j + 1, unsortedIndex: n - i - 1,
                isSorted: false
            })
            if (sortedArray[j] > sortedArray[j + 1]) {
                [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]]
                trace.push({
                    arrayState: [...sortedArray], currentIndex: j + 1,
                    comparisonIndex: j + 2, unsortedIndex: n - i - 1,
                    isSorted: false
                })

            }
        }
    }
    trace.push({
        arrayState: [...sortedArray], currentIndex: -1,
        comparisonIndex: -1, unsortedIndex: -1,
        isSorted: true
    })
    return trace

}

export default BubbleSort

// const sortStep = () => {
//     let sortStepArray: number[] = [...arrayState]
//     if (sortStepArray.length === unsortedIndex) {
//         setUnsortedIndex(-1)
//         setCurrentIndex(-1)
//         setIsSorted(true)
//     } else if (currentIndex >= sortStepArray.length - unsortedIndex) {
//         setCurrentIndex(1)
//         setUnsortedIndex(unsortedIndex + 1)
//     } else {
//         if (sortStepArray[currentIndex - 1] > sortStepArray[currentIndex]) {
//             [sortStepArray[currentIndex - 1], sortStepArray[currentIndex]] =
//                 [sortStepArray[currentIndex], sortStepArray[currentIndex - 1]];
//             setArrayState([...sortStepArray])
//         }
//         setCurrentIndex(currentIndex + 1)

//     }


// }

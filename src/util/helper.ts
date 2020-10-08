
export const getRandomArray = (n: number, min: number, max: number) => {
    let array: number[] = []
    for (let i = 0; i < n; i++) {
        array.push(min + Math.floor(Math.random() * max))
    }
    return [...array]
}

export const standardize = (x: number, min: number, max: number) => {
    return (x - min) / (max - min)
}
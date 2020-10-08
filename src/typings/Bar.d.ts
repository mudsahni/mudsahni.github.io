declare namespace BarType {
    interface ChartToBarInput {
        array: number[];
        highlightIndex: number;
    }

    interface BarInput {
        value: number;
        height: number;
    }

}

export default BarType
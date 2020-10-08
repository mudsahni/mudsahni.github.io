import * as React from 'react'
import { Button, Divider, Dropdown, Icon, Segment } from 'semantic-ui-react';
import Chart from '../../molecules/Chart';
import Playbar from '../../molecules/Playbar';
import ChartType from '../../../typings/Chart'
import useStateWithCallbackLazy from 'use-state-with-callback';
import './style.css'
import { getRandomArray } from '../../../util/helper';
import BubbleSort from '../../../algorithms/BubbleSort'
import SelectionSort from '../../../algorithms/SelectionSort';
import InsertionSort from '../../../algorithms/InsertionSort'
import { DEFAULT_SPEED } from './constants';
import Backdrop from '../../atoms/Backdrop';
import { Legend } from '../../atoms/Legend';
import { LegendBar } from '../../molecules/LegendBar';
interface DynamicChartProps {
    randomArray: number[];
}


const DynamicChart: React.FC<DynamicChartProps> = ({ randomArray }) => {
    const [array, setArray] = React.useState<number[]>(randomArray)
    // let array: number[] = [...randomArray]
    // const randomArray = (): number[] => getRandomArray(30, 0, 100);
    // const array = [...randomArray()]
    const [arrayState, setArrayState] = React.useState<number[]>(array)
    const [currentIndex, setCurrentIndex] = React.useState<number>(0)
    const [comparisonIndex, setComparisonIndex] = React.useState<number>(0)
    const [unsortedIndex, setUnsortedIndex] = React.useState<number>(0)
    const [isSorted, setIsSorted] = React.useState<boolean>(false)
    const [speed, setSpeed] = React.useState<number>(DEFAULT_SPEED)
    const [onGoing, setOnGoing] = React.useState<boolean>(false)
    const [trace, setTrace] = React.useState<{ [key: string]: any }[]>([])
    const [traceId, setTraceId] = React.useState<number>(0)
    const [pause, setPause] = React.useState<boolean>(false)

    const [algorithm, setAlgorithm] = React.useState<any>({ name: "Bubble Sort", func: BubbleSort })
    // const [count, setCount] = useStateWithCallbackLazy(0, (count: number) => {
    //     if (count > 0 && isSorted === false) {
    //         const timer = setTimeout(BubbleSort, speed, arrayState, traceObject)
    //         return () => clearTimeout(timer)
    //     } else {
    //         setOnGoing(false)
    //     }
    // })

    const [count, setCount] = useStateWithCallbackLazy(0, (count: number) => {
        if (count > 0 && isSorted === false) {
            if (trace.length > 0 && traceId <= trace.length - 1) {
                const timer = setTimeout(changeVisualState, speed, trace[traceId])
                return () => clearTimeout(timer)
            }
        }
        else {
            if (pause) {
                setOnGoing(false)
            } else {
                setOnGoing(false)
            }
        }
    })


    const changeVisualState = (traceObject: { [key: string]: any }) => {
        setCurrentIndex(traceObject.currentIndex)
        setComparisonIndex(traceObject.comparisonIndex)
        setUnsortedIndex(traceObject.unsortedIndex)
        setArrayState([...traceObject.arrayState])
        setIsSorted(traceObject.isSorted)
        setTraceId(traceId + 1)

    }


    const increaseSpeed = () => {
        setSpeed(speed / 2)
    }

    const decreaseSpeed = () => {
        setSpeed(speed * 2)
    }
    const generateNewArray = () => {
        setArray([...getRandomArray(30, 0, 100)])
        setArrayState(array)
        setIsSorted(false)
        setOnGoing(false)
        setCurrentIndex(0)
        setComparisonIndex(0)
        setUnsortedIndex(0)
        setCount(0)
        setSpeed(speed)
        setTraceId(0)
        setTrace([])
        setPause(false)
    }



    const sortRun = () => {
        setOnGoing(true)
        setPause(false)
        if (!(trace.length > 0)) {
            const trace: { [key: string]: any }[] = algorithm.func([...arrayState])
            setTrace([...trace])
        }
        setCount(count + 1)
    }

    // const sortRun = () => {
    //     console.log(arrayState)

    //     let sortRunArray: number[] = [...arrayState];
    //     for (let i = 1; i < sortRunArray.length; i++) {

    //         if (sortRunArray[i - 1] > sortRunArray[i]) {
    //             setTimeout(sortStep, 1000, i - 1, i)
    //             sortRunArray = [...arrayState]
    //             // [sortRunArray[i - 1], sortRunArray[i]] = [sortRunArray[i], sortRunArray[i - 1]];

    //         } else {
    //             sortRunArray = [...arrayState]
    //         }
    //     }

    //     setArrayState([...sortRunArray])
    // }

    const pauseSorting = () => {
        setPause(true)
        setCount(0)
    }

    const getSortedState = () => {
        const sortedArray = [...arrayState].sort((a, b) => a - b)
        setArrayState(sortedArray)
        setIsSorted(true)
        setOnGoing(false)
        setCurrentIndex(0)
        setComparisonIndex(0)
        setUnsortedIndex(0)
        setCount(0)
        setSpeed(speed)
        setTraceId(sortedArray.length)
        setTraceId(0)

    }

    const getOriginalState = () => {
        setArrayState([...array])
        setIsSorted(false)
        setOnGoing(false)
        setCurrentIndex(0)
        setComparisonIndex(0)
        setUnsortedIndex(0)
        setCount(0)
        setSpeed(DEFAULT_SPEED)
        setTraceId(0)
        setTraceId(0)


    }
    const options = [{ value: "Bubble Sort", key: "bubbleSort", text: "Bubble Sort" },
    { value: "Insertion Sort", key: "insertionSort", text: "Insertion Sort" }, { value: "Selection Sort", key: "selectionSort", text: "Selection Sort" }]

    const selectAlgorithm = (_: React.SyntheticEvent, data: any) => {
        if (data.value === "Bubble Sort") {
            setAlgorithm({ name: "Bubble Sort", func: BubbleSort })
        } else if (data.value === "Insertion Sort") {
            setAlgorithm({ name: "Insertion Sort", func: InsertionSort })
        } else if (data.value === "Selection Sort") {
            setAlgorithm({ name: "Selection Sort", func: SelectionSort })
        } else {
            setAlgorithm({ name: "Bubble Sort", func: BubbleSort })
        }

        getOriginalState()
    }
    return (
        <>
            Select sorting algorithm: &nbsp;
            <Dropdown
                text={algorithm.name}
                icon='dropdown'
                floating
                labeled
                disabled={onGoing && true}
                className='icon'
            >
                <Dropdown.Menu>
                    <Dropdown.Header content='Algorithms' />
                    {options.map((option) => (
                        <Dropdown.Item onClick={selectAlgorithm} {...option} />
                    ))}

                </Dropdown.Menu>
            </Dropdown>

            <Backdrop>
                <Chart array={arrayState} highlightIndex={currentIndex} comparisonIndex={comparisonIndex}
                    onGoing={onGoing} onPause={pause} />
                <LegendBar>
                    <Legend color="green"><span>Current</span></Legend>
                    <Legend><span>Default</span></Legend>
                    <Legend color="yellow"><span>Comparison</span></Legend>

                </LegendBar>
            </Backdrop>
            <Segment padded inverted color='green' >
                <Playbar getOriginalState={getOriginalState} getSortedState={getSortedState} isSorted={isSorted}
                    onPause={pause} onGoing={onGoing} decreaseSpeed={decreaseSpeed} increaseSpeed={increaseSpeed}
                    generateNewArray={generateNewArray} sortArray={sortRun} pauseSorting={pauseSorting}></Playbar>
            </Segment>

        </>
    );
}

export default DynamicChart

    // < div className = "button-area" >
    //     <Button.Group icon>

    //         <Button type="reset" onClick={resetState} color="green" style={{ marginTop: '1rem' }} ><Icon name='refresh' /></Button>
    //         <Button type="submit" onClick={getOriginalState} color="green" style={{ marginTop: '1rem' }}><Icon name='fast backward' /></Button>

    //         <Button type="submit" onClick={decreaseSpeed} color="green" style={{ marginTop: '1rem' }} disabled={isSorted}><Icon name='step backward' /></Button>

    //         {!onGoing ? <Button type="submit" onClick={sortArray} color="green" style={{ marginTop: '1rem' }} disabled={isSorted || onGoing}><Icon name='play' /></Button> :
    //             <Button type="submit" onClick={pauseSorting} color="red" style={{ marginTop: '1rem' }} ><Icon name='pause' /></Button>}

    //         <Button type="submit" onClick={increaseSpeed} color="green" style={{ marginTop: '1rem' }} disabled={isSorted}><Icon name='step forward' /></Button>
    //         <Button type="submit" onClick={getSortedState} color="green" style={{ marginTop: '1rem' }} disabled={isSorted}><Icon name='fast forward' /></Button>

    //     </Button.Group>
    //         </div >

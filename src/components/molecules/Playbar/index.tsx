import * as React from 'react'
import { Button, Icon, Popup } from 'semantic-ui-react'
import './style.css'

interface PlaybarProps {
    isSorted: boolean;
    onGoing: boolean;
    onPause: boolean;
    getOriginalState: () => any;
    decreaseSpeed: () => any;
    generateNewArray: () => any;
    sortArray: () => any;
    increaseSpeed: () => any;
    getSortedState: () => any;
    pauseSorting: () => any;

}

const Playbar: React.FC<PlaybarProps> = ({
    isSorted, onPause, onGoing, getOriginalState,
    decreaseSpeed, increaseSpeed, sortArray,
    generateNewArray, getSortedState, pauseSorting }) => {
    return (

        <div className="button-area">
            <Button.Group icon>
                <Popup
                    trigger={<Button type="reset" size="large" onClick={generateNewArray} color="green"  ><Icon name='refresh' /></Button>}
                    content="Generate a new array."
                    basic
                />
                <Popup
                    trigger={<Button type="submit" size="large" onClick={getOriginalState} color="green" ><Icon name='fast backward' /></Button>}
                    content="Go back to the unsorted state."
                    basic
                />

                <Popup
                    trigger={<Button type="submit" size="large" onClick={decreaseSpeed} color="green" disabled={isSorted}>x/2</Button>}
                    content="Decrease sorting speed."
                    basic
                />
                {!onGoing ? <Popup
                    trigger={<Button type="submit" size="massive" onClick={sortArray} color="green" disabled={isSorted || onGoing}><Icon name='play' /></Button>}
                    content="Run sorting."
                    basic
                /> : <Popup
                        trigger={<Button type="submit" size="massive" onClick={() => pauseSorting()} color="red"  ><Icon name='pause' /></Button>}
                        content="Pause sorting."
                        basic
                    />}

                <Popup
                    trigger={<Button type="submit" size="large" onClick={increaseSpeed} color="green" disabled={isSorted}>2x</Button>}
                    content="Increase sorting speed."
                    basic
                />
                <Popup
                    trigger={<Button type="submit" size="large" onClick={getSortedState} color="green" disabled={isSorted}><Icon name='fast forward' /></Button>}
                    content="Finish sorting."
                    basic
                />


            </Button.Group>
        </div>

    );
}

export default Playbar

//     < Dropdown
// text = "Algorithms"
// icon = "filter"
// className = 'icon'
// floating
// labeled
// button

// style = {{ marginTop: '1rem', background: '#21ba45', color: '#fff', alignSelf: "flex-start" }}
//                 >
//     <Dropdown.Menu>
//         {/* <Dropdown.Header icon="chevron"></Dropdown.Header> */}
//         <Dropdown.Item>Bubble Sort</Dropdown.Item>

//     </Dropdown.Menu>
//                 </Dropdown >

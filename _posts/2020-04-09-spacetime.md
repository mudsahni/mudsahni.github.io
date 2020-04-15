---
layout: post
title: spacetime
---


Conway's Game of Life
===
Game of Life is a cellular automation devised by British Mathematician John Conway in 1970. He passed away a couple of days ago (at the time of writing).

The idea behind Conway's game of life is to derive complexity out of simplicity. We want to input simple rules for the game mechanics and observe how the system changes and evolves with those rules. 

There's a lot of history and theory about cellular automation and even specifically Conway's game of life, most of it way too advanced for me to get into, so I'd like to just dive into my implementation of it.

## Description
The game is a zero-player game, which means that the evolution of the game is determined by it's initial state with no inputs being required by any external source. 

The game of life universe is a **two-dimensional grid** with **live** and **dead** 'cells'. Imagine a matrix of 1's and 0's to substitute for live and dead cells respectively. 

```python
import numpy as np

live = 0.1 # 10% of cells are alive

# generating a grid with random positions for
# live and dead cells
grid = np.random.choice(a=2, size=(10,10),
                        replace=True,
                        p = [1-live, live])

print(grid)
```

Output:
```python
[[0 0 0 0 0 0 0 0 0 0]
 [0 1 0 0 0 0 0 0 0 0]
 [1 1 0 0 0 0 0 0 0 1]
 [0 0 0 1 0 0 0 0 0 0]
 [0 0 1 0 0 1 0 0 0 0]
 [0 0 0 0 0 0 0 0 0 0]
 [0 0 0 0 0 0 0 0 0 0]
 [0 1 0 0 0 0 1 0 0 0]
 [0 0 0 0 0 0 0 0 0 0]
 [0 0 1 0 0 0 0 1 0 0]]
```

### Sequence:

- Iterate through every element of the matrix repeatedly
- Examine adjoining eight neighbours for every element
- Apply rules of propogation to subset of element + eight neighbours


### Rules of propogation:
- Any live cell with two or three neighbors survives to the next generation.
- Any dead cell with three live neighbours becomes a live cell, as if by reproduction.
- Any live cell with zero or one neighbours dies (dead cell remains dead), as if by underpopulation.
- Any live cell with more than three neighbours dies (dead cell remains dead), as if by overpopulation.

## Implementation
Let's start by creating a class for the grid.

### Grid
```python

import numpy as np

class Grid(object):
    """
    Implementation of the grid where the live and dead cells sit.
    """
    def __init__(self, size: int, prob: float):
        """
            Arguments:
                size - size of the matrix (n x n) [int]
                prob - probability of live cells [flaot]
        """
        self.size = size
        self.prob = prob
        self.state = self.generate_grid(self.size, self.prob)

    @staticmethod
    def generate_grid(size: int, prob: float):
        return np.random.choice(a=2, size=(size,size),
                                replace=True, p=[1-prob, prob])

    def set_state(self, grid):
        """
            Method which sets the grid to a custom grid.
            Arguments:
                grid - numpy array
        """
        self.state = grid

    @staticmethod
    def pretty_print(self, state):
        """
        Prints the grid with hashes and gaps.
            Argument:
                state - numpy array
        """
        print("-" * state.shape[0] * 4)
        for row in range(len(state)):
            temp = []
            for col in range(len(state[row])):
                if state[row][col] == 1:
                    temp.append(" # ")
                else:
                    temp.append("   ")
            print(f"   | {''.join(temp)} |   ")
        print("-" * state.shape[0] * 4)
```

Let's run some tests for the Grid class.

```python
# setting a seed for consistency
np.random.seed(42)

G = Grid(10, 0.1)
print(G)
```
Output

```python
[[0 1 0 0 0 0 0 0 0 0]
 [0 1 0 0 0 0 0 0 0 0]
 [0 0 0 0 0 0 0 0 0 0]
 [0 0 0 1 1 0 0 0 0 0]
 [0 0 0 1 0 0 0 0 0 0]
 [1 0 1 0 0 1 0 0 0 0]
 [0 0 0 0 0 0 0 0 0 1]
 [0 0 0 0 0 0 0 0 0 0]
 [0 0 0 0 0 0 0 0 0 0]
 [0 0 0 0 0 0 0 0 0 0]]
```

We can also use the grid's pretty print method:

```python
G.pretty_print(G.state)
```

Output

```
 ----------------------------------------
   |     #                          |
   |     #                          |   
   |                                |   
   |           #  #                 |   
   |           #                    |   
   |  #     #        #              |   
   |                             #  |   
   |                                |   
   |                                |   
   |                                |   
----------------------------------------
```

### Sliding Window
Next we need to look at creating a sliding window which goes across each element of the matrix, and takes the sum of the adjacent eight neighbours of the element.

```python
# sliding window: the idea is to have each of the 
# neighbouring eight elements to be valid
# and middle selected element to not contribute to the total
window = np.array([[1, 1, 1], [1, 0, 1], [1, 1, 1]])
# sample matrix, the element we are looking at is the 1
# in the second row second column
sample_matrix = np.array([[1,1,0],[0,1,0],[0,0,0]])

# expected = 2
np.sum(sample_matrix * window)
```
Output
```python
2
```
Great! Now, let's extend the grid class and create a class for the game itself.

### Circular World
The Grid is a circular world, which means the last elements are connected to the first elements. There are many ways to do this, I've done in a very cumbersome and inelegant way: adding a boundaries to first and last row, column, and edges each.

Eg. a 10x10 matrix will become a 12x12 matrix. Let's see how this will look like.

```python
def add_boundary(state):
    # initialize an empty matrix
    empty_state = np.zeros((size+2, size+2))

    # adding last element to first element
    empty_state[0, 0] = state[-1, -1]
    # adding first element to last element
    empty_state[-1, -1] = state[0, 0]
    # adding first element of last row to last element of first row
    empty_state[0, -1] = state[-1, 0]
    # adding last element of first row to first element of last row
    empty_state[-1, 0] = state[0, -1]
    # adding last row to first row
    empty_state[0, 1:-1] = state[-1,:]
    # adding first row to last row
    empty_state[-1, 1:-1] = state[0,:]
    # adding first column to last column
    empty_state[1:-1, -1] = state[:, 0]
    # adding last column to first column
    empty_state[1:-1, 0] = state[:, -1]
    # adding matrix to remaining places
    empty_state[1:-1, 1:-1] = state
    
    state = empty_state
    return state

state = np.random.choice(2, (10,10), True, [0.5,0.5])
print(state)
```

Output
```python
[[0 1 1 1 0 0 0 1 1 1]
 [0 1 1 0 0 0 0 1 0 0]
 [1 0 0 0 0 1 0 1 1 0]
 [1 0 0 1 1 1 0 0 1 0]
 [0 0 0 1 0 1 0 1 1 0]
 [1 1 1 1 1 1 0 0 0 0]
 [0 0 1 0 0 1 0 1 0 1]
 [1 0 0 1 1 1 1 0 0 0]
 [1 1 0 0 0 0 1 1 1 0]
 [0 1 1 1 1 0 1 0 0 0]]
 ```

Let's add the boundaries now:
```python
print(add_boundary(state))
```

Output
```python
[[0. 0. 1. 1. 1. 1. 0. 1. 0. 0. 0. 0.]
 [1. 0. 1. 1. 1. 0. 0. 0. 1. 1. 1. 0.]
 [0. 0. 1. 1. 0. 0. 0. 0. 1. 0. 0. 0.]
 [0. 1. 0. 0. 0. 0. 1. 0. 1. 1. 0. 1.]
 [0. 1. 0. 0. 1. 1. 1. 0. 0. 1. 0. 1.]
 [0. 0. 0. 0. 1. 0. 1. 0. 1. 1. 0. 0.]
 [0. 1. 1. 1. 1. 1. 1. 0. 0. 0. 0. 1.]
 [1. 0. 0. 1. 0. 0. 1. 0. 1. 0. 1. 0.]
 [0. 1. 0. 0. 1. 1. 1. 1. 0. 0. 0. 1.]
 [0. 1. 1. 0. 0. 0. 0. 1. 1. 1. 0. 1.]
 [0. 0. 1. 1. 1. 1. 0. 1. 0. 0. 0. 0.]
 [1. 0. 1. 1. 1. 0. 0. 0. 1. 1. 1. 0.]]
```

Perfectly wrapped! Let's move on to creating a class for the game itself.

### Game
We'll create a class for the game and use the Grid class to extend it.

```python
class Life(Grid):
    """
    Implementation of class for the Game of Life.
    """
    def __init__(self, size: int, prob: float):
        # passing variables to the super class (Grid)
        super().__init__(size, prob)
        # sliding window
        self.window = np.array([[1, 1, 1], [1, 0, 1], [1, 1, 1]])

    def add_boundary(self):
        """
        Method to wrap the first and last rows, columns, and edges
        around eachother.
        """
        self.empty_state = np.zeros((self.size+2, self.size+2))

        # adding last element to first element
        self.empty_state[0, 0] = self.state[-1, -1]
        # adding first element to last element
        self.empty_state[-1, -1] = self.state[0, 0]
        # adding first element of last row to last element of 
        first row
        self.empty_state[0, -1] = self.state[-1, 0]
        # adding last element of first row to first element of 
        last row
        self.empty_state[-1, 0] = self.state[0, -1]
        # adding last row to first row
        self.empty_state[0, 1:-1] = self.state[-1,:]
        # adding first row to last row
        self.empty_state[-1, 1:-1] = self.state[0,:]
        # adding first column to last column
        self.empty_state[1:-1, -1] = self.state[:, 0]
        # adding last column to first column
        self.empty_state[1:-1, 0] = self.state[:, -1]
        # adding matrix to remaining places
        self.empty_state[1:-1, 1:-1] = self.state
        
        self.state = self.empty_state


    def change_state(self, total: int):
        """
        Method to implement game rules. The rules can be compressed
        to the following:

        If total == 2 or total == 3:
            return 1
        else:
            return 0

            Argument:
                total - total sum of the sliding window [int]
            Output:
                returns 1 or 0 to signifiy cell state
        """
        if total == 2 or total == 3:
            return 1
        else:
            return 0

    def update_grid_state(self):
        """
        Method to update each element of the grid.
        """
        # initialize an empty array
        self.new_state = np.zeros((self.size, self.size))
        # rows and columns of the grid
        height, width = self.state.shape
        # iterating through the rows
        for rowIDX in range(1, height - 1):
            # iterating through the columns
            for colIDX in range(1, width - 1):
                # input the changed state result
                self.new_state[rowIDX - 1, colIDX - 1] = \
                self.change_state(
                np.sum(self.state[rowIDX - 1:rowIDX + 2,
                colIDX - 1: colIDX + 2]*self.window))
        # replacing the grid state
        self.set_state(self.new_state.copy())
        # add boundaries to the grid state
        self.add_boundary()          
        return self.new_state

    def save_series(self, iterations: int):
        """
        Method to iterate through n iterations,
        updating the grid state at each iteration.
        
            Argument:
                iterations - number of state changes [int]
        """
        # open an empty list
        self.series = []
        # add boundary to initial state
        self.add_boundary()
        # append changed state to empty array (without the boundaries)
        self.series.append(self.state[1:-1, 1:-1])
        # iterations
        for i in range(iterations):
            # update grade state
            self.update_grid_state()
            # append to series
            self.series.append(self.state[1:-1, 1:-1])
        

```
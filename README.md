# Treasure Hunt Simulator

This project is a treasure hunt simulator that allows you to track the movements and treasure collections made by adventurers on a map. The project is written in TypeScript and uses Jest for unit testing.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)

## Installation

To install the project dependencies, run the following command:

```bash
yarn
```

## Usage

To run the simulator, use the following command:

```bash
yarn start input.txt output.txt
```

- `input.txt`: The input file containing the map data, mountains, treasures, and adventurers.
- `output.txt`: The output file where the simulation results will be written.

### Example Input File

```
C - 10 - 10
M - 1 - 1
M - 2 - 2
M - 3 - 3
M - 4 - 4
M - 5 - 5
M - 6 - 6
M - 7 - 7
M - 8 - 8
M - 9 - 9
T - 0 - 0 - 3
T - 1 - 2 - 2
T - 2 - 4 - 1
T - 3 - 6 - 4
T - 4 - 8 - 2
T - 5 - 9 - 1
T - 6 - 7 - 3
T - 7 - 5 - 2
T - 8 - 3 - 1
T - 9 - 1 - 2
A - Indiana - 0 - 0 - E - AADADAGGA
A - Lara - 1 - 1 - S - AADADAGGA
A - Jack - 2 - 2 - W - AADADAGGA
A - Alice - 3 - 3 - N - AADADAGGA
A - Bob - 4 - 4 - E - AADADAGGA
A - Charlie - 5 - 5 - S - AADADAGGA
A - Dave - 6 - 6 - W - AADADAGGA
A - Eve - 7 - 7 - N - AADADAGGA
A - Frank - 8 - 8 - E - AADADAGGA
A - Grace - 9 - 9 - S - AADADAGGA
```

## Tests

To run the unit tests, use the following command:

```bash
yarn test
```

This will execute all the unit tests defined in the `tests` directory and display the results.

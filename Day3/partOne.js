#!/usr/bin/env node

const totalNumber = 289326;
const numberToFind = 289326;

let spiral = {
  '0': [1]
};

let numberOfSteps = 1;
let stepCount = 1;
let direction = 'r';
let currentCoordinates = { x: 0, y: 0 };

const changeDirection = () => {
  if (direction === 'r') {
    direction = 'u';
  } else if (direction === 'u') {
    direction = 'l';
    numberOfSteps += 1;
  } else if (direction === 'l') {
    direction = 'd';
  } else if (direction === 'd') {
    direction = 'r';
    numberOfSteps += 1;
  }

  stepCount = numberOfSteps;
};

for (let i = 2; i <= totalNumber; i++) {
  if (direction === 'r') {
    currentCoordinates.x += 1;
    spiral[`${currentCoordinates.y}`] = [...spiral[`${currentCoordinates.y}`], i];
  }

  if (direction === 'u') {
    currentCoordinates.y -= 1;

    if (!Boolean(spiral[`${currentCoordinates.y}`])) {
      spiral[`${currentCoordinates.y}`] = [];
    }

    spiral[`${currentCoordinates.y}`] = [...spiral[`${currentCoordinates.y}`], i];
  }

  if (direction === 'l') {
    currentCoordinates.x -= 1;
    spiral[`${currentCoordinates.y}`] = [i, ...spiral[`${currentCoordinates.y}`]];
  }

  if (direction === 'd') {
    currentCoordinates.y += 1;

    if (!Boolean(spiral[`${currentCoordinates.y}`])) {
      spiral[`${currentCoordinates.y}`] = [];
    }

    spiral[`${currentCoordinates.y}`] = [i, ...spiral[`${currentCoordinates.y}`]];
  }

  stepCount -= 1;
  if (stepCount === 0) {
    changeDirection();
  }
}

let longestRowLength = 0;
Object.keys(spiral).forEach(key => {
  spiral[key].forEach(number => {
    if (spiral[key].length > longestRowLength) {
      longestRowLength = spiral[key].length;
    }
  });
});

Object.keys(spiral).forEach(key => {
  spiral[key].forEach(number => {
    if (spiral[key].length < longestRowLength) {
      spiral[key] = ['EMPTY', ...spiral[key]];
    }
  });
});

let rowIndex;
Object.keys(spiral).forEach(key => {
  spiral[key].forEach(number => {
    if (number === numberToFind) {
      rowIndex = key;
    }
  });
});

const rowIndexAsNum = Math.abs(parseInt(rowIndex, 10));
const columnIndex = spiral[rowIndex].findIndex(number => number === numberToFind);
const numberOneIndex = spiral['0'].findIndex(number => number === 1);

console.log('Number of steps to 1:', Math.abs(columnIndex - numberOneIndex) + rowIndexAsNum);
#!/usr/bin/env node

const input = [4, 1, 15, 12, 0, 9, 9, 5, 5, 8, 7, 3, 14, 5, 12, 3];

let previousIterations = [];

const findLargestIndex = arr => {
  return arr.reduce((largestIndex, item, index) => {
    if (index > 0) {
      if ((item > arr[index - 1]) && (item > arr[largestIndex])) {
        return index;
      }
    }

    return largestIndex;
  }, 0);
}

const addToIterations = arr => {
  previousIterations.push(arr.join());
}

const hasAlreadyBeenSeen = arr => {
  return previousIterations.includes(arr.join());
};

let iterationCount = 0;

const reallocate = arr => {
  const largestIndex = findLargestIndex(arr);
  const numberAtIndex = arr[largestIndex];

  arr[largestIndex] = 0;

  let currentIndex = largestIndex + 1;
  for (let i = 0; i < numberAtIndex; i++) {
    if (arr[currentIndex] === undefined) {
      currentIndex = 0;
    }

    arr[currentIndex] += 1;

    currentIndex += 1;
  }

  iterationCount += 1;

  if (hasAlreadyBeenSeen(arr)) {
    console.log(iterationCount);
  } else {
    addToIterations(arr);
    reallocate(arr);
  }
}

reallocate(input);
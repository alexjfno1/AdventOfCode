#!/usr/bin/env node

const input = [
  [5, 9, 2, 8],
  [9, 4, 7, 3],
  [3, 8, 6, 5]
];

const result = input.reduce((sum, row) => {
  const largest = Math.max(...row);
  const smallest = Math.min(...row);
  const difference = largest - smallest;

  return sum + difference;
}, 0);

console.log(result);

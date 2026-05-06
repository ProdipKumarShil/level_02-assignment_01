const filterEvenNumbers = (arr: number[]): number[] => {
  return arr.filter((num: number) => num % 2 == 0)
}

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))


/**
 * Problem - 02
 */

const reverseString = (funcStr: string): string => {
  return funcStr.split('').reverse().join('')
}

console.log(reverseString('prodip'))
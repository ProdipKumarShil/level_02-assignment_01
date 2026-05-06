const filterEvenNumbers = (arr: number[]): number[] => {
  return arr.filter((num: number) => num % 2 == 0)
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))
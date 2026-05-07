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

// console.log(reverseString('prodip'))

/**
 * Problem - 03
 */

type StringOrNumber = string | number
const checkType = (param: StringOrNumber): string => {
  if(typeof param === 'string'){
    return 'String'
  } else {
    return 'Number'
  }
}

// console.log(checkType(23))
// console.log(checkType('is'))

/**
 * Problem - 06
 */

class Person{
  name: string;
  age: number

  constructor(name: string, age: number){
    this.name = name,
    this.age = age
  }
}

class Student extends Person{
  grade: string;

  constructor(name: string, age: number, grade: string){
    super(name, age)
    this.grade = grade
  }
  getDetails (){
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
  }
}

// const student = new Student("Alice", 20, "A");
// const student1 = new Student("saber", 55, "C");

// console.log(student.getDetails())


/**
 * Problem - 07
 */

const getIntersection = (param1: number[], param2: number[]): number[] => {
  let arr: number[] = []
  
  param1.map((num: number) => {
    param2.map((num2: number) => {
      if(num === num2){
        arr.push(num)
      }
    })
  })

  return arr
}

console.log(getIntersection([9, 8, 7, 3, 1], [0, 9, 4, 7, 8]))
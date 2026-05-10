const filterEvenNumbers = (arr: number[]): number[] => {
  return arr.filter((num: number) => num % 2 == 0)
}

/**
 * Problem - 02
 */

const reverseString = (funcStr: string): string => {
  return funcStr.split('').reverse().join('')
}

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

/**
 * Problem - 04
 */

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

interface BookWithReadStatus extends Book {
  isRead: boolean;
}

const toggleReadStatus = (book: Book): BookWithReadStatus => {
  return {
    ...book,
    isRead: true,
  };
};

/**
 * Problem - 05
 */

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

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

// Palindrome
const Palindrome = (str) => {
  const isPalindrome = str.split("").reverse().join("").toLowerCase().charAt(0).toUpperCase() + str.slice(1)
  console.log(str == isPalindrome)
}
Palindrome("Radar")
Palindrome("Malam")
Palindrome("Kasur ini rusak")
Palindrome("Ibu Ratna antar ubi")
Palindrome("Malas")
Palindrome("Makan nasi goreng")
Palindrome("Balonku ada lima")

// Leap Year
function leapYear(stYear, endYear) {
  const yearRange = []
  for (let i = stYear; i <= endYear; i++) {
    yearRange.push(i)
  }
  const newArr = []
  yearRange.forEach((year) => {
    if (tsleapYear(year)) newArr.push(year)
  })
  return newArr
}

function tsleapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
    return year
  } else {
    return false
  }
}
console.log(leapYear(1900, 2020))

// Reverse Words
const reverseStr = (str) => {
  let arrayStr = str.split(" ")

  let arrayTemp = []
  for (let i = 0; i < arrayStr.length; i++) {
    let arrSplit = arrayStr[i].split("").reverse()
    arrayTemp.push(arrSplit)
  }

  let arrayTemp2 = []
  for (let i = 0; i < arrayTemp.length; i++) {
    const element = arrayTemp[i]
    if (element[4] != undefined) {
      element[4] = element[4].toLowerCase()
      element[0] = element[0].toUpperCase()
    }
    arrayTemp2.push(element)
  }

  arrayTemp2.forEach((e) => console.log(e.join("")))
}

reverseStr("I am A Great Human")

// Nearest Fibonacci
const Arr = [15, 1, 3]
const fibonacci = (data) => data.reduce((a, b) => a + b) + 2
console.log(fibonacci(Arr))

// FizzBuzz
const fizzBuzz = (num) => {
  let arrayTemp = []
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) arrayTemp.push("Fizz Buzz")
    else if (i % 3 === 0) arrayTemp.push("Fizz")
    else if (i % 5 === 0) arrayTemp.push("Buzz")
    else arrayTemp.push(i.toString())
  }
  console.log(arrayTemp)
}

fizzBuzz(3)
fizzBuzz(5)
fizzBuzz(15)

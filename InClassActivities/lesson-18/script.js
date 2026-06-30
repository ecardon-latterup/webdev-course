function multiplyNumbers(a, b) {
  return a * b
}

const num1 = 14
const num2 = 20
const num3 = 34
const num4 = 87

const sum1 = multiplyNumbers(num1, num2)
const sum2 = multiplyNumbers(num2, num3)
const sum3 = multiplyNumbers(num3, num4)

console.log(`${num1} x ${num2} = ${sum1}`)
console.log(`${num2} x ${num3} = ${sum2}`)
console.log(`${num3} x ${num4} = ${sum3}`)
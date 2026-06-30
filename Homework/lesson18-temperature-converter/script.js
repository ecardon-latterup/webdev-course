function convertToC(temp) {
  return (temp -32) * 5/9
}

const temp1 = 100
const temp2 = 350
const temp3 = 32

const cTemp1 = convertToC(temp1)
const cTemp2 = convertToC(temp2)
const cTemp3 = convertToC(temp3)

console.log(`${temp1}F is the same as ${cTemp1}C`)
console.log(`${temp2}F is the same as ${cTemp2}C`)
console.log(`${temp3}F is the same as ${cTemp3}C`)
console.log("If I use toFixed() so I only have 2 digits after the decimal, those conversions look like...")
console.log(`${temp1}F is the same as ${cTemp1.toFixed(2)}C`)
console.log(`${temp2}F is the same as ${cTemp2.toFixed(2)}C`)
console.log(`${temp3}F is the same as ${cTemp3.toFixed(2)}C`)
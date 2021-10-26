const fs = require("fs")

let rawdata = fs.readFileSync("./json-manipulation/data.json")
let data = JSON.parse(rawdata)

// console.log(data)
const no1 = (input) => {
  const items = data.filter((a) => a.placement.name.match(input))
  console.log({ items })
}
no1("Meeting Room")

const no2 = (input) => {
  const devices = data.filter((a) => a.type.match(input)).map((b) => b.name)
  console.log({ devices })
}
no2("electronic")

const no3 = (input) => {
  const furniture = data.filter((a) => a.type.match(input)).map((b) => b.name)
  console.log({ furniture })
}
no3("furniture")

const no4 = (input) => {
  input = new Date(input).toLocaleDateString()
  const dateData = data.filter((a) => new Date(a.purchased_at * 1000).toLocaleDateString() === input)
  console.log({ dateData })
}
no4("2020-01-16")

const no5 = (input) => {
  const brownColor = data.filter((a) => a.tags.includes(input))
  console.log({ brownColor })
}
no5("brown")

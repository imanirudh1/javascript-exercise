// function getBaseSpeed() {
//   console.log('Base Speed Stat is : ', this.baseSpeed)
// }

// const pikachu = {
//   baseSpeed: 90,
//   getBaseSpeed: getBaseSpeed,
// }

// pikachu.getBaseSpeed()

// function getBaseSpeed() {
//   console.log('Base Speed Stat is : ', this.baseSpeed)
// }

// var pikachu = {
//   baseSpeed: 90,
//   getBaseSpeed: getBaseSpeed,
// }

// var raichu = {
//   baseSpeed: 110,
//   pikachu: pikachu,
// }

// raichu.pikachu.getBaseSpeed()

// const array1 = [1, 4, 9, 16]
// const ar = [1, 2, 3]
// // pass a function to map
// const map1 = array1.map((x, index, arr) => {
//   console.log('array1', array1)
//     console.log(arr)

// })

// console.log(map1)

// const source = [-3, -2, -1, 0, 1, 2, 3, 4, 5]
// source
//   .filter((n) => n >= 0)
//   .map((n, index, arr) => {
//     console.log(arr)
//     console.log('src', source)
//     // arr contains only non-negative numbers
//     // here you may have some logic that rely on it
//     return n
//   })
// console.log(source)

function getBaseSpeed() {
  console.log('Base Speed Stat is : ', this.baseSpeed)
}

var pikachu = {
  baseSpeed: 90,
  getBaseSpeed: getBaseSpeed,
}

var baseSpeedFunction = pikachu.getBaseSpeed
var baseSpeed = 50
baseSpeedFunction()
// Output
// Base Speed Stat is : 50

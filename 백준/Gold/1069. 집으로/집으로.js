const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()

const [X, Y, D, T] = input.split(' ').map(Number)

let dist = (X ** 2 + Y ** 2) ** 0.5

let jump = Math.floor(dist / D)

if (dist >= D) {
  const c1 = T * jump + (dist - (D * jump))
  const c2 = dist
  const c3 = T * (jump + 1)
  
  console.log(Math.min(c1, c2, c3))

} else {
  const c1 = dist
  const c2 = T + (D - dist)
  const c3 = T * 2

  console.log(Math.min(c1, c2, c3))
}


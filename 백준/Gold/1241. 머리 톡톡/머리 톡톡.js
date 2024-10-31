const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => parseInt(str));

const N = +input[0]

const check = new Array(1000001).fill(0)
const arr = new Array(N + 1).fill(0)

for (let i = 1; i < N + 1; i++) {
	check[input[i]] += 1
	arr[i] = input[i]
}

const div = (num, ans) => {
	for (let idx = 1; idx * idx <= num; idx++) {
		if (num % idx === 0) {
			ans += idx !== num / idx ? check[num / idx] + check[idx] : check[idx]
		}
	}
	
	return ans
}

arr.slice(1).map(el => {
	const answer = div(el, -1)
	console.log(answer)
})
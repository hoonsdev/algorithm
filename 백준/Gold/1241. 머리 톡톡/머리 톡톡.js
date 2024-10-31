function solution(input) {
	const N = +input[0]

	const check = Array.from({length: 1000001}, () => [])
	const arr = new Array(N + 1).fill(0)

	for (let i = 1; i < N + 1; i++) {
		check[input[i]].push(i)
		arr[i] = input[i]
	}

	arr.slice(1).map(el => {
		let answer = 0
		const res = div(el)
		for (let n of res) {
			answer += check[n].length
		}
		answer -= 1
		console.log(answer)
	})
}

function div(num) {
	let result = []
	for (let idx = 1; idx * idx <= num; idx++) {
		if (num % idx === 0) {
			result.push(idx)
			if (idx !== num / idx) result.push(num / idx)
		}
	}
	return result
}

const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on('line', (line) => {
	input.push(line)
})

rl.on('close', () => {
	solution(input)
	process.exit()
})
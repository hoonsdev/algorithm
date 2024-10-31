function solution(input) {
	const N = +input[0]

	const check = new Array(1000001).fill(0)
	const arr = new Array(N + 1).fill(0)

	for (let i = 1; i < N + 1; i++) {
		check[input[i]] += 1 // 해당 수가 몇개 있는지 체크
		arr[i] = input[i] // 각 사람에 해당하는 수
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
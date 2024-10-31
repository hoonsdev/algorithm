function dijkstra(start, end, graph) {
	const heap = []
	heap.push([0, start])
	const weights = new Array(graph.length + 1).fill(Infinity)
	weights[start] = 0

	while (heap.length) {
		heap.sort((a, b) => a[0] - b[0])
		const [weight, node] = heap.shift()
		if (weight > weights[node]) continue

		graph[node].map(([n, w]) => {
			const W = weight + w
			if (weights[n] > W) {
				weights[n] = W
				heap.push([W, n])
			}
		})
	}

	return weights[end]
}

function solution(input) {
	const [N, M] = input[0].split(' ').map(Number)
	const graph = Array.from({length: N + 1}, () => [])
	for (let i = 1; i < N; i++) {
		const [s, e, w] = input[i].split(' ').map(Number)
		graph[s].push([e, w])
		graph[e].push([s, w])
	}

	for (let i = N; i < N + M; i++) {
		const [n1, n2] = input[i].split(' ').map(Number)
		const res = dijkstra(n1, n2, graph)
		console.log(res)
	}
}

const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

const input = []

rl.on('line', (line) => {
	input.push(line)
})

rl.on('close', () => {
	solution(input)
	process.exit()
})
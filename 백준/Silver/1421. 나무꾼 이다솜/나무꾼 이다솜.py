N, C, W = map(int, input().split())
trees = [int(input()) for _ in range(N)]

result = 0

for i in range(1, max(trees) + 1):
    cost = 0

    for tree in trees:
        tree_count = tree // i
        slice_count = tree_count - 1

        if tree % i > 0:
            slice_count += 1

        benefit = tree_count * W * i - slice_count * C
        if benefit > 0:
            cost += benefit

    result = max(result, cost)

print(result)

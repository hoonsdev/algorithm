def dfs(b, i, d):
    # 아무 문제 없이 마지막 부모 노드까지 탐색 했다면 1
    if d == 0:
        return 1

    # 만약 부모 노드가 0이면 자식이 1 이 있는 순간 조건 만족 x
    if b[i] == '0':
        if b[i - 2 ** (d - 1)] == '1' or b[i + 2 ** (d - 1)] == '1':
            return 0

    # depth 가 남아 있으니 다음 트리 레벨로 가서 dfs 돌림
    left = dfs(b, i - 2 ** (d - 1), d - 1)
    right = dfs(b, i + 2 ** (d - 1), d - 1)

    # 왼 오 자식 트리에 대해서 조건 만족하면 1 하나라도 안되면 0
    return left and right


def solution(numbers):
    answer = []
    # 이진수로 바꾼 다음에 그걸 이진트리로 구현할 수 있나를 봐야할듯?
    # 더미면 0, 더미 아니면 1
    for i in numbers:
        b_num = bin(i)[2:]  # 42 -> 101010
        # 101010 -> 6자리 -> +1하면 7 -> 포화 이진트리의 depth는 현재 트리보다 더 큰 트리여야 함
        # 포화 이진 트리는 10 100 1000 이런식으로 구성이 됨
        nodes = bin(len(b_num) + 1)[2:]  # 7 -> 111 -> 최소한 1000 이 되는 포화 이진트리 필요

        if '1' in nodes[1:]:
            dummies = (1 << len(nodes)) - int(nodes, 2)
            b_num = '0' * dummies + b_num

        # dfs(탐색 트리, 탐색 위치, 깊이)
        result = dfs(b_num, len(b_num) // 2, len(bin(len(b_num) + 1)[2:]) - 2)
        answer.append(result)

    return answer

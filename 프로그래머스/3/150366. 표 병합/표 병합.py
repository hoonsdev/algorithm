answer = []

parent = [[(r, c) for c in range(51)] for r in range(51)]
table = [['EMPTY'] * 51 for _ in range(51)]


# 해당 좌표의 조상 노드가 무엇인지
def find(r, c):
    if (r, c) == parent[r][c]:
        return parent[r][c]
    pr, pc = parent[r][c]
    parent[r][c] = find(pr, pc)
    return parent[r][c]


# 부모를 일치 시키기
def union(r1, c1, r2, c2):
    parent[r2][c2] = parent[r1][c1]


def merge(r1, c1, r2, c2):
    r1, c1 = find(r1, c1)
    r2, c2 = find(r2, c2)

    if (r1, c1) == (r2, c2):
        return

    v1 = table[r1][c1]

    if v1 == 'EMPTY':  # 1번 값 없고 2번 값만 있는 경우
        union(r2, c2, r1, c1)
    else:
        union(r1, c1, r2, c2)


def unmerge(r, c):
    pr, pc = find(r, c)
    msg = table[pr][pc]

    merge_list = list()
    for ar in range(51):
        for ac in range(51):
            apr, apc = find(ar, ac)
            if (apr, apc) == (pr, pc):
                merge_list.append((ar, ac))

    for ar, ac in merge_list:
        parent[ar][ac] = (ar, ac)
        table[ar][ac] = "EMPTY" if (ar, ac) != (r, c) else msg


def solution(commands):
    # command에 따라 뭘 할지 결정
    for command in commands:
        cmd, *rest = command.split()
        if cmd == 'UPDATE':
            if len(rest) == 3:  # 특정 셀 선택 후 업데이트
                r, c, v = rest
                pr, pc = find(int(r), int(c))
                table[pr][pc] = v
            else:  # 해당 값을 가지는 모든 값 업데이트
                v1, v2 = rest
                for i in range(len(table)):
                    for j in range(len(table[i])):
                        if table[i][j] == v1:
                            table[i][j] = v2
        elif cmd == 'MERGE':
            r1, c1, r2, c2 = map(int, rest)
            merge(r1, c1, r2, c2)
        elif cmd == 'UNMERGE':
            r, c = map(int, rest)
            unmerge(r, c)
        else:
            r, c = map(int, rest)
            tr, tc = find(r, c)
            answer.append(table[tr][tc])

    return answer

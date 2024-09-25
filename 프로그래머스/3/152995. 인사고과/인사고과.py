def solution(scores):
    answer = 0

    my_attitude, my_peer = scores[0]
    my_total = my_attitude + my_peer

    scores.sort(key=lambda x: (x[0], -x[1]), reverse=True)
    max_peer = 0

    for a, b in scores:
        if my_attitude < a and my_peer < b:
            return -1

        if b >= max_peer:
            max_peer = b
            if my_total < a + b:
                answer += 1

    return answer + 1
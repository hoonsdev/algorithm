ss = input()
stack = []
cnt = 0

for i in range(len(ss)):
	if ss[i] == '(':
		stack.append('(')
	else:
		if ss[i-1] == '(':
			stack.pop()
			cnt += len(stack)
		else:
			stack.pop()
			cnt += 1

print(cnt)
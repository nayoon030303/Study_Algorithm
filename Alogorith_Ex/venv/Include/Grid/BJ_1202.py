from collections import deque


def q_solution():
    pass


n, k = map(int, input().split())
j_queue = deque()
kg_queue = deque()
kge_list = ['empty'] * k
result = 0

for i in range(n):
    # 가격이 높은 순으로
    a,b = map(int, input().split())
    j_queue.append(tuple((b,a)))

for i in range(k):
    kg_queue.append(int(input()))



#j_queue = sorted(j_queue, key=lambda x: -x[1])
#j_queue.sort(reverse=True)
print(j_queue)
print(kg_queue)
#print(kg_list)
#for h in range(len(jewelry_list)):
#    for k in range(len(kg_list)):
#        #print(jewelry_list[h][0],k)
#        if jewelry_list[h][0] <= kg_list[k] and kge_list[k] == 'empty':
#           #print(jewelry_list[h][0])
#            result += jewelry_list[h][1]
#           kge_list[k] = 'full'
#           break;

#    if kge_list[k-1] == 'full':
#        break

while kg_queue:
    j_price = j_queue.popleft()
    if kg_queue[0] >= j_price[i]:
        kg_queue.popleft()
        result+=j_price[1]


print(result)








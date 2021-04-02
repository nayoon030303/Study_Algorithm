from queue import PriorityQueue




n, k = map(int, input().split())
j_queue = PriorityQueue()
kg_queue = PriorityQueue()
kge_list = ['empty'] * k
result = 0

for i in range(n):
    # 가격이 높은 순으로
    a,b = map(int, input().split())
    j_queue.put(tuple((b*-1,a)))

for i in range(k):
    kg_queue.put(int(input())*-1)



#j_queue = sorted(j_queue, key=lambda x: -x[1])
#j_queue.sort(reverse=True)
#print(j_queue.get())
#print(kg_queue)
#print(kg_list)
#for h in range(len(jewelry_list)):
#    for k in range(len(kg_list)):
#        #print(jewelry_list[h][0],k)
#        if jewelry_list[h][0] <= kg_list[k] and kge_list[k] == 'empty':
#           #print(jewelry_list[h][0])
#            result += jewelry_list[h][1]
#           kge_list[k] = 'full'
#           break;

#보석의 가격이 높은것 부터 순서대로
#가방의 크기가 가장 큰것부터


#    if kge_list[k-1] == 'full':
#        break


#print(kg_queue.qsize())
count = 0
while True:
    a = j_queue.get()
    j_price = a[0]*-1
    j_kg = a[1]
    b = kg_queue.get()*-1
   # print("pop")
    if b >= j_kg:
        #print("사용")
        result+=j_price

    if kg_queue.qsize() == 0:
        #print("ㅁㅁㅁ")
        print(result)
        break

    if b <= j_kg :
        #print("추가")
        result += j_price
    #print(kg_queue.qsize())





   # print(price,kg)


#while kg_queue:
#    j_price = j_queue.popleft()
#    if kg_queue[0] >= j_price[i]:
#        kg_queue.popleft()
#        result+=j_price[1]











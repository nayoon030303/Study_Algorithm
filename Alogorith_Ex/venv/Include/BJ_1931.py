#version_1

n = int(input())
datas = list(list(map(int,input().split())) for _ in range(n))

datas.sort(key=lambda x:(x[1],x[0]))
end_time = datas[0][1]

count = 1

for i in range(1,len(datas)):
    if end_time<= datas[i][0]:
        count+=1
        end_time = datas[i][1]

print(count)



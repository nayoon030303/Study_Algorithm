# 문제: 시각

n = int(input())

count = 0
# 0~n까지 검색해야한다.
for i in range(n+1):
    for j in range(60):
        for k in range(60):
            #매 시각 안에 '3'이 포함되어 있다면 카운트 증가
            if '3' in str(i) + str(j) + str(k):
                count+=1

print(count)
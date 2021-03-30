# 모험가 길드

num = int(input())
# 2 3 1 2 2
data = list(map(int,input().split()))
data.sort() # 1 2 2 2 3
count = 0 # 총 그룹수
people = 0 # 현재 그룹에 포함된 모험가의 수
for i in data: #공포도를 낮은 수 부터 하나씩 확인
    people+=1 #그룹에 인원 + 1
    if i <=people: # 공포도보다 인원이 많거나 같다면 실행
        count+=1 #그룹의 수 + 1
        people = 0 # 다리 그룹인원 초기화
print(count)

#문제 해결 아이디어
# 오름차순 정렬 이후에 공포도가 가장 낮은 모험가부터 하나씩 확인한다.
#이러한 방법을 이용하면 공포도가 오름차순으로 정렬되어 있다는 점에서,
#항상 최소한의 모함가의 수만 포함하여 그룹을 결성하게 됩니다.

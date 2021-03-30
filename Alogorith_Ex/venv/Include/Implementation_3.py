location = list(input())

abc = ['a','b','c','d','e','f','g','h']

x =0
y = 0
count = 0

steps = [(-2,-1),(-2,1),(2,-1),(2,1),(-1,-2),(1,-2),(-1,2),(1,2)]
for i in range(len(abc)):
    if abc[i] == location[0]:#열의 위치값 구하기
        x = i+1
        y= int(location[1]) # 행의 위치값 구하기
        break
for i in range(8):
     nx = x+steps[i][0]
     ny = y+steps[i][1]
     if nx >= 1 and nx <= 8 and ny >= 1 and ny <= 8:
         count += 1

print(count)

#답안 예시
location = list(input())
y = int(location[1])
x = int(ord(location[0])) - int(ord('a'))+1;
count = 0

#나이트가 이동할 수 있는 8가지 방향 정의
steps = [(-2,-1),(-2,1),(2,-1),(2,1),(-1,-2),(1,-2),(-1,2),(1,2)]
for step in steps:
    next_x = x+step[0]
    next_y = y+step[1]
    if next_x >= 1 and next_x <= 8 and next_y >= 1 and next_y <= 8:
        count += 1
print(count)

n = int(input())
direction = list(input().split())

y = 0
x = 0
for d in direction:
    if x>n-1:
        x-=1
    if y>n-1:
        y-=1
    if y<0:
        y+=1
    if x<0:
        x+=1

    if d == 'R':
        x+=1
    elif d == 'L':
        x-=1
    elif d == 'U':
        y-=1
    elif d == 'D':
        y+=1

print(y+1,x+1)

# 코드 줄이기
n = int(input())
direction = list(input().split())
x,y = 1
# L, R, U, D 에 따른 이동 방향
dx = [-1,1,0,0]
dy = [0,0,-1,1]
types = ['L', 'R', 'U','D']

#이동 계획을 하나씩 확인하기
for d in direction:
    #이동 후 좌표 구하기
    for i in range(len(types)):
        if d == types[i]:
            nx = x+dx[i]
            ny = y+dy[i]
    #공간을 벗어나는 경우 무시
    if nx<1 or nx>n or ny<1 or nx>n:
        continue
    x = nx
    y = ny

print(x, y)







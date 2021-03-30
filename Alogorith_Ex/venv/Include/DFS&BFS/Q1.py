
count = 0
n,m = map(int,input().split())
datas = list((list(input()) for _ in range(n)))
visited  = [False]*n*m

def solution(x,y):
    if visited[y*m+x] == True or datas[y][x] == 1:
        return
    if x<0 or y<0 or x>=m or y>=n:
        return

    visited[y*m+x] == True
    solution(x+1,y)
    solution(x-1,y)
    solution(x,y-1)
    solution(x,y+1)
    count+=1



print(datas)
print(datas[0+8])
solution(0,0)





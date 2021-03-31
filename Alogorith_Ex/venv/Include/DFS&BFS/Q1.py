#얼음 얼리기

#DFS로 특정 노드를 방문하고 연결된 모든 노드들도 방문
def dfs(x,y):
    #주어진 범위를 벗어나는 경우에는 즉시 종료
    if x<0 or y<0 or x>=m or y>=n:
        return False
    #현재 노드를 방문했다면 즉시 종료
    if datas[y][x] == 1:
        return False

    #해당 노드 방문 처리
    datas[y][x] = 1
    #visited[y*m+x] == True
    #상, 하, 좌, 우의 위치들도 모두 재귀적으로 호출
    dfs(x+1,y)
    dfs(x-1,y)
    dfs(x,y-1)
    dfs(x,y+1)
    return True


#2차원 리스트의 맵 정보 입력 받기
n,m = map(int,input().split())
datas = list((list(input()) for _ in range(n)))
#visited  = [False]*n*m

#모든 노드(위치)에 대하여 음료수 채우기
result = 0
for i in range(n):
    for j in range(m):
        #현재 위치에서 DFS 수행
        if dfs(i,j) == True:
            result+=1

print("="*20)
def dfs(x,y):
    if x<=-1 or y<=-1 or x>=n or y>=m:
        return False
    if graph[x][y] == '0':
        graph[x][y] = '1'
        dfs(x + 1, y)
        dfs(x - 1, y)
        dfs(x, y - 1)
        dfs(x, y + 1)
        return True
    return False

n,m = map(int,input().split())
graph = list((list(input()) for _ in range(n)))
#print(graph)
#graph =[]
#for i in range(n):
 #   graph.append(list(map(int,input())))
#print(graph)
#visited  = [False]*n*m

#모든 노드(위치)에 대하여 음료수 채우기
result = 0
for i in range(n):
    for j in range(m):
        #현재 위치에서 DFS 수행
        if dfs(i,j) == True:
            result+=1

print(result)

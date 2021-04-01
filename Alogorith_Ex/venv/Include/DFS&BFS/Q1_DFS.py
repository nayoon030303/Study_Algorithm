def dfs(x,y):
	if x<=-1 or y<=-1 or x>=m or y>=n:
		return False
	if graph[y][x] == 0:
			graph[y][x] = 1
			dfs(x-1,y)
			dfs(x+1,y)
			dfs(x,y+1)
			dfs(x,y-1)
			return True
	return False


n,m = map(int,input().split())
graph = []
for i in range(n):
	graph.append(list(map(int,input())))

#모든 노드(위치)에 대하여 음료수 채우기
result = 0
for y in range(n):
	for x in range(m):
		#현재 위치에허 DFS 수행하기
		if dfs(x,y) == True:
			result+=1

print(result)
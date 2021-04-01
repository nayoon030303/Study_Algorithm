from collections import deque


def dfs(graph, v, visited):
    visited[v] = True
    print(v, end=' ')
    for i in graph[v]:
        if not visited[i]:
            dfs(graph, i, visited)


def bfs(graph, v, visited):
    queue = deque()
    queue.append(v)
    visited[v] = True
    while queue:
        i = queue.popleft()
        print(i, end=' ')
        for j in graph[i]:
            if not visited[j]:
                visited[j] = True
                mi = 1000
                queue.append(j)



n, m, v = map(int, input().split())
li = []
graph = [[] for _ in range(n + 1)]
visited = [False] * (n + 1)
for i in range(m):
    li.append(list(map(int, input().split())))

for i in range(m):
    graph[li[i][0]].append(li[i][1])
    graph[li[i][1]].append(li[i][0])
for i in graph:
    i.sort()


dfs(graph, v, visited)
visited = [False] * (n + 1)
print()
bfs(graph, v, visited)



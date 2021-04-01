# 큐를 사용하기 위해 deque import
from collections import deque


def bfs(x, y):
    queue = deque()
    queue.append((y, x))
    # 큐가 빌때까지 반복하기
    while queue:
        y, x = queue.popleft()
        # 현재 위치에서 4가지 방향으로 위치 확인
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            # 미로 찾기 중간에서 범위에 벗어난 경우
            if nx < 0 or ny < 0 or nx >= m or ny >= n:
                continue
            if graph[ny][nx] == 0:
                continue
            if graph[ny][nx] == 1:
                graph[ny][nx] = graph[y][x] + 1
                queue.append((ny, nx))
    return graph[n - 1][m - 1]


n, m = map(int, input().split())
graph = []
for i in range(n):
    graph.append(list(map(int, input())))

# 상 하 좌 우
dy = [-1, 1, 0, 0]
dx = [0, 0, -1, 1]

print(bfs(1 - 1, 1 - 1))
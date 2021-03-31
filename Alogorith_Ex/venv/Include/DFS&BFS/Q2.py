#미로 탈출 문제

def solution1(x,y,result):
    #스택이 빌때까지
    result += 1
    if x != (m-1) or y != (n-1):
        stack.append([y, x])
        top = stack[-1]
        nx = top[1]
        ny = top[0]

        if nx<=-1 or ny<=-1 or nx>=m or ny>=n:
            result-=1
            stack.pop()
            return
        elif graph[ny][nx] == 0 or graph[ny][nx] == 2:
            result -= 1
            stack.pop()
            return

        graph[ny][nx] = 2
        solution(nx+1,ny,result)
        solution(nx, ny + 1, result)
        solution(nx-1,ny,result)
        solution(nx,ny-1,result)
        return
    else:
        print(result)
        #return  result

#n,m = map(int,input().split())
def solution2(x,y):
    stack.append([y, x])
    result = 0
    while len(stack)>0:
        result += 1
        top = stack.pop()
        nx = top[1]
        ny = top[0]


        if (nx == (m - 1)) and (ny == (n - 1)):
            print(result)
            break
        if nx <= -1 or ny <= -1 or nx >= m or ny >= n:
            result -= 1
            print('pop')
            #stack.pop()
            continue
        elif graph[ny][nx] == 0 or graph[ny][nx] == 2:
            result -= 1
            print('pop')
            #stack.pop()
            continue

        print(stack)
        print(ny, nx)
        print(result)
        graph[ny][nx] = 2
        stack.append([ny, nx + 1])
        stack.append([ny, nx - 1])
        stack.append([ny - 1, nx])
        stack.append([ny + 1, nx])


    print("result",result)


graph = []
stack = []

#for i in range(n):
    #graph.append(list(map(int,input())))

#solution2(1-1,1-1)


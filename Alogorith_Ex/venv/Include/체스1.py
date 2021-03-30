location = list(input())

direction = [(2,-1),(2,1),(-2,1),(-2,-1),(1,-2),(-1,-2),(1,2),(-1,2)]

y = int(location[1])
x = ord(location[0]) - ord('a')+1
count = 0

for d in direction:
    nx = x+d[0]
    ny = y+d[1]

    if nx<1 or ny<1 or nx>8 or ny>8:
        continue
    count+=1

print(count)


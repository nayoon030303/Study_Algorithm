from collections import Counter

n,m = map(int,input().split())
dna = list(list(input()) for _ in range(n))
new_dna = [i*0 for i in range(n)]
li = [list() for i in range(m)]
print(li)


for y in range(m):
    for x in range(n):
        li[y] += dna[x][y]
print(li)
for i in range(m):
    c = Counter(li[i])
    a =c.most_common()
    print(a[0][0])











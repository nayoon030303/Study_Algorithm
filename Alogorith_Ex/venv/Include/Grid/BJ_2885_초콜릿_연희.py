k = int(input())
mul=1
while(True):
  mul*=2
  if k<=mul:
    break
print(mul, end=' ')

d=0
cnt = 0
#k가 0보다 클 때
while(k>0):
  # k가 2의승수보다 클때
  if k>=mul:
    #k-=
    k-=mul
  else:
    mul //=2
    cnt+=1
print(cnt)
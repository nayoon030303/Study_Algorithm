def solution(n,k):
    count = 0
    while(n!=1):
        if n%k == 0:
            n//=k
        else:
            n-=1
        count+=1
    return  count

print(solution(18,4))

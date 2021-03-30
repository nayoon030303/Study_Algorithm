import  time


#문제: 거스름 돈
def solution1(money):

    #큰 단위의 화폐부터 차례대로 확인학.
    array = [500,100,50,10]
    cnt = 0
    for i in array:
        cnt += money // i   # 해당 화페로 거슬러 줄 수 있는 동전의 개수 세기
        money%=i
    return cnt

#print(solution1(1260))

#문제: 1이 될 때까지
def solution2_1(n,k):
    count = 0
    while(n!=1):
        if n%k == 0:
            n//=k
        else:
            n-=1
        count+=1
    return  count

start = time .time()
n,k = map(int,input().split())
print(solution2_1(n,k))
end = time.time()
print(end-start)


#문제: 1이 될 때까지
start = time .time()
n,k = map(int,input().split())


result = 0

while True:
    # N이 K로 나누어 떨어지는 수가 될 때까지 빼는 수 구하기
    # ex) 17 3  17이 3으로 나눠지기 위해서는 15가 되어야함
    # 총 2번 뺴야함
    target = (n // k) * k
    result += (n - target)
    n = target
    # N이 K보다 작을 떄 (더 이상 나눌 수 없을 때) 반복문 탈출
    if n < k:
        break
    # K로 나누기
    result += 1
    n //= k
result += (n - 1)
end = time.time()
print(result)
print(end-start)
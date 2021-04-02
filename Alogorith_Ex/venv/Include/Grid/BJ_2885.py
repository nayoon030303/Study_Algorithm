k = int(input())
buy = 0 #최소 초콜릿
div = 0 #나누는 수
mul = 1 #2의 승수

#k보디 크거나 같은 2의 승수를 찾는다
while True:
    #k랑 2의 승수가 같거나 2의 승수가 더 클 때
    if k <= mul:
        buy = mul
        break
    mul*=2

#k 랑 2의 승수가 같을 때
if buy == k:
    print(buy, 0)
else:
    #k를 2진수로 바꾸고 str로 바꾼다.
    b_k = str(bin(k))

    #왼쪽에서부터 'b'의 index값을 찾는다
    a = b_k.find('b')
    #오른쪽에서부터 '1'의 index값을 찾는다.
    b = b_k.rfind('1')
    #print(a,b)
    print(buy,b-a)



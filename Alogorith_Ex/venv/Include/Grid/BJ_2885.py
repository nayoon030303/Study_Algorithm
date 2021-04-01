k = int(input())
buy = 0
div = 0
mul = 1
#k보디 크거나 같은 2의 승수를 찾는다

while True:
    if k <= mul:
        buy = mul
        break
    mul*=2

if buy == k:
    print(buy, 0)
else:
    b_k = str(bin(k))
    a = b_k.find('b')
    b = b_k.rfind('1')
    print(buy,b-a)



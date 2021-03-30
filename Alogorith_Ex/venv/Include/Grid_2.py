#문제: 곱하기 혹은 더하기

s = list(input())
print(s)
result = int(s[0])
for i in range(1,len(s)):
    if result<2 or int(s[i])<2:
    #if result < 2:
        result+=int(s[i])
    else:
        result*=int(s[i])
    # 만약 result가 0이라면
        # +
    # 아니라면
        # *
print(result)



#다만 두수 중에서 하나라도 '0' 혹은 '1'인 경우 곱하기 보다
# 더하기를 수행하는 것이 더 효율적이다.
s = list(input())
result = 1
for i in s:
    if int(i)<2:
        result+=int(i)
    else:
        result*=int(i)
print(result)
#오류
#s의 첫번쨰가 1이라면 오류 
s = list(input())

new_li = []
num = 0
for i in s:
    if ord('A')<= ord(i) <= ord('Z'):
        new_li+=[i]
    else:
        num+=int(i)

new_li.sort()
#숫자가 하나라도 있는 경우
if num !=0:
    new_li.append(str(num))
print("".join(new_li))

#AJKDLSI412K4JSJ9D
#답안 예시
s = list(input())

new_li = []
num = 0
for i in s:
    if i.isalpha():
        new_li+=[i]
    else:
        num+=int(i)

new_li.sort()

#숫자가 하나라도 있는 경우
if num !=0:
    new_li.append(str(num))
print("".join(new_li))
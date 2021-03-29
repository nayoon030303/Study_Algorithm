#양의 정수
a = 100
print(a) #100

#음의 정수
a = -7
print(a) #-7

#0
a = 0
print(a) #0

#1000,000,000의 지수 표현 방식
a = 1e9
print(a) #1000000000.0
print(int(a)) #1000000000

a = 7.524e2
print(a) #752.4

a = 3954e-3
print(a) #3.954

#양의 소수
a = 3.312
print(a) #3.312

#음의 소수
a = -43.5211
print(a) #-43.5211

#소수부가 0일 때
a = 32.
print(a) #32.0

#정수부가 0일 떄
a = .987
print(a) #0.987

a = 0.3 + 0.6
print(a) # 0.899999..

if a == 0.9:
	print(True)
else:
	print(False)
#print(False)

a = 0.3 + 0.9  # 0.89999...

#소수점 셋쨰 자리에서 반올림한다.
print(round(a,3)) #0.9

if round(a,3) == 0.9:
	print(True)
else:
	print(False)

# 직접 데이터를 넣어서 초기화
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, ]
print(a)  # [1,2,3,4,5,6,7,8,9,]

# 네 번째 원소만 출력
print(a[3])  # 4

# 크기가 N이고, 모든 값이 0인 1차원 리스트로 초기화
n = 10
a = [0] * n
print(a)  # [0,0,0,0,0,0,0,0,0,0]

a = [1,2,3,4,5,6,7,8,9]

#일곱 번째 원소만 출력
print(a[6]) # 7

#뒤에서 첫 번째 원소만 출력
print(a[:-1]) #9

#뒤에서 세 번째 원소만 출력
print(a[:-3]) # 7

#네 번째 원소 값 변경
a[3] = 9
print(a) #[1,2,3,9,5,6,7,8,9]

a = [1,2,3,4,5,6,7,8,9]

#네 번쨰 원소만 출력
print(a[3]) #4

#두 번째 원소부터 네 번째 원소까지
print(a[1:4]) # [2,3,4]

# 0부터 9까지의 수를 포함하는 리스트
array = [i for i in range(10)]

print(array) #[0,1,2,3,4,5,6,7,8,9]

#0부터 9까지의 수 중에서 홀수만 포함하는 리스트
array = [i for i in range(10) if i%2 == 1]

print(array) #[1,3,5,7,9]

#1부터 9까지 수들의 제곱 값을 포함하는 리스트
array = [i*i for i in range(1,10)]

print(array) #[1,4,9,16,25,36,49,64,81]

#코드1: 컴프리헨션
#0부터 9까지의 수 중에서 홀수만 포함하는 리스트
array = [i for i in range(10) if i%2==1]

print(array) #[1,3,5,7,9]


#코드2: 일반 코드
array = []
for i in range(10):
	if(i%2==1):
		array.append(i)

print(array) #[1,3,5,7,9]

# N x M 크기의 2차원 리스트 초기화(잘못된 방법)

n = 4
m = 3
array = [[ 0 ]*m] * n
print(array) # [[0,0,0], [0,0,0], [0,0,0], [0,0,0]]

array[1][1] = 5
print(array) # [[0,1,0], [0,1,0], [0,1,0], [0,1,0]]

# 코드1: 1부터 9까지의 자연수를 더하기
summary = 0
for i in range(1,10):
	summary +=i
print(summary)

# 코드2: "Hello World" 를 5번 출력하기
for _ in range(5):
	print("Hello World")

a = [3, 2, 1, 4, 5, 6, 7]
a.append(7)
print(a)  # [3,2,1,4,5,6,7,7]

a.sort()
print(a)  # [1,2,3,4,5,6,7,7]

a.insert(3, 2)
print(a)  # [1,2,3,2,4,5,6,7,7]

count = a.count(7)
print(count)  # 2

a.remove(7)
print(a)  # [1,2,3,2,4,5,6,7]
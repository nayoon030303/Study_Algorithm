#모두의 마블

n = int(input())
cards = list(map(int,input().split()))

cards.reverse() if cards[0]<cards[len(cards)-1] else cards

level = cards[0];
coin = 0
for i in range(1, len(cards)):
    coin += cards[i] + level
    if cards[i] > level:
        level = cards[i]

if n ==1:
    coin = cards[0]

print(coin)

print('='*20)
#4      30 50 10 20 40

coin = 0
n = int(input())
cards = list(map(int,input().split()))
ma = max(cards)
del (cards[cards.index(max(cards))])
#print(cards)
for card in cards:
    coin+=(card+ma)

print(coin)




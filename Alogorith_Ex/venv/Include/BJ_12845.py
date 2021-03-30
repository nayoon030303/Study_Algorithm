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
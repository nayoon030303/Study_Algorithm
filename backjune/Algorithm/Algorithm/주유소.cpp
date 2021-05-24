#include <iostream>

using namespace std;

int main()
{
	int c_num;
	cin >> c_num;
	long long* len = new long long[c_num-1]; //도로의 길이 
	long long* prices = new long long[c_num]; //리터당 가격

	for (int i = 0; i < c_num - 1; i++) {
		cin >> len[i];
	}
	for (int i = 0; i < c_num; i++) {
		cin >> prices[i];
	}

	long long sum = 0; //long long의 범위 
	long long current = 1000000000;
	for (int i = 0; i < c_num-1; i++) {
		if (current > prices[i]) {
			current = prices[i];
		}
		sum += current * len[i];
	}
	cout << sum << endl;
}
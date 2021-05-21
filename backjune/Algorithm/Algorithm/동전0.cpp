#include <iostream>

using namespace std;

int main()
{
	int number;
	long long money;
	cin >> number;
	cin >> money;
	int* coins = new int[number];
	for (int i = 0; i < number; i++) {
		cin >> coins[i];
	}
	
	int answer = 0;

	for (int i = number-1; i >= 0; i--) {
		answer += money / coins[i];
		money = money % coins[i];
	}
	cout << answer;
	//cout << money;

	/*cout << "number:" << number << endl;
	cout << "money:" << money << endl;*/

	return 0;
}
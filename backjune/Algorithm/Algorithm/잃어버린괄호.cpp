#include <iostream>
#include <string>

using namespace std;


/*
* 괄호를 쳐서 최솟값을 만드는 문제 
* 연속해서 두개 이상의 연산자는 나올 수 없다
* 
* -가 나온 후 부터 +를 모두 -로 치환해서 풀 수 있다.
* ex) 100+24-39+33+11-5
* => 100+24-(39+33+11)-5
* => 100+24-39-33-11-5 가 된다.
* +
*/

int main()
{
	string str;
	cin >> str;
	

	string temp = "";
	int minus = 0;
	int num = 0;

	for (int i = 0; i <= str.length(); i++) {
		if (str[i] == '-' || str[i] =='+' || str[i]=='\0') {
			if (minus) { //1이라면 -
				num -= stoi(temp);			
			}
			else {
				num += stoi(temp);	
			}

			if (str[i] == '-') {//-가 나온직후는 모두 -하기
				minus = 1;
			}
			temp = "";
			continue;
		}
		temp += str[i];
	}

	cout << num << endl;
}
#include <iostream>
#include <string>

using namespace std;


/*
* ��ȣ�� �ļ� �ּڰ��� ����� ���� 
* �����ؼ� �ΰ� �̻��� �����ڴ� ���� �� ����
* 
* -�� ���� �� ���� +�� ��� -�� ġȯ�ؼ� Ǯ �� �ִ�.
* ex) 100+24-39+33+11-5
* => 100+24-(39+33+11)-5
* => 100+24-39-33-11-5 �� �ȴ�.
* +
*/

int main()
{
	string str;
	cin >> str;
	

	string temp = "";
	int m = 0;
	int num = 0;

	for (int i = 0; i <= str.length(); i++) {
		if (str[i] == '-' || str[i] =='+' || str[i]=='\0') {
			if (m) { //1�̶�� -
				num -= stoi(temp);			
			}
			else {
				num += stoi(temp);	
			}

			if (str[i] == '-') {//-�� �������Ĵ� ��� -�ϱ�
				m = 1;
			}
			temp = "";
			continue;
		}
		temp += str[i];
	}

	cout << num << endl;
}
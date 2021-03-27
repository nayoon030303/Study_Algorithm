#include <iostream>

using namespace std;

void Selection_Sort(int array[], int size)
{
	int i, j;   //배열의 원소를 탐색하기 위해
	int min;   //최솟값
	int index; //가장 작은 원소가 존재하는 위치
	int temp;  // 수를 변경하기 위해서 사용

	//마지막 숫자는 자동으로 정렬되기 때문에 (숫자개수-1) 만큼 반복한다.
	for (int i = 0; i < size - 1; ++i)
	{
		min = INT_MAX; //가장 큰 값
		for (int j = i; j < size; ++j)
		{
			if (min > array[j])
			{
				min = array[j];
				index = j;
			}
		}
		temp = array[i];
		array[i] = min;
		array[index] = temp;

	}
}


int main()
{
	int array[10] = { 1,10,5,8,7,6,4,3,9,2 };
	int size = sizeof(array) / sizeof(int);

	cout << "선택정렬 전" << endl;
	for (int i = 0; i < 10; ++i)
	{
		cout << array[i] << " " << endl;
	}
	

	Selection_Sort(array, size);

	cout << "선택정렬 후" << endl;
	for (int i = 0; i < 10; ++i)
	{
		cout << array[i] << " " << endl;
	}

	return 0;
}
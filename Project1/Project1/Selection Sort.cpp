#include <iostream>

using namespace std;

void Selection_Sort(int array[], int size)
{
	int i, j;   //�迭�� ���Ҹ� Ž���ϱ� ����
	int min;   //�ּڰ�
	int index; //���� ���� ���Ұ� �����ϴ� ��ġ
	int temp;  // ���� �����ϱ� ���ؼ� ���

	//������ ���ڴ� �ڵ����� ���ĵǱ� ������ (���ڰ���-1) ��ŭ �ݺ��Ѵ�.
	for (int i = 0; i < size - 1; ++i)
	{
		min = INT_MAX; //���� ū ��
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

	cout << "�������� ��" << endl;
	for (int i = 0; i < 10; ++i)
	{
		cout << array[i] << " " << endl;
	}
	

	Selection_Sort(array, size);

	cout << "�������� ��" << endl;
	for (int i = 0; i < 10; ++i)
	{
		cout << array[i] << " " << endl;
	}

	return 0;
}
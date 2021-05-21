

#include <iostream>

using namespace std;

int main()
{
    long long num;
    cin >> num;
    long long* times = new long long[num];
    for (int i = 0; i < num; i++) {
        cin >> times[i];
    }

    //오름차순으로 정렬
    for (int i = 0; i < num-1; i++) {
        for (int j = i+1; j < num; j++) {
            if (times[i] > times[j]) {
                int temp = times[i];
                times[i] = times[j];
                times[j] = temp;
            }
        }
    }
    int sum = 0;
    for (int i = 0; i < num; i++) {
        for (int j = 0; j <= i; j++) {
            sum += times[j];
        }
        //cout<< times[i];
    }
    cout << sum << endl;
    
    return 0;
}

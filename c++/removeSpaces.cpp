#include <iostream>
#include <algorithm>
#include <string>

using namespace std;

string removeSpaces(string str)
{
	str.erase(remove(str.begin(), str.end(), ' '), str.end());
	return str;
}

main()
{
	string input{};
	removeSpaces(getline(cin, input));
	return 0;
}

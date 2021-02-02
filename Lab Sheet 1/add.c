//Program to add two numbers
#include<stdio.h>
#define add(a,b) (a+b)//using macro
int main() {
    int a=5 , b=4;
    printf("Sum = %d", add(a,b));
    return 0;
}

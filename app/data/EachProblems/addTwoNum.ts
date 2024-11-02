// src/problems/addTwoNumbers.ts

import { Problem } from "../types/types";

const intialcode = [
    {
        id: 1,
        name: `
#include <iostream>
using namespace std;
    `
    },
    {
        id: 2,
        name: `
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        System.out.println(a + b);
        scanner.close();
        }
    }
     `
    }
];

const endingcode = [
    {
        id: 1,
        name: `
        int main() {
            int a, b;
            cin >> a >> b;
            cout << a + b << endl;
            return 0;
        }
        `
    },
    {
        id: 2,
        name: ``
    }
];

const boilercode = [
    {
        id: 1,
        name: `//Complete the function below.
int addTwoNumbers(int a, int b) {
        
// Your code here

}
        `
    },
    {
        id: 2,
        name: `
class Solution {
public static int addTwoNumbers(int a, int b) {

// Your code here

  }
}
        `
    }
];

const solutioncode = [
    {
        id: 1,
        name: `
class Solution {
public:
// Function to add two integers.
int addTwoNumbers(int a, int b) {
 return a + b;
}
};
        `
    },
    {
        id: 2,
        name: `
class Solution {
// Function to add two integers.
public static int addTwoNumbers(int a, int b) {
return a + b;
}
}
        `
    }
];

export const addTwoNumbersProblem: Problem = {
    id: '1',
    title: "Add Two Numbers",
    problemStatement: ` Given two integers a and b, return their sum.`,
    examples: [
        {
            id: 1,
            inputText: 'a = 3, b = 5',
            outputText: '8',
        },
        {
            id: 2,
            inputText: 'a = -2, b = 7',
            outputText: '5',
        }
    ],
    constraints: `10^9 ≤ a, b ≤ 10^9`,
    starterCode: boilercode,
    intialcode: intialcode,
    endingcode: endingcode,
    solutioncode: solutioncode,
    input: "3 5 -2 7",
    output: "8 5 ",
    order: 6,
    difficulty: "Easy",
    tag: [
        {
            id: 1,
            name: "Math"
        },
        {
            id: 2,
            name: "Basic"
        }
    ],
    companies: [
        {
            id: 1,
            name: "Google"
        },
        {
            id: 2,
            name: "Facebook"
        }
    ],
    averagetime: "10m"
};

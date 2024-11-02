import { Problem } from "../types/types";

const intialcodeSubtract = [
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
                System.out.println(a - b);
                scanner.close();
            }
        }
        `
    }
];

const endingcodeSubtract = [
    {
        id: 1,
        name: `
        int main() {
            int a, b;
            cin >> a >> b;
            cout << a - b << endl;
            return 0;
        }
        `
    },
    {
        id: 2,
        name: ``
    }
];

const boilercodeSubtract = [
    {
        id: 1,
        name: `
class Solution {
    public:
    // Function to subtract two integers.
     int subtractTwoNumbers(int a, int b) {
        // Your code here
    }
};
        `
    },
    {
        id: 2,
        name: `
class Solution {
    public static int subtractTwoNumbers(int a, int b) {
            // Your code here
    }
}
        `
    }
];

const solutioncodeSubtract = [
    {
        id: 1,
        name: `
        class Solution {
            public:
            // Function to subtract two integers.
            int subtractTwoNumbers(int a, int b) {
                return a - b;
            }
        };
        `
    },
    {
        id: 2,
        name: `
        class Solution {
            // Function to subtract two integers.
            public static int subtractTwoNumbers(int a, int b) {
                return a - b;
            }
        }
        `
    }
];

export const subtractTwoNumbersProblem: Problem = {
    id: '3',
    title: "Subtract Two Numbers",
    problemStatement: `Given two integers <code>a</code> and <code>b</code>, return the result of subtracting <code>b</code> from <code>a</code>.`,
    examples: [
        {
            id: 1,
            inputText: 'a = 5, b = 3',
            outputText: '2',
        },
        {
            id: 2,
            inputText: 'a = 10, b = 7',
            outputText: '3',
        }
    ],
    constraints: `10^9 ≤ a, b ≤ 10^9`,
    starterCode: boilercodeSubtract,
    intialcode: intialcodeSubtract,
    endingcode: endingcodeSubtract,
    solutioncode: solutioncodeSubtract,
    input: "5 3 10 7",
    output: "2 3",
    order: 3,
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
            name: "Apple"
        },
        {
            id: 2,
            name: "Tesla"
        }
    ],
    averagetime: "10m"
};

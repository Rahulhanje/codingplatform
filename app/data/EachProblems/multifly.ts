import { Problem } from "../types/types";

const intialcodeMultiply = [
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
                System.out.println(a * b);
                scanner.close();
            }
        }
        `
    }
];

const endingcodeMultiply = [
    {
        id: 1,
        name: `
        int main() {
            int a, b;
            cin >> a >> b;
            cout << a * b << endl;
            return 0;
        }
        `
    },
    {
        id: 2,
        name: ``
    }
];

const boilercodeMultiply = [
    {
        id: 1,
        name: `
class Solution {
    public:
        // Function to multiply two integers.
        int multiplyTwoNumbers(int a, int b) {
             // Your code here
        }
};
        `
    },
    {
        id: 2,
        name: `
class Solution {
    public static int multiplyTwoNumbers(int a, int b) {
        // Your code here
    }
}
`
    }
];

const solutioncodeMultiply = [
    {
        id: 1,
        name: `
        class Solution {
            public:
            // Function to multiply two integers.
            int multiplyTwoNumbers(int a, int b) {
                return a * b;
            }
        };
        `
    },
    {
        id: 2,
        name: `
        class Solution {
            // Function to multiply two integers.
            public static int multiplyTwoNumbers(int a, int b) {
                return a * b;
            }
        }
        `
    }
];

export const multiplyTwoNumbersProblem: Problem = {
    id: '2',
    title: "Multiply Two Numbers",
    problemStatement: `Given two integers <code>a</code> and <code>b</code>, return their product.`,
    examples: [
        {
            id: 1,
            inputText: 'a = 3, b = 5',
            outputText: '15',
        },
        {
            id: 2,
            inputText: 'a = -2, b = 7',
            outputText: '-14',
        }
    ],
    constraints: `10^9 ≤ a, b ≤ 10^9`,
    starterCode: boilercodeMultiply,
    intialcode: intialcodeMultiply,
    endingcode: endingcodeMultiply,
    solutioncode: solutioncodeMultiply,
    input: "3 5 -2 7",
    output: "15 -14 ",
    order: 2,
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
            name: "Microsoft"
        },
        {
            id: 2,
            name: "Amazon"
        }
    ],
    averagetime: "15m"
};

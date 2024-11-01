// src/problems/addTwoNumbers.ts

import { Problem } from "../types/types";

const addTwoNumbers: Problem = {
    id: 3,
    title: "Add Two Numbers",
    description: "Given two integers `a` and `b`, return their sum.",
    input: {
        type: "object",
        properties: {
            a: {
                type: "integer",
                description: "The first integer."
            },
            b: {
                type: "integer",
                description: "The second integer."
            }
        },
        required: ["a", "b"]
    },
    output: {
        type: "integer",
        description: "The sum of the two input integers."
    },
    examples: [
        {
            input: { a: 3, b: 5 },
            output: 8,
            explanation: "The sum of 3 and 5 is 8."
        },
        {
            input: { a: -2, b: 7 },
            output: 5,
            explanation: "The sum of -2 and 7 is 5."
        }
    ],
    initialcode:
        `#include<iostream>
using namespace std;
int main(){
        
//write your code here
}`
};

export default addTwoNumbers;

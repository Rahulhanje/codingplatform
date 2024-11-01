// src/problems/validParentheses.ts

import { Problem } from "../types/types";

const validParentheses: Problem = {
    id: 2,
    title: "Valid Parentheses",
    description: "Given a string s consisting of just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    input: {
        type: "object",
        properties: {
            s: {
                type: "string",
                description: "A string containing parentheses."
            }
        },
        required: ["s"]
    },
    output: {
        type: "boolean",
        description: "Returns true if the string is valid, otherwise false."
    },
    examples: [
        {
            input: { s: "()" },
            output: true,
            explanation: "The parentheses are valid."
        },
        {
            input: { s: "(]" },
            output: false,
            explanation: "The parentheses are not valid."
        },
        {
            input: { s: "([{}])" },
            output: true,
            explanation: "All types of parentheses are matched correctly."
        }
    ],
    initialcode: `
        #include<iostream>
        using namespace std;
        int main(){
        
        //write your code here
        }
    `
};

export default validParentheses;

// src/problems/twoSum.ts

import { Problem } from "../types/types";

const twoSum: Problem = {
    id: 1,
    title: "Two Sum",
    description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
    input: {
        type: "object",
        properties: {
            nums: {
                type: "array",
                items: { type: "integer" },
                description: "An array of integers."
            },
            target: {
                type: "integer",
                description: "The target integer to find the sum."
            }
        },
        required: ["nums", "target"]
    },
    output: {
        type: "array",
        items: { type: "integer" },
        description: "An array containing the indices of the two numbers."
    },
    examples: [
        {
            input: { nums: [2, 7, 11, 15], target: 9 },
            output: [0, 1],
            explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
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

export default twoSum;

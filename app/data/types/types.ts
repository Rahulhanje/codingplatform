// src/types.ts

export interface ProblemExample {
    input: { [key: string]: any };
    output: any;
    explanation: string;
}

export interface Problem {
    id: number;
    title: string;
    description: string;
    input: {
        type: string;
        properties: { [key: string]: any };
        required: string[];
    };
    output: {
        type: string;
        items?: { type: string };
        description: string;
    };
    examples: ProblemExample[];
    initialcode: string;
}

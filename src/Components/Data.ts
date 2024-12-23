interface Question {
    id: number;
    question: string;
    options: string[];       
    rightAns: string;
}

export const Questions: Question[] = [
    {
        id: 1, 
        question: "What is the capital of India?",
        options: [
            "New Delhi",
            "Mumbai",
            "Kolkata",
            "Chennai",
        ],
        rightAns: "New Delhi",
    },
    {
        id: 2,
        question: "What is the biggest planet in our solar system?",
        options: [
            "Earth",
            "Saturn",
            "Jupiter",
            "Mars",
        ],
        rightAns: "Jupiter",
    },
    {
        id: 3,
        question: "How many continents are there in the world?",
        options: [
            "Seven",
            "Four",
            "Five",
            "Ten",
        ],
        rightAns: "Seven",
    },
    {
        id: 4,
        question: "What is 7th Wonder in World",
        options: [
            "Great Wall Of China",
            "Petra",
            "Taj Mahal",
            "Colosseum",
        ],
        rightAns: "Taj Mahal",
    },
    {
        id: 5,
        question: "Who wrote the play Romeo and Juliet?",
        options: [
            "Rabindranath Tagore",
            "Jane Austen",
            "Roald Dahl",
            "William Shakespeare",
        ],
        rightAns: "William Shakespeare",
    },
    {
        id: 6,
        question: "What is the boiling point of water in degrees Celsius?",
        options: [
            "200°c",
            "100°c",
            "250°c",
            "1000°c",
        ],
        rightAns: "100°c",
    },
    {
        id: 7,
        question: "Which ocean is the largest in the world?",
        options: [
            "Pacific Ocean",
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic Ocean",
        ],
        rightAns: "Pacific Ocean",
    },
    {
        id: 8,
        question: "What do bees produce?",
        options: [
            "Milk",
            "Water",
            "Honey",
            "Poison",
        ],
        rightAns: "Honey",
    },
    {
        id: 9,
        question: "What is the highest peak in the world?",
        options: [
            "Makalu",
            "K2",
            "Mount Everest",
            "cho oyu",
        ],
        rightAns: "Mount Everest",
    },
    {
        id: 10,
        question: "What is the fastest land animal?",
        options: [
            "Elephant",
            "Deer",
            "Lion",
            "Cheetah",
        ],
        rightAns: "Cheetah",
    },
    {
        id: 11,
        question: "What is the smallest planet in our solar system?",
        options: [
            "Earth",
            "Saturn",
            "Mercury",
            "Jupiter",
        ],
        rightAns: "Mercury",
    },
    {
        id: 12,
        question: "Which animal is known as the King of the Jungle?",
        options: [
            "Elephant",
            "Deer",
            "Lion",
            "Cheetah",
        ],
        rightAns: "Lion",
    },
    {
        id: 13,
        question: "What is the national currency of the United States?",
        options: [
            "Dollar",
            "Rupee",
            "Taka",
            "Riyal",
        ],
        rightAns: "Dollar",
    },
    {
        id: 14,
        question: "How many colors are in a rainbow?",
        options: [
            "Seven",
            "Six",
            "Two",
            "Eleven",
        ],
        rightAns: "Seven",
    },
    {
        id: 15,
        question: "What is H2O commonly known as?",
        options: [
            "Soil",
            "Water",
            "Oxygen",
            "Sunlight",
        ],
        rightAns: "Water",
    },
    {
        id: 16,
        question: "What do we call a baby cat?",
        options: [
            "Puppy",
            "Chicken",
            "Kitten",
            "Cub",
        ],
        rightAns: "Kitten",
    },
    {
        id: 17,
        question: "How many hours are there in a day?",
        options: [
            "12 hours",
            "36 hours",
            "72 hours",
            "24 hours",
        ],
        rightAns: "24 hours",
    },
    {
        id: 18,
        question: "What is the largest mammal on Earth?",
        options: [
            "Elephant",
            "Blue Whale",
            "Lion",
            "Tiger",
        ],
        rightAns: "Blue Whale",
    },
    {
        id: 19,
        question: "How many legs does a spider have",
        options: [
            "Six",
            "Four",
            "Eight",
            "Ten",
        ],
        rightAns: "Eight",
    },
    {
        id: 20,
        question: "Which month has 28 or 29 days?",
        options: [
            "January",
            "June",
            "February",
            "March",
        ],
        rightAns: "February",
    }
]

export type {Question}
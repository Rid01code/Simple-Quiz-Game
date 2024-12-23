import { useEffect, useState } from 'react';
import { Questions, Question } from '../Components/Data'
import QuestionCard from '../Components/QuestionCard'
import AnswerCard from '../Components/AnswerCard'
import Button from '../Components/Button'
import ScoreCard from './ScoreCard';

const QuestionSet = () => {
    const [examQuestions, setExamQuestions] = useState<Question[]>([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
    const [score, setScore] = useState(0)

    const getRandomQuestions = () => {
        const shuffledQuestions = Questions.sort(() => 0.5 - Math.random());
        const selectedQuestions = shuffledQuestions.slice(0, 10);
        setExamQuestions(selectedQuestions)
    };
    
    useEffect(() => {
        localStorage.removeItem('quizScore');
        setScore(0);
        getRandomQuestions()

        return () => {
            localStorage.removeItem('quizScore');
        }
    }, []);

    const restartQuiz = () => {
        setCurrentQuestion(0)
        setSelectedAnswer(null)
        getRandomQuestions()
    };

    const handleOptionSelect = (selectedOption: string) => {
        setSelectedAnswer(selectedOption)
    }
    
    const handleAnswer = () => {
        if (selectedAnswer === null) {
            alert('Please select an answer')
            return;
        }

        if (selectedAnswer === examQuestions[currentQuestion].rightAns) {
            const newScore = score + 1; 
            setScore(newScore);
            localStorage.setItem('quizScore', newScore.toString())
        }

        if (currentQuestion  < examQuestions.length) {
            setCurrentQuestion(prevIndex => prevIndex + 1);
            setSelectedAnswer(null)
        }
    }

    console.log(score)
    console.log(currentQuestion)
    console.log(examQuestions.length)

    return (
        <div>
            {
                currentQuestion < examQuestions.length  ? (
                    <div>
                        <QuestionCard className='my-4'>
                            {examQuestions[currentQuestion].question}
                        </QuestionCard>
                        <div className='grid grid-cols-2 gap-4 px-16'>
                            {
                                examQuestions[currentQuestion].options.map((answer, index) => (
                                    <AnswerCard
                                        className=''
                                        key={index}
                                        onClick={() => handleOptionSelect(answer)}
                                        AnswerIsSelected={selectedAnswer === answer}
                                    >
                                        {answer}
                                    </AnswerCard>
                                ))
                            }
                        </div>
                        <div className='w-full mt-14 flex justify-end items-end'>
                            <Button
                                onClick={handleAnswer}
                                className='bg-green-500 hover:bg-green-700' 
                            >
                                {currentQuestion === examQuestions.length - 1 ? 'Finish' : 'Save and Next'}
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className='h-screen w-full flex items-center justify-center'>
                            <ScoreCard
                                score={score}
                                setScore={setScore}
                                restartQuiz={restartQuiz}
                            />
                    </div>
                )
            }
        </div>
    )
};

export default QuestionSet
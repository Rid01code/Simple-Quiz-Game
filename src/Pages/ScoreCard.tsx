import Button from "../Components/Button";

interface scoreCardProps {
    score: number;
    setScore: (score: number) => void;
    restartQuiz: () => void;
}
const ScoreCard = ({ score, setScore, restartQuiz }: scoreCardProps) => {

    const totalQuestions = 10   
    const percentage = (score / totalQuestions) * 100;
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashOffset = circumference - (percentage / 100) * circumference;    

    const handleReset = () => {
        setScore(0);
        localStorage.removeItem('quizScore')
        restartQuiz()
    }
    return (
        <div>
            <div className='relative w-32 h-32 flex items-center justify-center'>
                <svg className='w-full h-full -rotate-90' viewBox='0 0 100 100'>
                    <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke='#e5e7eb'
                        strokeWidth="8"
                        fill='none'
                    />
                    <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke='#4CAF50'
                        strokeWidth="8"
                        fill='none'
                        strokeLinecap='round'
                        style={{
                            strokeDasharray: circumference,
                            strokeDashoffset: strokeDashOffset,
                            transition: "stroke-dashoffset 0.5s ease"
                        }}
                    />
                </svg>

                <div className='absolute inset-0 flex items-center justify-center'>
                    <span className='text-3xl font-bold'>{ score }</span>
                </div>
            </div>
            <div>
                <Button
                    onClick={handleReset}
                    className='bg-red-500 hover:bg-red-700'
                >
                    Try Once More
                </Button>
            </div>
        </div>
    )
}

export default ScoreCard
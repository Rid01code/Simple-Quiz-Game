import QuestionSet from "./Pages/QuestionSet"
import bg from "./Assets/QuizBg.png"

const App = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <img src={bg} alt="bg" className="w-full fixed top-0 left-0 h-full object-cover object-center -z-50"/>
            <QuestionSet/>
        </div>
    )
}

export default App
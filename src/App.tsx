import React, { createContext, useMemo, useState } from "react";
import "./App.css";
import Questions from "./Screen/Questions";
import { questionProtocol, questions } from "./Mock/Questions";

export interface Questionsinterface {
  currentQuestion: number;
  currentQuestionData: questionProtocol;
  answer: { [key: string]: any } | null;
  isCompleted: boolean;
  changeQuestionHandeler: (newIndex: number) => void;
  handleAnswer: (questionId: string, answerValue: any) => void;
}

export const QuestionsContext = createContext<Questionsinterface | null>(null);

function App() {
  const [currentQuestionindex, setCurrentQuestionindex] = useState<number>(0);
  const [answer, setAnswer] = useState<{ [key: string]: any } | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [currentQuestionData, setCurrentQuestionData] =
    useState<questionProtocol>(questions?.questions[0]);
  const [error, setError] = useState<string>("");

  /**
   * Function to save answers in key value pair format
   * @function handleAnswer
   * it saves all the answes on the basis of question ID 
   * @param questionId : number
   * @param answerValue : any
   */
  const handleAnswer = (questionId: string, answerValue: any) => {
    setAnswer({
      ...answer,
      [questionId.toString()]: answerValue,
    });
  };

  /**
   * Function to Change the active question
   * @function changeQuestionHandeler
   * takes index as parameter and picks Question on the basis of index
   * @param newIndex : number
   */

  const changeQuestionHandeler = (newIndex: number) => {
    if (
      !currentQuestionData?.validation ||
      (answer &&
        questions &&
        Object.keys(answer).includes(
          currentQuestionData?.question
        ) &&
        answer[currentQuestionData?.question])
    ) {
      setError("");
      if (newIndex >= 0 && newIndex < questions?.questions?.length) {
        setCurrentQuestionindex(newIndex);
        setCurrentQuestionData(questions?.questions[newIndex]);
      }
      if (newIndex === questions?.questions?.length) {
        setIsCompleted(true);
      }
    } else {
      setError("Please Answer This Question");
    }
  };

  const QuestionHandeler = useMemo(
    () => ({
      currentQuestion: currentQuestionindex,
      currentQuestionData: currentQuestionData,
      changeQuestionHandeler: changeQuestionHandeler,
      handleAnswer: handleAnswer,
      answer: answer,
      isCompleted: isCompleted,
    }),
    [answer, currentQuestionindex, isCompleted, currentQuestionData]
  );

  return (
    <div className="p-5 bg-whiteSmoke-1 h-screen flex justify-center items-center">
      <QuestionsContext.Provider value={QuestionHandeler}>
        <Questions error={error} isCompleted={isCompleted} />
      </QuestionsContext.Provider>
    </div>
  );
}

export default App;

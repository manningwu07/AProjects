"use client";

import React, { useState } from "react";
import { QuestionFormat } from "@/types/questions";

interface Props {
  questions: QuestionFormat[];
  setQuestions: (questions: QuestionFormat[]) => void;
}

const QuestionsInputInterface: React.FC<Props> = ({
  questions,
  setQuestions,
}) => {
  const [error, setError] = useState<string>("");

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        body: "",
        title: "",
        type: "mcq",
        options: [
          { value: "", id: "1" },
          { value: "", id: "2" },
          { value: "", id: "3" },
          { value: "", id: "4" },
        ],
        correct: [],
        course_id: "",
        unit_ids: [],
        subunit_ids: [],
      },
    ]);
  };

  const removeQuestion = (index: number) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
    setError("");
  };

  const updateQuestion = (index: number, updatedQuestion: QuestionFormat) => {
    const newQuestions = [...questions];
    newQuestions[index] = updatedQuestion;
    setQuestions(newQuestions);
  };

  const validateCorrectAnswer = (
    value: string,
    type: "mcq" | "multi-answer",
  ) => {
    let errorMessage = "";
    if (type === "mcq") {
      if (!/^\d$/.test(value)) {
        errorMessage = "Only a single number is allowed for MCQ. (eg 1)";
      }
    } else {
      if (!/^\d(,\d){0,7}$/.test(value) || value.length > 8) {
        errorMessage =
          "Only numbers separated by commas are allowed, max correct questions is 4. (eg 1,2,4)";
      }
    }
    setError(errorMessage);
    return errorMessage === "";
  };

  return (
    <div className="mb-4 rounded border p-4">
      {questions.map((question, qIndex) => (
        <div key={qIndex} className="mb-4 rounded border p-4">
          <div>
            <label>{"Question: " + (qIndex + 1)}</label>
            <input
              type="text"
              value={question.body}
              onChange={(e) =>
                updateQuestion(qIndex, { ...question, body: e.target.value })
              }
              className="w-full border p-2"
            />
          </div>
          <div>
            <label>Options:</label>
            {question.options.map((option, oIndex) => (
              <div key={oIndex}>
                <input
                  type="text"
                  value={option.value}
                  onChange={(e) => {
                    const newOptions = [...question.options];
                    if (newOptions[oIndex]) {
                      newOptions[oIndex].value = e.target.value;
                      updateQuestion(qIndex, {
                        ...question,
                        options: newOptions,
                      });
                    }
                  }}
                  className="w-full border p-2"
                />
              </div>
            ))}
          </div>
          <div>
            <label>Correct Answer(s):</label>
            <input
              type="text"
              value={question.correct.join(",")} // Convert array back to string for input display
              placeholder={
                question.type === "mcq"
                  ? "Enter the correct answer. (eg 1)"
                  : "Enter correct answer(s) separated by no spaced commas (eg: 1,3)"
              }
              onChange={(e) => {
                const inputValue = e.target.value;

                const correctAnswers = inputValue
                  .split(",")
                  .map((answer) => answer.trim());
                updateQuestion(qIndex, {
                  ...question,
                  correct: correctAnswers,
                });
                validateCorrectAnswer(inputValue, question.type);
              }}
              className="w-full border p-2"
            />
            {error && <div className="text-red-500">{error}</div>}
          </div>
          <div>
            <label>Question Type:</label>
            <select
              value={question.type}
              onChange={(e) =>
                updateQuestion(qIndex, {
                  ...question,
                  type: e.target.value as "mcq" | "multi-answer",
                })
              }
              className="w-full border p-2"
            >
              <option value="mcq">MCQ</option>
              <option value="multi-answer">Multi-Answer</option>
            </select>
          </div>
          <button
            type="button"
            className="mt-4 rounded-md border border-red-500 bg-red-500 px-2 py-1 text-white  hover:bg-white hover:text-red-500"
            onClick={() => removeQuestion(qIndex)}
          >
            Delete Question
          </button>
        </div>
      ))}

      <button
        type="button"
        className="mt-4 rounded-md border border-green-500 bg-green-500 p-2 px-2 py-1 text-white hover:bg-white hover:text-green-500"
        onClick={addQuestion}
      >
        Add Question
      </button>
    </div>
  );
};

export default QuestionsInputInterface;

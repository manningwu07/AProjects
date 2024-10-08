"use client";
import React, { useState } from "react";
import { MdOutlineRefresh } from "react-icons/md";
import { QuestionFormat } from "@/types/questions";

interface Props {
  questions: QuestionFormat[];
  currentQuestionIndex: number;
}

const CheckForUnderstanding: React.FC<Props> = ({
  questions,
  currentQuestionIndex,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const question = questions[currentQuestionIndex]!;

  const handleSelectOption = (id: string) => {
    if (!submitted) {
      if (question.type === "mcq") {
        setSelectedOptions([id]); // Ensure only one option can be selected at a time
      } else {
        setSelectedOptions((prev) =>
          prev.includes(id)
            ? prev.filter((optionId) => optionId !== id)
            : [...prev, id],
        ); // Toggle selection for multi-answer
      }
    }
  };

  const handleSubmit = () => {
    if (selectedOptions.length > 0) {
      setSubmitted(true);
      const allCorrect =
        question.type === "mcq"
          ? question.correct.includes(selectedOptions[0]!)
          : question.correct.length === selectedOptions.length &&
            question.correct.every((id) => selectedOptions.includes(id));
      setIsCorrect(allCorrect);
    }
  };

  const isAnswerCorrect = (id: string) => {
    return question.correct.includes(id);
  };

  const handleRetry = () => {
    setSubmitted(false);
    setSelectedOptions([]);
    setIsCorrect(null);
  };

  return (
    <div className="max-w-6xl bg-primary-foreground p-4 md:p-6 lg:p-8">
      <div
        className="markdown text-xl font-bold md:text-2xl lg:text-3xl"
        dangerouslySetInnerHTML={{ __html: question.body }}
      />
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {question.options.map((option) => (
          <button
            key={option.id}
            className={`flex items-center justify-center rounded-lg border px-6 py-4 md:text-lg lg:text-xl
            ${
              submitted
                ? isAnswerCorrect(option.id)
                  ? selectedOptions.includes(option.id)
                    ? "border-green-700 bg-green-300"
                    : "border-green-700 bg-green-100"
                  : selectedOptions.includes(option.id)
                    ? "border-red-700 bg-red-300"
                    : "border-gray-300"
                : selectedOptions.includes(option.id)
                  ? "border-blue-500 bg-blue-100"
                  : "border-black bg-zinc-50"
            }
            `}
            onClick={() => handleSelectOption(option.id)}
            disabled={submitted}
          >
            {option.value}
          </button>
        ))}
      </div>
      {!submitted ? (
        <button
          className="mx-auto mt-4 block rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Submit
        </button>
      ) : (
        <div className="sm: mt-4 flex justify-center gap-4">
          <button
            className={`rounded px-6 py-2 text-white ${isCorrect ? "bg-green-500" : "bg-red-500"}`}
            disabled
          >
            {isCorrect ? "Correct" : "Incorrect"}
          </button>

          <button
            className="flex items-center rounded bg-gray-500 py-2 pl-3 pr-4 text-white hover:bg-gray-600"
            onClick={handleRetry}
          >
            <MdOutlineRefresh size={24} style={{ color: "white" }} />

            <span>Retry</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckForUnderstanding;

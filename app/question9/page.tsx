"use client";
import { useState } from "react";

export default function QuizQuestion() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: "A", text: "1896" },
    { id: "B", text: "1990" },
    { id: "C", text: "1984" },
    { id: "D", text: "1880" },
  ];

  const handleSelect = () => {
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
      In which year were the first modern Olympic Games held?
      </h2>

      <div className="space-y-3">
        {options.map((option) => (
          <label
            key={option.id}
            className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer ${
              selectedOption === option.id
                ? "border-green-500 bg-green-100"
                : "border-gray-300"
            }`}
            onClick={() => handleSelect()}
          >
            <span className="flex items-center space-x-2">
              <span className="font-semibold">{option.id}</span>
              <span>{option.text}</span>
            </span>

            {/* <span
              className={`w-5 h-5 flex items-center justify-center rounded-full border ${
                selectedOption === option.id ? "bg-green-500 border-green-500" : "border-gray-400"
              }`}
            >
              {selectedOption === option.id && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              )}
            </span> */}
          </label>
        ))}
      </div>

      <button
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg w-full font-semibold hover:bg-green-700 transition"
        disabled={!selectedOption}
      >
        Submit Answer
      </button>
    </div>
  );
}





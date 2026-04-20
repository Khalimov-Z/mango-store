"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuiz } from "@/hooks/useQuiz";
import { Button } from "@/components/ui/Button";

const QUESTIONS = [
  {
    id: "room",
    question: "Какую комнату вы обустраиваете?",
    options: [
      { label: "🛋 Гостиная (нужен диван)", value: "living_room" },
      { label: "🪑 Спальня или кабинет (кресло)", value: "bedroom" },
      { label: "✨ И то, и другое", value: "both" }
    ]
  },
  {
    id: "budget",
    question: "Какой у вас примерный бюджет?",
    options: [
      { label: "💵 До 20 000 руб.", value: "budget" },
      { label: "💎 От 20 000 руб.", value: "premium" },
      { label: "🤷 Не имеет значения", value: "any" }
    ]
  },
  {
    id: "style",
    question: "Какой стиль вам ближе?",
    options: [
      { label: "🏢 Современный лофт", value: "loft" },
      { label: "🌲 Скандинавский уют", value: "scandi" },
      { label: "🏡 Классика", value: "classic" }
    ]
  }
];

export default function QuizPage() {
  const router = useRouter();
  const { saveResult } = useQuiz();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleSelect = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      saveResult({
        room: answers["room"] || "both",
        budget: answers["budget"] || "any",
        style: answers["style"] || "scandi"
      });
      router.push("/recommendations");
    }
  };

  const currentQ = QUESTIONS[currentStep];

  return (
    <div className="max-w-2xl mx-auto w-full mt-8 sm:mt-12 mb-24 px-4">
      <div className="bg-white p-6 sm:p-12 rounded-3xl shadow-sm border border-stone-100 relative">
        <div className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4">
          Шаг {currentStep + 1} из {QUESTIONS.length}
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-stone-100 h-2 rounded-full mb-8 overflow-hidden">
          <div 
            className="bg-orange-500 h-full transition-all duration-500 ease-out"
            style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
          />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-8 leading-tight">
          {currentQ.question}
        </h1>

        <div className="space-y-4 mb-8">
          {currentQ.options.map(option => {
            const isSelected = answers[currentQ.id] === option.value;
            return (
              <button
                key={option.value}
                onClick={() => handleSelect(currentQ.id, option.value)}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between group ${
                  isSelected 
                    ? "border-orange-500 bg-orange-50" 
                    : "border-stone-100 hover:border-orange-200 hover:bg-stone-50"
                }`}
              >
                <span className={`text-base sm:text-lg font-medium transition-colors ${isSelected ? "text-orange-600" : "text-stone-700 group-hover:text-stone-900"}`}>
                  {option.label}
                </span>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${isSelected ? "border-orange-500 bg-orange-500" : "border-stone-300"}`}>
                  {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-stone-100">
          <button 
            disabled={currentStep === 0}
            onClick={() => setCurrentStep(prev => prev - 1)}
            className="text-stone-400 hover:text-stone-600 font-medium disabled:opacity-0 transition-colors cursor-pointer"
          >
            ← Назад
          </button>
          <Button 
            size="lg" 
            onClick={handleNext} 
            disabled={!answers[currentQ.id]}
            className="shadow-orange-500/20 shadow-lg w-full sm:w-auto ml-4"
          >
            {currentStep === QUESTIONS.length - 1 ? "Смотреть результат" : "Далее →"}
          </Button>
        </div>
      </div>
    </div>
  );
}

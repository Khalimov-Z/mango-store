"use client";
import { useState, useEffect } from "react";

export interface QuizResult {
  room: string | null;
  budget: string | null;
  style: string | null;
}

export function useQuiz() {
  const [result, setResult] = useState<QuizResult | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const stored = localStorage.getItem("mango_quiz_result");
    if (stored) {
      try {
        setResult(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse quiz results", e);
      }
    }
  }, []);

  const saveResult = (newResult: QuizResult) => {
    setResult(newResult);
    localStorage.setItem("mango_quiz_result", JSON.stringify(newResult));
  };

  const clearResult = () => {
    setResult(null);
    localStorage.removeItem("mango_quiz_result");
  };

  return {
    result,
    saveResult,
    clearResult,
    isMounted
  };
}

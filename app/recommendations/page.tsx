"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuiz } from "@/hooks/useQuiz";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/Button";
import productsData from "@/data/products.json";
import Link from "next/link";

export default function RecommendationsPage() {
  const { result, isMounted, clearResult } = useQuiz();
  const router = useRouter();
  const [recommended, setRecommended] = useState(productsData);

  useEffect(() => {
    if (!isMounted) return;
    
    // Protect route if no quiz results
    if (!result) {
      router.push("/quiz");
      return;
    }

    let filtered = [...productsData];

    if (result.room === "living_room") {
      filtered = filtered.filter(p => p.category === "sofa");
    } else if (result.room === "bedroom") {
      filtered = filtered.filter(p => p.category === "armchair");
    }

    if (result.budget === "budget") {
      filtered = filtered.filter(p => p.price <= 20000);
    } else if (result.budget === "premium") {
      filtered = filtered.filter(p => p.price > 20000);
    }
    
    // Fallback if filters are too strict and return 0 matches
    if (filtered.length === 0) {
      filtered = productsData.slice(0, 3);
    }

    setRecommended(filtered);
  }, [result, isMounted, router]);

  if (!isMounted || !result) {
    return <div className="min-h-[50vh] flex items-center justify-center text-stone-400">Анализируем ответы...</div>;
  }

  return (
    <div className="space-y-12">
      <section className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-stone-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-orange-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-4">
          Мебель специально <br className="hidden sm:block" /> для вашего запроса! ✨
        </h1>
        <p className="text-stone-500 max-w-2xl mx-auto mb-8">
          Опираясь на ваши ответы, мы сузили выбор до самых подходящих моделей. 
          Теперь вы можете не тратить время на поиски.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => { clearResult(); router.push("/quiz"); }} variant="outline">
            Пройти тест заново
          </Button>
          <Link href="/">
            <Button variant="ghost">В обычный каталог</Button>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-stone-900 mb-6">Персональная подборка:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recommended.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

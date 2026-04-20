"use client";
import { useState } from "react";
import { ProductCard } from "./ProductCard";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  dimensions: string;
  isInStock: boolean;
  image: string;
}

export function Catalog({ initialProducts }: { initialProducts: Product[] }) {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("default");

  let filtered = [...initialProducts];

  if (filter !== "all") {
    filtered = filtered.filter(p => p.category === filter);
  }

  if (sort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center bg-white p-4 rounded-2xl shadow-sm border border-stone-100">
        <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
          <button 
            onClick={() => setFilter("all")} 
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-colors whitespace-nowrap ${filter === "all" ? "bg-stone-900 text-white shadow-md" : "bg-stone-100 text-stone-600 hover:bg-stone-200"}`}
          >
            Все товары
          </button>
          <button 
            onClick={() => setFilter("sofa")} 
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-colors whitespace-nowrap ${filter === "sofa" ? "bg-stone-900 text-white shadow-md" : "bg-stone-100 text-stone-600 hover:bg-stone-200"}`}
          >
            Диваны
          </button>
          <button 
            onClick={() => setFilter("armchair")} 
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-colors whitespace-nowrap ${filter === "armchair" ? "bg-stone-900 text-white shadow-md" : "bg-stone-100 text-stone-600 hover:bg-stone-200"}`}
          >
            Кресла
          </button>
        </div>

        <select 
          className="bg-stone-100 border-none text-stone-600 text-sm font-medium rounded-xl px-5 py-2.5 focus:ring-2 focus:ring-orange-500 outline-none w-full sm:w-auto cursor-pointer"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Сортировка по умолчанию</option>
          <option value="price-asc">Сначала дешевые</option>
          <option value="price-desc">Сначала дорогие</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filtered.length === 0 && (
        <div className="text-center py-20 bg-white rounded-2xl border border-stone-100 shadow-sm">
          <span className="text-4xl block mb-4">🔍</span>
          <h3 className="text-lg font-bold text-stone-900">Товары не найдены</h3>
          <p className="text-stone-500 mt-2">Попробуйте изменить параметры фильтрации.</p>
        </div>
      )}
    </div>
  );
}

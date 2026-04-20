import { Catalog } from "@/components/Catalog";
import products from "@/data/products.json";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <section className="bg-orange-50 rounded-3xl p-8 sm:p-12 md:p-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 border border-orange-100 shadow-sm relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-50 pointer-events-none" />
        
        <div className="flex-1 space-y-6 relative z-10">
          <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 font-bold text-xs rounded-full uppercase tracking-widest mb-2">
            Новая коллекция
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Стильная мебель <br /> не должна быть <br /> 
            <span className="text-orange-500">дорогой.</span>
          </h1>
          <p className="text-lg text-stone-600 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Обустройте свой дом нашими уютными диванами и стильными креслами по цене, которая вас действительно порадует.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="#catalog">
              <Button size="lg" className="w-full sm:w-auto shadow-orange-500/20 shadow-lg">Смотреть каталог</Button>
            </Link>
            <Link href="/quiz">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white hover:bg-orange-50">Пройти квиз</Button>
            </Link>
          </div>
        </div>

        {/* Dummy image block for aesthetic layout balance on desktop */}
        <div className="hidden md:block w-72 h-72 bg-gradient-to-tr from-orange-200 to-orange-100 rounded-full shrink-0 relative z-10 shadow-inner flex items-center justify-center text-orange-400 text-opacity-50">
           <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M4 18v3h3v-3h10v3h3v-6H4v3zm15-8h3v3h-3v-3zM2 10h3v3H2v-3zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"/></svg>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: "🚚", title: "Бесплатная доставка", desc: "При заказе от 15 000 ₽" },
          { icon: "🛡️", title: "Гарантия 1 год", desc: "На всю мебель в каталоге" },
          { icon: "↩️", title: "Возврат 30 дней", desc: "Если что-то не подошло" },
          { icon: "💬", title: "Поддержка в WhatsApp", desc: "Ответим за 15 минут" },
        ].map((item) => (
          <div key={item.title} className="bg-white rounded-2xl p-5 border border-stone-100 shadow-sm flex flex-col items-center text-center gap-2 hover:-translate-y-1 transition-transform duration-300">
            <span className="text-3xl">{item.icon}</span>
            <p className="font-bold text-stone-800 text-sm leading-tight">{item.title}</p>
            <p className="text-xs text-stone-400">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="scroll-mt-24">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <h2 className="text-3xl font-bold text-stone-900">Популярные модели</h2>
            <p className="text-stone-500 mt-2">Выберите идеальную мебель для вашего отдыха</p>
          </div>
        </div>
        
        {/* Pass initial data from server JSON directly to Client Component */}
        <Catalog initialProducts={products} />
      </section>
    </div>
  );
}

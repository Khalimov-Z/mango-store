import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-stone-50 border-t border-stone-100 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <Link href="/" className="font-bold text-2xl text-orange-500 tracking-tight">
            Mango
          </Link>
          <p className="text-stone-500 mt-2 text-sm max-w-sm">
            Бюджетная и стильная мебель для вашего дома. Мы создаем уют доступным.
          </p>
        </div>

        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/quiz" className="text-stone-500 hover:text-orange-500 transition-colors">Квиз</Link>
          <Link href="/contacts" className="text-stone-500 hover:text-orange-500 transition-colors">Контакты</Link>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-stone-200/50 text-center text-xs text-stone-400">
        © {new Date().getFullYear()} Mango Store.
      </div>
    </footer>
  );
}

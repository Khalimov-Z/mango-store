// No client-side imports needed

export default function ContactsPage() {
  return (
    <div className="max-w-4xl mx-auto w-full space-y-12 mt-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-stone-900">Свяжитесь с нами</h1>
        <p className="text-stone-500 text-lg">Поможем выбрать, оформить заказ или ответим на любые вопросы.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center text-center space-y-4 hover:-translate-y-1 transition-transform">
          <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <h3 className="font-bold text-xl text-stone-900">По номеру телефона (WhatsApp)</h3>
          <p className="text-stone-500 flex-1">+7 (999) 000-12-34</p>
          <a href="https://wa.me/79990001234" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl h-11 px-6 text-base w-full border-2 border-green-500 text-green-600 hover:bg-green-50">
            Написать в WhatsApp
          </a>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center text-center space-y-4 hover:-translate-y-1 transition-transform">
          <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </div>
          <h3 className="font-bold text-xl text-stone-900">По электронной почте</h3>
          <p className="text-stone-500 flex-1">hello@mango-store.ru</p>
          <a href="mailto:hello@mango-store.ru" className="inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl h-11 px-6 text-base w-full bg-orange-500 text-stone-50 hover:bg-orange-600 shadow-md">
            Отправить письмо
          </a>
        </div>
      </div>
    </div>
  );
}

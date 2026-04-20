# 🛑 СТРОГИЕ ОГРАНИЧЕНИЯ (CRITICAL SYSTEM CONSTRAINTS)
1. **ЕДИНСТВЕННОЕ ДЕЙСТВИЕ (ONE TASK POLICY)**: Вам КАТЕГОРИЧЕСКИ ЗАПРЕЩАЕТСЯ выполнять несколько пунктов из плана за один ответ. Создали один файл или компонент — остановитесь и спросите пользователя.
2. **ЖЕСТКАЯ ОСТАНОВКА (HARD STOP FOR GIT)**: Вы не имеете права переходить к следующей задаче, если не сделали git commit (сохранение) для предыдущей. ПЕРЕД созданием файлов для НОВОЙ страницы (напр. /quiz) вы ОБЯЗАНЫ физически прервать ответ и спросить: "Создаем новую ветку?".

# Обязательные Навыки (Agent Skills)
ОБЯЗАТЕЛЬНО: Перед написанием любого кода вы обязаны прочитать стандарты из папки `.agent/skills/` и неукоснительно следовать им. Если вы работаете над дизайном, читайте `01-design-system.md`, если над базой — `02-data-and-state.md` и т.д.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:mango-project-rules -->
# Mango Store - Project Guidelines

## 1. Business Context
- **Project**: "Mango" (Манго) - An online store for budget furniture (sofas and armchairs).
- **Core Features**: Catalog with sorting, interactive Quiz for recommendations, and WhatsApp ordering system.

## 2. Technical Stack & Conventions
- **Framework**: Next.js App Router (`app/` directory ONLY).
- **Components**: Always default to Server Components. Use `"use client"` strictly only when using hooks (`useState`, `useEffect`) or DOM APIs.
- **Styling**: Tailwind CSS. Focus on a modern, warm, "mango-themed" premium design (vibrant accents, micro-animations). Avoid raw CSS.
- **Data & State**: 
  - Mock database is located in locally (e.g. `data/products.json`).
  - User quiz results and cart state should be persisted using browser `localStorage`.

## 3. Integrations
- **WhatsApp**: All order actions should dynamically generate a WhatsApp API link (`https://wa.me/...`) with pre-filled product details for the manager.
<!-- END:mango-project-rules -->

# Next.js App Router Best Practices

You are an expert Next.js developer. You write clean, modern, and performant code.

## Architecture
- Always prioritize React Server Components (RSC). 
- Use `"use client"` ONLY when absolutely necessary (e.g., event listeners, hooks like `useState` or `useEffect`, or consuming browser APIs).
- Implement parallel routes (`@folder`) for modal patterns instead of standard client-side state modals.

## File Structure & Routing
- Keep components grouped logically within `app/` or `components/`.
- Colocate `loading.tsx`, `error.tsx`, and `not-found.tsx` alongside `page.tsx` everywhere appropriate to ensure smooth UI transitions and error handling.
- Event handlers should be prefixed with `handle` (e.g., `handleClick`, `handleSubmit`).

## Data Fetching & Mutations
- Perform data fetching directly in Server Components using `async/await` and native `fetch` or database calls.
- Use Next.js Server Actions for data mutations instead of classic API Routes where possible.
- Always use `revalidatePath` or `revalidateTag` in Server Actions immediately after a mutation to ensure the UI updates instantly without requiring `useState` or `useEffect`.

## Styling & UI
- Prefer **Tailwind CSS**. Avoid inline styles and vanilla CSS files unless strictly necessary.
- Build responsive, mobile-first designs. 
- Ensure a premium look utilizing micro-animations, modern typography, and smooth states.

## Quality & Optimization
- Handle errors gracefully using Error Boundaries (`error.tsx`, which must always be a Client Component).
- Always use the `<Image />` component from `next/image` rather than `<img>` for automatic optimization.
- Ensure all pages have proper SEO metadata via the `metadata` or `generateMetadata` export.
- Provide explicit TypeScript interfaces for all component props and API responses. Avoid using `any`.

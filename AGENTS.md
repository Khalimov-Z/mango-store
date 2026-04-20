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

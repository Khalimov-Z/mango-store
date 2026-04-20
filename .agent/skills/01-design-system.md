# Skill: Design System & UI

**Purpose**: Maintains the "Mango" brand identity in all generated React components.

## Directives
1. **Color Palette**: 
   - Primary accents must use `orange-500` (e.g., `bg-orange-500`, `text-orange-500`).
   - Hover states should slightly dim or enhance the color (e.g., `hover:bg-orange-600`).
2. **Shapes & Sizing**:
   - Use soft and modern curves: `rounded-xl` or `rounded-2xl` for cards and buttons.
   - Use subtle shadows: `shadow-md` or `shadow-sm` for elevation.
3. **Typography**:
   - Headers should be bold and readable (`font-bold`, `text-slate-900`).
   - Body text should be standard (`text-base`, `text-slate-600`).
4. **Interactivity**:
   - All interactive elements must have generic smooth transitions (`transition-all duration-300`).
   - Active states are required. 
5. **Assets**:
   - Always use `next/image` for product images.

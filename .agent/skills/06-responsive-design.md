# Skill: Responsive Design

**Purpose**: Enforces mobile-first responsive coding standards using Tailwind CSS.

## Directives
1. **Mobile-First Approach**: Always write styles with the assumption that the default screen is a mobile phone (375px width).
   - E.g., `flex-col`, `w-full`, `text-sm`.
2. **Progressive Enhancement**: Expand the layout for tablets and desktops using the Tailwind breakpoints `md:` (≥768px) and `lg:` (≥1024px).
   - E.g., `md:flex-row`, `lg:w-1/2`, `md:text-base`.
3. **Common Responsive Pitfalls**: Ensure all image containers have well-defined responsive aspect ratios or height queries. Prevent horizontal overflow by ensuring root containers have `overflow-x-hidden` if necessary.

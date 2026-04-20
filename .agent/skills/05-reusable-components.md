# Skill: Reusable Components (DRY)

**Purpose**: Ensures the React architecture remains scalable and maintains the DRY (Don't Repeat Yourself) principle.

## Directives
1. **Pre-Flight Check**: BEFORE constructing a new UI element like a Button, ProductCard, Input, or Modal, you MUST check if an equivalent component already exists within `components/` or `components/ui/`.
2. **Reuse Strategy**:
   - If an element exists, import it and utilize it.
   - Do NOT duplicate CSS and markup inline natively un-less it is highly unique.
3. **Modification over Duplication**: If the existing component lacks a specific required state or size, modify the shared component safely by adding new props (e.g., `variant="outline"` or `size="lg"`) instead of duplicating the entire component folder.

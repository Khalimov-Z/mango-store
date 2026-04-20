# Skill: Data and State Management

**Purpose**: Codifies how to handle mock database structures and persist user state locally.

## Database (Mock)
Products are stored and read from `data/products.json`.
The `Product` schema strictly follows:
```typescript
interface Product {
  id: string; // e.g., 'mango-sofa-001'
  name: string; // e.g., 'Диван Лофт'
  category: 'sofa' | 'armchair';
  price: number; 
  dimensions: string; // e.g., '200x90x85 см'
  isInStock: boolean;
  image: string; // path to public folder image
}
```

## Local State
1. **localStorage Keys**:
   - Cart Items: Use key `mango_cart`
   - Quiz Results: Use key `mango_quiz_result`
2. **Accessing LocalStorage**: Only access `localStorage` inside `useEffect` or utility functions running on the client side (since Next.js components are server-rendered by default and accessing `window` will throw an error).

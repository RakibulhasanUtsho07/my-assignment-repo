# Mastering Type Narrowing in TypeScript

Type narrowing lets you refine a variable's type inside a conditional block, so you can safely access specific properties and methods based on runtime checks. TypeScript provides several built-in narrowing mechanisms.

## Using the `typeof` Operator

The `typeof` operator is commonly used to narrow primitive types such as `string`, `number`, and `boolean`:

```typescript
function printId(id: number | string): void {
  if (typeof id === "string") {
    // id is narrowed to string here
    console.log(id.toUpperCase());
  } else {
    // id is narrowed to number here
    console.log(id);
  }
}
```

Inside the `if` block, TypeScript knows that `id` is a `string`, so calling `toUpperCase()` is safe. In the `else` block, `id` is narrowed to `number`.
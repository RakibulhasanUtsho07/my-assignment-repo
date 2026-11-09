# Type Aliases vs. Interfaces in TypeScript

TypeScript gives you two main ways to describe the shape of an object: type aliases and interfaces. For simple objects they often look interchangeable, but understanding their core differences helps you write cleaner, more maintainable code.

## Interfaces and Declaration Merging

An interface defines a contract for an object's shape. It also supports declaration merging: if you declare the same interface more than once, TypeScript combines all the declarations into one. This makes interfaces a good fit for public APIs and object-oriented structures.

```typescript
interface User {
  name: string;
}

interface User {
  age: number;
}

// User now has both properties
const user: User = { name: "Rahim", age: 25 };
```

Here, the two `User` declarations merge, so a valid `User` must include both `name` and `age`.
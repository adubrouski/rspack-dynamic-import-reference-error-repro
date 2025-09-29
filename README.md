# rspack-repro

- [Rspack website](https://rspack.dev/)
- [Rspack repo](https://github.com/web-infra-dev/rspack)

A GitHub template for creating a Rspack minimal reproducible example.

# How to reproduce the issue

1. Clone the repo
2. Install the dependencies (`yarn install`)
3. Run `yarn run dev:rspack`
4. After the build finishes, open the project in your browser. You should see the following error in the browser console: 
   ```
   Uncaught ReferenceError: someFunction is not defined
    at ./src/index.ts (index.ts:3:1)
    at __webpack_require__ (index.ts:3:1)
    at rspack_unique_id:1:1
    at rspack_unique_id:1:1
   ```
5. In ./src/index.ts, change this code:
   ```typescript
    import { someFunction } from "./SomeFunction";
    
    import("./Chunk")
      .then(someFunction("chunk"))
   ``` 
   to this:
   ```typescript
    import { someFunction } from "./SomeFunction";
    
    import("./Chunk")
      .then((module) => someFunction("chunk")(module))
   ``` 
   Now you should see the correct log in the console.

> Note: With Rspack versions below 1.5.6, this issue does not occur.

# Actual behavior

- An expression like `.then((module) => someFunction("chunk")(module))` throws a ReferenceError.

# Expected behavior

- The expression `.then((module) => someFunction("chunk")(module))` should work correctly without throwing a ReferenceError.

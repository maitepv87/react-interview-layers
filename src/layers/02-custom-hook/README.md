# 02 – Custom Hook

This scenario encapsulates the `fetch` logic inside a custom hook called `useFetch`, allowing it to be reused across multiple components. The hook manages `loading`, `error`, and `data` states, and automatically triggers when a URL is provided.

## Techniques Used

- `useEffect` to perform the request
- `useState` to manage state
- Custom hook (`useFetch`) for modularity

## Next Step

Use Context to share the data state across components.

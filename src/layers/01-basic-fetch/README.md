# 01 – Basic Fetch

This component connects to an external API (`jsonplaceholder`) and displays a list of users. It represents the first critical step in any technical task: validating that the data source responds correctly and that the basic rendering works.

## Techniques Used

- `fetch` to retrieve data
- `useEffect` to trigger the request on mount
- `useState` to manage loading, error, and data states

## Next Step

Encapsulate this logic into a custom hook (`useFetch`) to make it reusable across different scenarios.

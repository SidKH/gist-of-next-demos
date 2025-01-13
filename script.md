1. Say you have a client component that fetches data with SWR
2. And revalidates this data on click
3. In this case, the data fetching happens entirely on the client
4. If we check the HTML response, we only see the loading state
5. But what if you want to prerender the data on the server?
6. Go to the nearest parent server component
7. Wrap your client component in a SWRConfig
8. And pass the fallback for your data key
9. No need to await it, we are passing a promise
10. Now get back to your client component
11. And set revalidateOnMount to false
12. Now the initial data is prerendered on the server
13. And revalidation happens on the client

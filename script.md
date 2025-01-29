1. Don't query db directly in your server components.
2. You can do that.
3. But there are a few issues with this approach.
4. First, it just get's messy pretty quickly.
5. Second, you can accidently leak your queries into your client bundle.
6. Third, if you need to provide an api route for the same data, you'll have to duplicate your logic.
7. Instead, move your queries to a data access layer.
8. You can protect them from leaking to the client with `server-only`.
9. And reuse them in your api routes.

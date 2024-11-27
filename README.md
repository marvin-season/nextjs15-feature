## S vs SSG vs SSR vs ISR

```text
○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand
```
(ISR)  相比于 (SSG) 增加了 `export const revalidate = 10`

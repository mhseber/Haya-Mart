# Next.js Data Fetching Guide

This project demonstrates different ways of **data fetching** in Next.js.  
Next.js supports both **Server-Side Rendering (SSR)**, **Static Site Generation (SSG)**, and **Client-Side Fetching**.

---

## 🔹 1. Server-Side Rendering (SSR)

- Runs **on every request**
- Fetches fresh data from the server
- Implemented using `getServerSideProps` or in App Router with **async Server Components**

🔹 2. Static Site Generation (SSG)

Runs at build time

Data is pre-rendered and served as static HTML

Best for content that doesn’t change often

🔹 3. Client-Side Fetching

Runs in the browser after the page loads

Useful for user interaction, dashboards, or frequently updated data

Usually done with useEffect and fetch or libraries like SWR/React Query

✅ When to Use What?

SSR → data changes frequently, needs to be fresh (e.g., user profile, dashboard).

SSG → data is mostly static (e.g., blog, docs, product pages).

Client-Side Fetching → user-specific, interactive, or real-time updates.

⚡ Tech Stack Used

Next.js (App Router)

TailwindCSS (styling)

Fetch API

📌 Summary

This project shows how to fetch data in Next.js using:

SSR (Server-Side Rendering)

SSG (Static Site Generation)

Client-Side Fetching

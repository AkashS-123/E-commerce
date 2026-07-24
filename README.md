# Swoo Tech Mart — Login

A responsive login/sign-up flow built with React, Vite, TypeScript, and
Tailwind CSS, with client-side routing and dark/light mode.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- React Router v7
- lucide-react for icons

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check and build for production
npm run preview   # preview the production build locally
```

## Structure

```
src/
  components/
    Header.tsx              top nav, logo, cart/wishlist/account
    TopBar.tsx               hotline, order tracking, currency/language, theme toggle
    CategoryBar.tsx          search bar + shipping/return/payment perks
    Breadcrumb.tsx           page breadcrumb trail
    Footer.tsx               categories, company links, newsletter signup
    Layout.tsx                shared page shell (header + footer + <Outlet />)
    LoginIllustration.tsx    the login page's hero SVG artwork
  context/
    ThemeContext.tsx        light/dark mode state, persisted to localStorage
  pages/
    Home.tsx
    Login.tsx
    SignUp.tsx
    ForgotPassword.tsx
    NotFound.tsx
  App.tsx                    route table
  main.tsx                   app entry point
```

## Routing

| Path              | Page                           |
| ------------------ | ------------------------------- |
| `/`                | Home (placeholder storefront)  |
| `/login`           | Login                           |
| `/signup`          | Sign up                         |
| `/forgot-password` | Password reset request          |
| `*`                | 404                              |

## Notes

- The theme toggle (sun/moon icon in the top bar / header) switches a `dark`
  class on `<html>`; Tailwind's `dark:` variant handles the rest. The choice
  persists across reloads via `localStorage`.
- The login/sign-up forms are wired to local component state only — there's
  no backend, so submitting just validates required fields and navigates.
- Layout is mobile-first and tested down to small phone widths: the top
  utility bar collapses, the nav becomes a hamburger menu, and the login
  card stacks its illustration above the form on small screens.

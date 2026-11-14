# Muscle Memory

A simple exercise library: 42 exercises across seven muscle groups, each with sets, reps, equipment and step-by-step instructions.

**Live:** [musclememo.vercel.app](https://musclememo.vercel.app)

## Features

- Pick a muscle group, or search every exercise by name, group or equipment
- Filter by "no equipment" or "with equipment"
- Tick off exercises as you go, with a progress bar that resets each day
- Works at any screen size, with keyboard and screen-reader support

## Stack

Next.js 15 (App Router, static pages), TypeScript, Tailwind CSS 4.

## Editing exercises

All content lives in `src/lib/exercises.ts`. Every muscle-group page is generated from it.

## Running locally

```bash
npm install
npm run dev
```

# PANTONE Colors App

A web app that lists PANTONE colors.

> **Disclaimer:**
> This project is intended for non-commercial use only and is not associated with PANTONE.

## Motivation

After building [PANTONE Colors Scraper](https://github.com/ksergenozel/pantone-colors-scraper) to collect color data and [PANTONE Colors API](https://github.com/ksergenozel/pantone-colors-api) to serve it, I wanted to build a web app to list the colors.

## Features

This app lists PANTONE color data with pagination, search and one-click copy support in a responsive layout.

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Tanstack Query](https://tanstack.com/query/latest)

## Requirements

- [Node.js](https://nodejs.org/)

## Installation

Clone the repository:

```bash
git clone https://github.com/ksergenozel/pantone-colors-app.git
```

Navigate to the project folder:

```bash
cd pantone-colors-app
```

Install dependencies:

```bash
npm install
```

Create `.env` file from `.env.example`:

```bash
cp .env.example .env
```

Configure environment variables:

```bash
VITE_API_BASE_URL=http://localhost:3000/api
```

> This app requires a running instance of the [PANTONE Colors API](https://github.com/ksergenozel/pantone-colors-api). Make sure the API is running at the URL specified in your `.env` file.

## Usage

Development:

```bash
npm run dev
```

Production:

```bash
npm run build
```

```bash
npm run preview
```

## License

This project is licensed under the [MIT License](LICENSE).

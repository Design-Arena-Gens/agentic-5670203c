# Agentic Project Workspace

Modern Next.js 14 project that showcases an AI-assisted delivery workspace. The landing page highlights capability matrices, delivery timelines, and deployment recipes for engineering teams building with autonomous agents.

## Tech Stack

- [Next.js 14 (App Router)](https://nextjs.org/docs)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS-first styling with custom glassmorphism and gradient effects

## Getting Started

```bash
npm install
npm run dev
```

The application will be available at `http://localhost:3000`.

## Production Build

```bash
npm run build
npm start
```

## Linting

```bash
npm run lint
```

## Deployment

Use the provided GitHub Actions recipe or deploy manually with Vercel:

```bash
npx vercel deploy --prod --yes
```

Set the project name to `agentic-5670203c` for consistency with the production domain.

## Project Structure

```
├── app/
│   ├── globals.css        # Global theme & layout styling
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Landing page content
├── public/                # Static assets
├── package.json
├── tsconfig.json
└── README.md
```

## License

MIT — feel free to use and adapt. Contributions are welcome.

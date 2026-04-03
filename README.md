# Love Arena

A full-stack dating site built with Next.js, featuring user authentication, profiles, matching algorithm, and chat functionality.

## Setup

1. Install Node.js (version 18 or higher) from https://nodejs.org/

2. Install dependencies:

```bash
npm install
```

3. Set up the database:

```bash
npx prisma generate
npx prisma db push
```

4. Create a `.env.local` file with:

```
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
```

## Running the App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Features

- User registration and login
- Profile creation and editing
- Browse and like potential matches
- Matching system
- Chat with matches

## Tech Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- NextAuth.js for authentication
- Prisma with SQLite database
- bcryptjs for password hashing
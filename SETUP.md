# Local Development Guide

This guide will help you set up the `fire-app-hackathon` project for local development on both **Linux** and **Windows**.

---

## Prerequisites

- **Node.js** (v18+ recommended)
- **npm**, **yarn**, **pnpm**, or **bun** (choose one)
- **Python 3.8+**
- **pip** (Python package manager)
- **Git**
- (Optional) [Vercel CLI](https://vercel.com/download) for deployment experiments

---

## 1. Clone the Repository

```bash
git clone https://github.com/DevDs1989/fire-app-hackathon.git
cd fire-app-hackathon
```

---

## 2. Frontend Setup (Next.js App)

### a. Navigate to the Frontend Directory

```bash
cd frontend
```

### b. Install Dependencies

#### On Linux or Windows (any shell):

Using **npm**:
```bash
npm install
```

Or, using **yarn**:
```bash
yarn
```

Or, using **pnpm**:
```bash
pnpm install
```

Or, using **bun**:
```bash
bun install
```

### c. Start the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

- Visit [http://localhost:3000](http://localhost:3000) in your browser to view the app.
- You can edit files (e.g., `app/page.tsx`), and the server will auto-reload.

---

## 3. Backend Setup (Flask API)

### a. Navigate to the Backend Directory

```bash
cd ../backend
```

### b. (Optional) Create a Virtual Environment

- **Linux/macOS**:
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```
- **Windows**:
    ```powershell
    python -m venv venv
    .\venv\Scripts\activate
    ```

### c. Install Python Dependencies

```bash
pip install -r requirements.txt
```

### d. Run the Backend Server

```bash
python app.py
```

- The API will be available at [http://localhost:8080](http://localhost:8080).

---

## 4. Environment Variables

- Add an `.env` file in the `backend/` folder for any required environment variables.
- For the frontend, you can create a `.env.local` file in `frontend/` as needed.

---

## 5. Additional Notes

- **Linting/Formatting:**  
  The frontend uses ESLint and likely Tailwind CSS/PostCSS.
  - Run linter:  
    ```bash
    npm run lint
    # or
    yarn lint
    ```
- **Customizing Configs:**  
  - See `frontend/eslint.config.mjs`, `frontend/postcss.config.mjs`, and `frontend/next.config.ts` for customization.
- **Hot Reload:**  
  Both frontend (Next.js) and backend (Flask, using `debug=True`) support auto-reload on file changes.

---

## 6. Troubleshooting

- **Port conflicts:**  
  Make sure ports `3000` (frontend) and `8080` (backend) are free.
- **Python virtual environment activation issues:**  
  - On Windows, use `powershell` or `cmd` and ensure execution policy allows scripts.
- **Node version issues:**  
  Use [nvm](https://github.com/nvm-sh/nvm) (Linux/macOS) or [nvm-windows](https://github.com/coreybutler/nvm-windows) to manage Node.js versions.

---

## 7. Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Flask Documentation](https://flask.palletsprojects.com/)
- [Vercel Deployment Docs](https://vercel.com/docs)

---

Happy hacking! 🚀

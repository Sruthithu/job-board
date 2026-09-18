# Job Board Platform (MERN)

A responsive job board where users can view, filter, and post jobs.

## Features
- View job listings fetched from a REST API
- Filter jobs by category (Development, Design, Marketing)
- Search jobs by title or company
- Post a new job via a form (persists to backend)
- Fully responsive (mobile, tablet, desktop)
- Optional MongoDB persistence

## Tech Stack
- **Frontend:** React (Create React App), Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** In-memory (MongoDB optional)

## Getting Started

### Prerequisites
- Node.js v18+
- npm

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd job-board
```

### 2. Backend Setup
```bash
cd backend
npm install
npm run dev
```
Runs at `http://localhost:5000`

### 3. Frontend Setup (new terminal)
```bash
cd frontend
npm install
npm start
```
Runs at `http://localhost:3000`

### 4. Open in browser
Navigate to `http://localhost:3000`

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/jobs`   | Get all jobs (optional `?category=Design`) |
| POST   | `/jobs`   | Create a new job |

### Example POST body
```json
{
  "title": "Backend Engineer",
  "company": "Acme",
  "category": "Development",
  "location": "Remote",
  "description": "Build APIs with Node.js"
}
```

## License
MIT
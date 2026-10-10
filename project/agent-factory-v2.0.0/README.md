# AI Agent Factory v2.0.0

A modern full-stack application for creating and managing AI agents.

## Architecture

- **Backend**: FastAPI (Python) - RESTful API for agent management
- **Frontend**: Next.js (TypeScript) - Modern React-based UI
- **Deployment**: Docker Compose for local development

## Quick Start

### Prerequisites

- Docker & Docker Compose
- OR Python 3.11+ and Node.js 20+

### Using Docker Compose (Recommended)

```bash
docker compose up --build
```

Access the applications:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs

### Manual Setup

#### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Project Structure

```
agent-factory-v2.0.0/
├── backend/
│   ├── main.py              # FastAPI application
│   ├── requirements.txt     # Python dependencies
│   └── Dockerfile
├── frontend/
│   ├── src/app/             # Next.js app router
│   ├── package.json         # Node.js dependencies
│   ├── tsconfig.json        # TypeScript configuration
│   └── Dockerfile
├── docker-compose.yml       # Docker orchestration
└── README.md
```

## API Endpoints

- `GET /` - Root endpoint with API status
- `GET /health` - Health check endpoint
- `GET /docs` - Interactive API documentation (Swagger UI)

## Development

### Running Tests

```bash
# Backend tests (pytest to be added)
cd backend
pytest

# Frontend tests
cd frontend
npm test
```

### Code Style

- Backend: Follow PEP 8 guidelines
- Frontend: ESLint and Prettier configured

## License

MIT

"""AI Agent Factory Backend - FastAPI Application."""

from fastapi import FastAPI

app = FastAPI(
    title="AI Agent Factory",
    description="A factory for creating and managing AI agents",
    version="2.0.0"
)


@app.get("/", tags=["Health"])
async def root() -> dict[str, str]:
    """Root endpoint returning API status."""
    return {"status": "ok", "version": "2.0.0"}


@app.get("/health", tags=["Health"])
async def health_check() -> dict[str, str]:
    """Health check endpoint for monitoring."""
    return {"status": "healthy"}


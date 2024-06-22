from fastapi import APIRouter, HTTPException # type: ignore
from services.gemini_service import GeminiService

router = APIRouter()

gemini_service = GeminiService()

@router.post("/generate")
async def generate_text(prompt: str):
    if not prompt:
        raise HTTPException(status_code=400, detail="Prompt is required")

    response = gemini_service.generate_text(prompt)
    return {"response": response}
from fastapi import APIRouter, HTTPException # type: ignore
from pydantic import BaseModel # type: ignore
from services.gemini_service import GeminiService

router = APIRouter()

gemini_service = GeminiService()

class PromptRequest(BaseModel):
    prompt: str

@router.post("/generate")
async def generate_text(request: PromptRequest):
    if not request.prompt:
        raise HTTPException(status_code=400, detail="Prompt is required")

    response = gemini_service.generate_text(request.prompt)
    return {"response": response}

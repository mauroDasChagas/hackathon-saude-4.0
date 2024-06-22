from fastapi import FastAPI # type: ignore
from fastapi.middleware.cors import CORSMiddleware # type: ignore
from controllers import gemini_controller

app = FastAPI()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(gemini_controller.router, prefix="/gemini", tags=["gemini"])

@app.get("/")
def read_root():
    return { "message": "Hello, codando às traças" }
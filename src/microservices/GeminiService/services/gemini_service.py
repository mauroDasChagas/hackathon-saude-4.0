import google.generativeai as genai # type: ignore
from dotenv import load_dotenv # type: ignore
import os

load_dotenv()

GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')

class GeminiService:
    def __init__(self):
        genai.configure(api_key=GEMINI_API_KEY)
        self.model = genai.GenerativeModel(model_name="gemini-1.5-flash")

    def generate_text(self, prompt):
        response = self.model.generate_content(prompt)
        return response.text
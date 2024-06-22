# imagem base oficial do Python
FROM python:3.10-slim

# diretório de trabalho dentro do contêiner
WORKDIR /app

# copiando os arquivos requirements.txt para o diretório de trabalho
COPY requirements.txt .

# instalando as dependências
RUN pip install --no-cache-dir -r requirements.txt

# copiando o conteúdo da pasta src/backend para o diretório de trabalho
COPY . .

# expondo a porta da aplicação
EXPOSE 8000

# comando para rodar a aplicação FastAPI usando uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
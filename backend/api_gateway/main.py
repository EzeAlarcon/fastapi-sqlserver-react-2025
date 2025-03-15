from fastapi import FastAPI, HTTPException, WebSocket
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI()

# configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://62.72.3.141:3000"],  # permite solicitudes desde el frontend tambien puedes cambiarlo a tu local
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos los métodos (GET, POST, etc.)
    allow_headers=["*"],  # Permite todos los encabezados
)

DB_SERVICE_URL = "http://db_service:8000"


# Lista para almacenar conexiones WebSocket activas
active_connections = []


# Ruta de WebSocket
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        await websocket.send_text(f"Message received: {data}")


@app.get("/users")
async def get_users():
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(f"{DB_SERVICE_URL}/users")
            response.raise_for_status()  # lanza una excepción si el código de estado no es 200
            return response.json()
    except httpx.HTTPStatusError as e:
        raise HTTPException(status_code=e.response.status_code, detail="Error fetching users")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/users")
async def create_user(user: dict):
    try:
        async with httpx.AsyncClient() as client:
            response = await client.post(f"{DB_SERVICE_URL}/users", json=user)
            response.raise_for_status()  # lanza una excepción si el código de estado no es 200
            return response.json()
    except httpx.HTTPStatusError as e:
        raise HTTPException(status_code=e.response.status_code, detail="Error creating user")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

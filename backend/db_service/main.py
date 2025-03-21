from fastapi import FastAPI, WebSocket, HTTPException
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import asyncio

DATABASE_URL = "postgresql://user:password@db:5432/mydatabase"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, index=True)
    correo = Column(String, unique=True, index=True)

Base.metadata.create_all(bind=engine)

app = FastAPI()

class UserCreate(BaseModel):
    nombre: str
    correo: str

# Lista de conexiones WebSocket
connections = []

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    connections.append(websocket)
    try:
        while True:
            data = await websocket.receive_text()
    except:
        connections.remove(websocket)

@app.get("/users")
def get_users():
    db = SessionLocal()
    users = db.query(User).all()
    db.close()
    return users

@app.post("/users")
async def create_user(user: UserCreate):
    db = SessionLocal()
    db_user = User(nombre=user.nombre, correo=user.correo)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    db.close()

    # Notificar a todos los clientes conectados
    for connection in connections:
        await connection.send_json({
            "evento": "nuevo_usuario",
            "data": {
                "id": db_user.id,
                "nombre": db_user.nombre,
                "correo": db_user.correo
            }
        })

    return db_user

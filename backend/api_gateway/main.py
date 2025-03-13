from fastapi import FastAPI, HTTPException
import httpx

app = FastAPI()

DB_SERVICE_URL = "http://db_service:8000"

@app.get("/users")
async def get_users():
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{DB_SERVICE_URL}/users")
        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail="Error fetching users")
        return response.json()

@app.post("/users")
async def create_user(user: dict):
    async with httpx.AsyncClient() as client:
        response = await client.post(f"{DB_SERVICE_URL}/users", json=user)
        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail="Error creating user")
        return response.json()

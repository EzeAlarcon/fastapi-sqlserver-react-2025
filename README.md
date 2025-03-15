# 🚀 FastAPI - SQL Server - React - WebSockets - Docker

# Prueba técnica - AZ Smart Technology

Este proyecto es una aplicación full-stack que integra FastAPI, SQL Server, React y WebSockets dentro de un entorno contenedorizado con Docker.Incluye un microservicio de base de datos, un API Gateway, y un frontend en React con actualizaciones en tiempo real.

## 📂 Estructura del Proyecto

### **Backend**
- **`api_gateway/`** 📡 Microservicio API Gateway  
  - `Dockerfile`  
  - `main.py` 🔀 Lógica del API Gateway  
  - `requirements.txt` 📦 Dependencias  

- **`db_service/`** 🛢️ Microservicio de Base de Datos  
  - `Dockerfile`  
  - `main.py` 🔗 API para manejar usuarios  
  - `models.py` 🏗️ Definición de la base de datos  
  - `requirements.txt` 📦 Dependencias  

---

### **Frontend** 🎨 Aplicación React  
- **`frontend/`**  
  - `Dockerfile`  
  - `package.json`  
  - **`public/`**  
  - **`src/`**  
    - **`components/`**  
      - `UserForm.js` 📝 Formulario para agregar usuarios  
      - `UserList.js` 📋 Lista de usuarios  
    - `App.js` 🎯 Componente principal  
    - `index.js` 🏁 Punto de entrada  

---

### **Archivos Raíz**  
- `docker-compose.yml` 🐳 Orquestación de los contenedores  
- `README.md` 📖 Documentación del proyecto

---
# 🛠️ Instalación y Ejecución

1️⃣ Clonar el Repositorio

Primero, clona el repositorio en tu máquina local:


git clone https://github.com/EzeAlarcon/fastapi-sqlserver-react-2025.git


cd fastapi-sqlserver-react-2025



2️⃣ Construir y Levantar los Contenedores con Docker


Asegúrate de tener Docker y Docker Compose instalados en tu sistema. Si no los tienes, descárgalos desde:


    Docker: Guía de instalación oficial

    Docker Compose: Guía de instalación oficial

Luego, ejecuta el siguiente comando para construir y levantar los contenedores:
bash
Copy

docker compose up --build

Esto hará lo siguiente:

    ✅ Construir las imágenes necesarias.

    ✅ Crear y levantar los contenedores de backend, frontend y base de datos.

Si deseas ejecutar los contenedores en segundo plano, usa:
bash
Copy

docker compose up -d --build

Para verificar que los contenedores están corriendo, usa:
bash
Copy

docker ps

# 🌐 Acceso a la Aplicación

La aplicación está desplegada en un entorno de producción y también se puede probar en local.

# 🔹 En Producción


    Frontend: http://62.72.3.141:3000
    

    Backend (API Gateway): http://62.72.3.141:8001/docs
    

# 🔸 En Local


    Frontend: http://localhost:3000
    

    Backend: http://localhost:8001/docs
    

# 🔧 Configuración Personalizada

Si estás ejecutando el proyecto en local y necesitas cambiar la configuración de las direcciones IP, modifica el archivo main.py dentro de la carpeta api_gateway.

Ubica la siguiente línea en main.py:

python
Copy

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://62.72.3.141:3000"],  # Permitir solicitudes desde el frontend
    allow_credentials=True,
    allow_methods=["*"],  # Permitir todos los métodos (GET, POST, etc.)
    allow_headers=["*"],  # Permitir todos los encabezados
)

Si quieres usarlo en local, cambia la dirección IP a http://localhost:3000.


# 📷 Evidencia y en equipos de computo



Este proyecto es totalmente responsive, adaptado para dispositivos móviles, tabletas y computadoras

## Evidencia vista en equipo de computo 

![image](https://github.com/user-attachments/assets/5e587d33-3236-4973-bd03-d21755a8a188)

## Evidencia vista en equipo de computo Baner cental para ver info de la tabla 

![image](https://github.com/user-attachments/assets/512f48ba-35df-4f7f-bca7-615ef7de8366)

## Evidencia vista en equipo de computo Documentacion EndPoins FastApi

![image](https://github.com/user-attachments/assets/941a200b-dd33-4ae0-b93f-15e2b4291f9f)


Evidencia vista en equipo de computo Documentacion EndPoins FastApi Formato JSON

![image](https://github.com/user-attachments/assets/bb26f8e9-a775-40a6-93ea-5f38cde400fd)


# 📷 Evidencia y en equipos celulares 


## Evidencia vista en equipo

![image](https://github.com/user-attachments/assets/f28b2054-6e8b-4ccd-8b6b-9512e5356ef7) 


![image](https://github.com/user-attachments/assets/f763dd58-80b3-4807-b276-57f419dcd7e0) 


![image](https://github.com/user-attachments/assets/ed5eeb63-3810-4f38-a0a8-f68873ce150f)


![image](https://github.com/user-attachments/assets/927d2d53-ee8e-4453-91e1-1ddcdc810006)


# 📷 Evidencia formato JSON 

![image](https://github.com/user-attachments/assets/d918f88e-1f63-4725-90e5-73a3ed65cdeb)


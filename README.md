# 🚀 FastAPI - SQL Server - React - WebSockets - Docker  
**Prueba técnica - AZ Smart Technology**  

Este proyecto es una aplicación full-stack que integra **FastAPI, SQL Server, React y WebSockets** dentro de un entorno **contenedorizado con Docker**.  
Incluye un **microservicio de base de datos**, un **API Gateway**, y un **frontend en React** con actualizaciones en tiempo real.  

---

## 📂 Estructura del Proyecto  

```yaml
fastapi-sqlserver-react-2025/
│── backend/  
│   ├── api_gateway/          # 📡 Microservicio API Gateway  
│   │   ├── Dockerfile  
│   │   ├── main.py           # 🔀 Lógica del API Gateway  
│   │   ├── requirements.txt  # 📦 Dependencias  
│   │  
│   ├── db_service/           # 🛢️ Microservicio de Base de Datos  
│   │   ├── Dockerfile  
│   │   ├── main.py           # 🔗 API para manejar usuarios  
│   │   ├── models.py         # 🏗️ Definición de la base de datos  
│   │   ├── requirements.txt  # 📦 Dependencias  
│  
│── frontend/                 # 🎨 Aplicación React  
│   ├── Dockerfile  
│   ├── package.json  
│   ├── public/  
│   ├── src/  
│   │   ├── components/  
│   │   │   ├── UserForm.js    # 📝 Formulario para agregar usuarios  
│   │   │   ├── UserList.js    # 📋 Lista de usuarios  
│   │   ├── App.js            # 🎯 Componente principal  
│   │   ├── index.js          # 🏁 Punto de entrada  
│  
│── docker-compose.yml        # 🐳 Orquestación de los contenedores  
│── README.md                 # 📖 Documentación del proyecto  

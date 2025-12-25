# 📄 LiveDocs – Backend  
### A high-performance, secure, and interview-ready document management API 🚀

LiveDocs is a **robust backend service** designed with **clean architecture** and **security-first principles**.  
It provides a secure environment for users to create, store, and manage personal documents using **industry-standard authentication**.

This project is intentionally built to be **easy to explain in interviews** while remaining **scalable and production-ready**.

---

## 🎯 Project Overview

LiveDocs is a **backend-first application** showcasing strong fundamentals in:

- Node.js
- Express.js
- MongoDB
- REST API design
- Authentication & Authorization

The codebase follows a **modular and maintainable structure**, making it suitable for real-world applications as well as technical discussions.

---

## 🚀 Key Features

- 🔐 **Secure Authentication**
  - Complete Signup & Login flow using **JWT**
- 🛡 **Protected Resources**
  - Middleware-protected routes ensure users access **only their own documents**
- 🧼 **Clean API Design**
  - RESTful endpoints ready for frontend or mobile integration
- 🔒 **Password Security**
  - Industry-standard hashing using **bcryptjs**
- 📁 **Scalable Architecture**
  - Separation of concerns using controllers, models, routes, and middleware

---

## 🛠 Tech Stack

| Technology | Role |
|----------|------|
| Node.js | JavaScript Runtime |
| Express.js | Web Framework for REST APIs |
| MongoDB Atlas | Cloud NoSQL Database |
| JWT | Token-based Authentication |
| BcryptJS | Password Hashing |
| Dotenv | Environment Variable Management |

---

## 📂 Folder Structure

```bash
backend/
├── config/
│   └── db.js                 # MongoDB connection logic
├── middleware/
│   └── auth.js               # JWT authentication middleware
├── models/
│   ├── User.js               # User schema
│   └── Document.js           # Document schema
├── routes/
│   ├── authRoutes.js         # Auth routes
│   └── documentRoutes.js     # Document routes
├── server.js                 # Main server entry point
├── .env                      # Environment variables
└── package.json              # Dependencies & scripts
'''
🔐 Authentication Flow

1.Signup / Login
 User submits email and password

2.Token Generation
 Server validates credentials and signs a JWT

3.Authorization
Client sends token with every request.

4.Validation
 Middleware verifies token and allows access to protected routes

🔗 API Documentation

| Method | Endpoint           | Description           |
| ------ | ------------------ | --------------------- |
| POST   | `/api/auth/signup` | Register a new user   |
| POST   | `/api/auth/login`  | Login and receive JWT |


 📑 Document Routes (Protected)

 | Method | Endpoint        | Description              |
| ------ | --------------- | ------------------------ |
| POST   | `/api/docs`     | Create a new document    |
| GET    | `/api/docs`     | Fetch all user documents |
| GET    | `/api/docs/:id` | Fetch a document by ID   |

⚙️ Setup & Installation

1-git clone https://github.com/yourusername/livedocs-backend.git
2-cd backend
3-Create a .env file inside the backend/ folder and add:
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_key
4-npm install
5-npm run dev
5-Server Started-Server running on http://localhost:5000
MongoDB connected successfully


⭐ Support

If you like this project:
⭐ Star the repository
🍴 Fork it
📚 Use it for learning & interviews
Happy Coding! 💻🔥

## 👩‍💻 Author

**Rishita Nainwal**
---

*"Keep it simple, keep it clean, keep it running."*
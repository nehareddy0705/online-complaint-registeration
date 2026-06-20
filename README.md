# 🚨 Online Complaint Registration System

A scalable complaint management platform built using the **MERN Stack** (**MongoDB, Express.js, React.js, Node.js**). The application streamlines complaint registration, complaint tracking, status management, real-time messaging, and administrative resolution through a secure role-based workflow.

---

## 🔗 Live Demo

* **Frontend:** https://online-complaint-registeration.vercel.app/
* **Backend API:** https://online-complaint-registeration.onrender.com
* **GitHub Repository:** https://github.com/nehareddy0705/online-complaint-registeration

---

## 📌 Project Overview

The **Online Complaint Registration System** is a full-stack web application designed to simplify the complaint handling process. Users can register complaints online, monitor complaint status, and receive updates in real time.

Administrators and agents can review complaints, update statuses, assign work, and ensure timely resolution through centralized dashboards.

### 🎯 Objectives

* Digitize complaint registration processes
* Reduce paperwork and manual effort
* Improve complaint tracking and monitoring
* Enhance transparency in complaint resolution
* Provide secure user authentication
* Enable efficient complaint management for administrators and agents

---

## ✨ Key Features

### 👤 User Module

* User registration and login
* JWT-based authentication
* Secure password encryption
* Register new complaints
* Submit complaint details
* View complaint history
* Track complaint status
* Update user profile
* Receive complaint submission and status update alerts

### 🛠️ Admin Module

* View all complaints
* Monitor complaint statistics
* Search and filter complaints
* Assign complaints
* Update complaint status
* Resolve complaints
* Reject invalid complaints
* View registered users
* Monitor platform activity

### 👨‍💼 Agent Module

* View assigned complaints
* Update complaint progress
* Communicate through complaint-based chat
* Mark complaints as resolved

### 💬 Real-Time Communication

* Socket.io-based complaint chat
* Live complaint message updates
* Room-based messaging per complaint

### 🔔 Complaint Workflow

```text
Complaint Submitted
        ↓
   Under Review
        ↓
     Assigned
        ↓
   In Progress
        ↓
     Resolved
        ↓
      Closed
```

Users can track the progress of their complaints throughout the workflow.

---

## 🏗️ Technology Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Axios
* Socket.io Client
* JavaScript
* CSS3
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs
* dotenv
* cors
* Socket.io

### Deployment

| Service  | Platform      |
| -------- | ------------- |
| Frontend | Vercel        |
| Backend  | Render        |
| Database | MongoDB Atlas |

---

## 📂 Project Structure

```text
online-complaint-registeration
│
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── services
│   │   └── assets
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── config
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

## 👥 User Roles

| Role   | Responsibilities                                                        |
| ------ | ----------------------------------------------------------------------- |
| User   | Register complaints, track complaint status, view complaint history     |
| Admin  | Manage complaints, update status, assign complaints, resolve complaints |
| Agent  | Handle assigned complaints, update progress, communicate with users     |
| System | Handle notifications, authentication, and workflow support              |

---

## ⚙️ Installation Guide

### Clone Repository

```bash
git clone https://github.com/nehareddy0705/online-complaint-registeration
cd online-complaint-registeration
```

### Backend Setup

```bash
cd server
npm install
npm start
```

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 📡 API Modules

### Authentication

* User Registration
* User Login
* User Authentication
* JWT Token Management

### Complaint Management

* Create Complaint
* Update Complaint
* Delete Complaint
* View Complaint
* Track Complaint Status

### Admin Operations

* View All Complaints
* Manage Complaints
* Update Complaint Status
* Resolve Complaints
* Dashboard Statistics

### Messaging & Feedback

* Complaint-specific messaging
* Feedback submission and handling

---

## 🔒 Security Features

* JWT Authentication
* Password hashing using bcryptjs
* Protected routes
* Role-Based Access Control (RBAC)
* Secure environment variables
* Input validation
* Secure API communication

---

## 📊 Dashboard Features

* Total complaints
* Pending complaints
* Resolved complaints
* Complaint statistics
* User activity monitoring
* Complaint tracking analytics

---

## 📚 Technical Concepts Implemented

* Full-Stack MERN Development
* RESTful API Design
* Authentication & Authorization
* MongoDB Data Modeling
* MVC Architecture
* CRUD Operations
* Client-Server Communication
* Responsive Web Design
* Cloud Deployment
* Real-Time Messaging with Socket.io

---

## 🚀 Future Enhancements

* Email notifications
* SMS alerts
* Complaint priority management
* AI-based complaint categorization
* PDF report generation
* Mobile application
* Advanced analytics dashboard

---

## 🎓 Learning Outcomes

Through this project, I gained practical experience in:

* Full-Stack Web Development
* API Development and Integration
* User Authentication Systems
* Database Design and Management
* Cloud Deployment
* MERN Stack Architecture
* Software Engineering Best Practices

---

## 👨‍💻 Developer

**M Neha REDDY**

* B.Tech Computer Science and Engineering
* Anurag University
* GitHub: https://github.com/nehareddy0705

---

## 📄 License

This project is developed for educational, academic, internship, and portfolio purposes.

---

## ⭐ Acknowledgements

Special thanks to:

* MongoDB Atlas
* React.js Community
* Node.js Community
* Express.js
* Vercel
* Render
* Open Source Contributors

---

### ⭐ If you found this project useful, consider giving it a star on GitHub!

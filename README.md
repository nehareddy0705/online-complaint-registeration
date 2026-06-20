# 🚨 Online Complaint Registration System

A scalable complaint management platform built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The application streamlines complaint registration, complaint tracking, status management, real-time messaging, and administrative resolution through a secure role-based workflow.

## 🔗 Live Demo

- **Frontend:** https://vip-c2-online-complaint-registerati.vercel.app/
- **Backend API:** https://complaint-registeration.onrender.com
- **GitHub Repository:** https://github.com/suchithreddy-07/-VIP-C2--Online-complaint-registration

## 📌 Project Overview

The Online Complaint Registration System is a full-stack web application designed to simplify the complaint handling process. Users can register complaints online, monitor complaint status, and receive updates in real time. Administrators and agents can review complaints, update statuses, assign work, and ensure timely resolution through centralized dashboards.

The system improves efficiency, transparency, and accessibility compared to traditional manual complaint management methods.

## 🎯 Objectives

- Digitize complaint registration processes
- Reduce paperwork and manual effort
- Improve complaint tracking and monitoring
- Enhance transparency in complaint resolution
- Provide secure user authentication
- Enable efficient complaint management for administrators and agents

## ✨ Key Features

### 👤 User Module

- User registration and login
- JWT-based authentication
- Secure password encryption
- Register new complaints
- Submit complaint details
- View complaint history
- Track complaint status
- Update user profile
- Receive complaint submission and status update alerts

### 🛠️ Admin Module

- View all complaints
- Monitor complaint statistics
- Search and filter complaints
- Assign complaints
- Update complaint status
- Resolve complaints
- Reject invalid complaints
- View registered users
- Monitor platform activity

### 👨‍💼 Agent Module

- View assigned complaints
- Update complaint progress
- Communicate through complaint-based chat
- Mark complaints as resolved when completed

### 💬 Real-Time Communication

- Socket.io-based complaint chat
- Live complaint message updates
- Room-based messaging per complaint

## 🔔 Complaint Workflow

1. Complaint Submitted
2. Under Review
3. Assigned
4. In Progress
5. Resolved
6. Closed

Users can track the progress of their complaints throughout the workflow.

## 🏗️ Technology Stack

### Frontend

- React.js
- Vite
- React Router DOM
- Axios
- Socket.io Client
- JavaScript
- CSS3
- Tailwind CSS

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs
- dotenv
- cors
- Socket.io

### Deployment

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## 📂 Project Structure

```text
online-complaint-registeration
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
├── server
│   ├── config
│   ├── middleware
│   ├── models
│   ├── Routes
│   ├── package.json
│   └── server.js
└── README.md
```

## 👥 User Roles

| Role | Responsibilities |
| --- | --- |
| User | Register complaints, track complaint status, view complaint history |
| Admin | Manage complaints, update status, assign complaints, resolve complaints |
| Agent | Handle assigned complaints, update progress, communicate with users |
| System | Handle notifications, authentication, and workflow support |

## ⚙️ Installation Guide

### Clone the repository

```bash
git clone https://github.com/suchithreddy-07/-VIP-C2--Online-complaint-registration.git
cd -VIP-C2--Online-complaint-registration
```

### Backend setup

```bash
cd server
npm install
npm start
```

Create a `.env` file in the `server` folder with your own values:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Frontend setup

```bash
cd client
npm install
npm run dev
```

## 📡 API Modules

### Authentication

- User registration
- User login
- User authentication
- JWT token management

### Complaint Management

- Create complaint
- Update complaint
- Delete complaint
- View complaint
- Track complaint status

### Admin Operations

- View all complaints
- Manage complaints
- Update complaint status
- Resolve complaints
- Dashboard statistics

### Messaging and Feedback

- Complaint-specific messaging
- Feedback submission and handling

## 🔒 Security Features

- JWT authentication
- Password hashing using bcryptjs
- Protected routes
- Role-based access control (RBAC)
- Secure environment variables
- Input validation
- Secure API communication

## 📊 Dashboard Features

- Total complaints
- Pending complaints
- Resolved complaints
- Complaint statistics
- User activity monitoring
- Complaint tracking analytics

## 📚 Technical Concepts Implemented

- Full-stack MERN development
- RESTful API design
- Authentication and authorization
- MongoDB data modeling
- MVC architecture
- CRUD operations
- Client-server communication
- Responsive web design
- Cloud deployment
- Real-time messaging with Socket.io

## 🚀 Future Enhancements

- Email notifications
- SMS alerts
- Complaint priority management
- AI-based complaint categorization
- PDF report generation
- Mobile application
- Advanced analytics dashboard

## 🎓 Learning Outcomes

Through this project, I gained practical experience in:

- Full-stack web development
- API development and integration
- User authentication systems
- Database design and management
- Cloud deployment
- MERN stack architecture
- Software engineering best practices

## 👨‍💻 Developer

**THUM SUCHITH REDDY**  
B.Tech Computer Science and Engineering  
Anurag University  
GitHub: https://github.com/suchithreddy-07

## 📄 License

This project is developed for educational, academic, internship, and portfolio purposes.

## ⭐ Acknowledgements

Special thanks to:

- MongoDB Atlas
- React.js Community
- Node.js Community
- Express.js
- Vercel
- Render
- Open Source Contributors

import { io } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || "https://complaint-registeration.onrender.com";

const socket = io(import.meta.env.PROD ? SOCKET_URL : "http://localhost:5000");

export default socket;


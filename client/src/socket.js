import { io } from "socket.io-client";

const socket = io(import.meta.env.PROD ? "https://online-complaint-registeration.onrender.com" : "http://localhost:5000");

export default socket;


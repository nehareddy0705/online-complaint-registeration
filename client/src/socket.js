import { io } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || "https://complaint-registeration.onrender.com";

const socket = io(SOCKET_URL);

export default socket;


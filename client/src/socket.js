import { io } from "socket.io-client";

const socket =
  import.meta.env.DEV && import.meta.env.VITE_SOCKET_URL
    ? io(import.meta.env.VITE_SOCKET_URL)
    : io({ path: "/socket.io" });

export default socket;


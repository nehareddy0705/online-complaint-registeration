import { io } from "socket.io-client";

let socket = null;

const SOCKET_PATH = "/api/socket";

export const getSocket = () => {
  if (!socket) {
    socket = import.meta.env.DEV
      ? io("http://localhost:5000", { path: SOCKET_PATH })
      : io({ path: SOCKET_PATH });
  }
  return socket;
};

export default getSocket;

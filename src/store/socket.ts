import { create } from "zustand";
import { Socket, io } from "socket.io-client";

interface WebSocketState {
  socket: Socket;
  time: number;
  sessionResult: number | null;
  setSessionResult: (result: number) => void;
  setTime: (time: number) => void;
}

const useWebSocketStore = create<WebSocketState>((set) => {
  const socket = io(import.meta.env.VITE_DEV_SERVER_URL);

  socket.on("connect", () => {
    console.log("Connected to WebSocket server");
  });

  socket.on("sessionResult", (result) => {
    set({ sessionResult: result });
  });

  return {
    socket,
    time: 0,
    sessionResult: null,
    setSessionResult: (result) => set({ sessionResult: result }),
    setTime: (time) => set({ time }),
  };
});

export default useWebSocketStore;

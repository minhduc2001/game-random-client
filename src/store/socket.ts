import { create } from "zustand";
import { Socket, io } from "socket.io-client";

interface DataCountDown {
  time?: number;
  data?: Partial<{
    coin_prev: number;
    res_cl: any;
    res_tx: any;
    coin_random: number;
    res_percent: number;
    coin: number;
    total_coin: number;
    id: number;
    created_at: string;
    updated_at: string;
    active: boolean;
    coin_prev_total: number;
  }>;
  res_cl?: ("c" | "d" | "t" | "k")[];
  res_tx?: ("c" | "d" | "t" | "k")[];
}

interface WebSocketState {
  socket: Socket;
  // time: number;
  sessionResult: DataCountDown;
  setSessionResult: (result: Pick<DataCountDown, "time" | "data">) => void;
  setRes: (result: Omit<DataCountDown, "time" | "data">) => void;
  // setTime: (time: number) => void;
}

const useWebSocketStore = create<WebSocketState>((set, get) => {
  const socket = io(import.meta.env.VITE_DEV_SERVER_URL, {
    reconnection: true,
    reconnectionAttempts: Infinity,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    randomizationFactor: 0.5,
  });

  socket.on("connect", () => {
    console.log("Connected to WebSocket server");
  });

  socket.on("countdown", (result) => {
    set({
      sessionResult: {
        ...get().sessionResult,
        data: result.data,
        time: result.time,
      },
    });
  });

  socket.on("res", (result) => {
    set({
      sessionResult: {
        ...get().sessionResult,
        res_cl: result.res_cl,
        res_tx: result.res_tx,
      },
    });
  });

  return {
    socket,
    // time: 0,
    sessionResult: { time: 0, data: {}, res_cl: [], res_tx: [] },
    setSessionResult: (result) =>
      set({ sessionResult: { data: result.data, time: result.time } }),
    setRes: (result) =>
      set({ sessionResult: { res_cl: result.res_cl, res_tx: result.res_tx } }),
    // setTime: (time) => set({ time }),
  };
});

export default useWebSocketStore;

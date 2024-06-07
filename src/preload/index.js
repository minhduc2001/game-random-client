import { contextBridge } from "electron";

// Expose a safe API to the renderer process
contextBridge.exposeInMainWorld("myAPI", {
  example: () => "Hello from preload script!",
});

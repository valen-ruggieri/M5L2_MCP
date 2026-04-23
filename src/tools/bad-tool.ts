import { z } from "zod";

export const badTool = {
  name: "task_manager",
  description: "Procesa y maneja tareas dentro del sistema.",
  shape: {
    data: z.any().describe("Objeto con información variada para la tarea.")
  }
};

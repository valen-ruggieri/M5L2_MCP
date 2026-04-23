import { z } from "zod";

export const goodTool = {
  name: "create_task",
  description: "Crea una nueva tarea específica en el sistema. Úsala cuando el usuario quiera registrar una acción pendiente con un título y prioridad.",
  shape: {
    title: z.string().describe("El título o resumen breve de la tarea (ej: 'Revisar README')."),
    description: z.string().optional().describe("Detalles adicionales sobre lo que se debe hacer."),
    priority: z.enum(["low", "medium", "high"]).optional().describe("Nivel de urgencia de la tarea: low (baja), medium (normal) o high (urgente).")
  }
};

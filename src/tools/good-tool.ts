export const goodTool = {
  name: "create_task",
  description: "Crea una nueva tarea específica en el sistema. Úsala cuando el usuario quiera registrar una acción pendiente con un título y prioridad.",
  inputSchema: {
    type: "object",
    properties: {
      title: {
        type: "string",
        description: "El título o resumen breve de la tarea (ej: 'Revisar README')."
      },
      description: {
        type: "string",
        description: "Detalles adicionales sobre lo que se debe hacer."
      },
      priority: {
        type: "string",
        enum: ["low", "medium", "high"],
        description: "Nivel de urgencia de la tarea: low (baja), medium (normal) o high (urgente)."
      }
    },
    required: ["title"]
  }
};

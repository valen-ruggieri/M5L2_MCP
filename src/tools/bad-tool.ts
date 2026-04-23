export const badTool = {
  name: "task_manager",
  description: "Procesa y maneja tareas dentro del sistema.",
  inputSchema: {
    type: "object",
    properties: {
      data: { 
        type: "object", 
        description: "Objeto con información variada para la tarea.",
        additionalProperties: true
      }
    },
    required: ["data"]
  }
};

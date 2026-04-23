import { CreateTaskSchema } from "../schemas/create-task.schema.js";

export const createTaskValidatedTool = {
  name: "create_task_validated",
  description: "Crea una tarea validando el input en runtime con Zod.",
  schema: CreateTaskSchema
};

/**
 * Manejador de la tool que aplica la validación de Zod antes de 'procesar'
 */
export async function handleCreateTaskValidated(args: unknown) {
  // Aplicamos el schema de Zod a los argumentos recibidos del MCP
  const result = CreateTaskSchema.safeParse(args);

  if (!result.success) {
    // Si falla, devolvemos los errores estructurados de Zod
    return {
      isError: true,
      content: [
        {
          type: "text",
          text: JSON.stringify(
            {
              error: "Validación fallida en Runtime",
              issues: result.error.issues.map(i => ({
                campo: i.path.join("."),
                mensaje: i.message
              }))
            },
            null,
            2
          )
        }
      ]
    };
  }

  // Si tiene éxito, devolvemos el dato ya transformado (con defaults aplicados)
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(
          {
            mensaje: "Tarea validada y creada correctamente",
            datos_limpios: result.data
          },
          null,
          2
        )
      }
    ]
  };
}

import { CreateTaskSchema } from "../schemas/create-task.schema.js";

export const createTaskValidatedTool = {
    name: "create_task",
    description: "Crea una nueva tarea con titulo, descripcion y prioridad",
    schema: CreateTaskSchema
}

export async function handleCreateTaskvalidated(input: unknown) {
    const result = CreateTaskSchema.safeParse(input);

    if (!result.success) {
        return {
            isError: true,
            content: [
                {
                    type: "text" as const,
                    text: "input invalido"
                }
            ]
        }
    }

    return {
        content: [
            {
                type: "text" as const,
                text: "Tarea creada con exito"
            }
        ]
    }
}
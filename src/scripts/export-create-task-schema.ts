import { writeFileSync } from "node:fs";
import * as z from "zod";
import { CreateTaskSchema } from "../schemas/create-task.schema.js";

const jsonschema = z.toJSONSchema(CreateTaskSchema);

writeFileSync(
    "src/generated/create_task.input.schema.json",
    JSON.stringify(jsonschema, null, 2)
)

console.log('Schema exportado');

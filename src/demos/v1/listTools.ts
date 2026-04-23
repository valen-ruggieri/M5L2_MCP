import { badTool } from "../../tools/bad-tool.js";
import { goodTool } from "../../tools/good-tool.js";
import { createTaskValidatedTool } from "../../tools/create-task-validated.tool.js";

console.log("\n=============================================");
console.log("   CATÁLOGO DE TOOLS (Lo que ve el LLM)    ");
console.log("=============================================");

const tools = [
  { ...badTool, displayShape: badTool.shape },
  { ...goodTool, displayShape: goodTool.shape },
  { ...createTaskValidatedTool, displayShape: createTaskValidatedTool.schema.shape }
];

tools.forEach(tool => {
  console.log(`\n[ TOOL: ${tool.name} ]`);
  console.log(`> DESCRIPCIÓN: ${tool.description}`);
  console.log(`> PARÁMETROS (Schema):`);
  
  // Mostrar los campos y sus descripciones de Zod
  Object.entries(tool.displayShape).forEach(([key, value]: [string, any]) => {
    const description = value._def.description || "Sin descripción";
    console.log(`  - ${key}: ${description}`);
  });
  console.log("\n---------------------------------------------");
});

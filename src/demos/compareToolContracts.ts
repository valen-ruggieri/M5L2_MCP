import { badTool as toolMala } from "../tools/bad-tool.js";
import { goodTool as toolBuena } from "../tools/good-tool.js";
import { demoPrompts } from "./v1Prompts.js";

console.log("=== COMPARACIÓN DE CONTRATOS (M5L3 V1) ===");
console.log("\nPedido del usuario:", demoPrompts[0]);

console.log("\n[VERSIÓN 1: MALA]");
console.log("Nombre:", toolMala.name);
console.log("Descripción:", toolMala.description);
console.log("Input:", JSON.stringify(toolMala.inputSchema.properties, null, 2));

console.log("\n[VERSIÓN 2: BUENA]");
console.log("Nombre:", toolBuena.name);
console.log("Descripción:", toolBuena.description);
console.log("Input:", JSON.stringify(toolBuena.inputSchema.properties, null, 2));

console.log("\n--- ANÁLISIS PEDAGÓGICO (V1) ---");
console.log("1. 'task_manager' y 'data' son genéricos. No comunican QUÉ hace la tool ni CÓMO enviarle info.");
console.log("2. 'create_task' y 'title' comunican una intención clara. El modelo sabe exactamente cuándo elegirla.");
console.log("3. La descripción de la tool buena actúa como una 'guía de uso' para el razonamiento del LLM.");
console.log("4. El contrato es la única interfaz que el modelo entiende. Si es ambiguo, el modelo adivina.");

import { badTool } from "../tools/bad-tool.js";
import { goodTool } from "../tools/good-tool.js";

console.log("\n=============================================");
console.log("   CATÁLOGO DE TOOLS (Lo que ve el LLM)    ");
console.log("=============================================");
const tools = [badTool, goodTool];

tools.forEach(tool => {
  console.log(`\n[ TOOL: ${tool.name} ]`);
  console.log(`> DESCRIPCIÓN: ${tool.description}`);
  console.log(`> SCHEMA DE ENTRADA:`);
  console.log(JSON.stringify(tool.inputSchema, null, 2));
  console.log("\n---------------------------------------------");
});

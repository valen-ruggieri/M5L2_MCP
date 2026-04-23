import { CreateTaskSchema } from "../../schemas/create-task.schema.js";

const validInput = {
  title: "Revisar README",
  priority: "high",
};

const invalidInput1 = {
  title: "Revisar README",
  priority: "urgent", // Valor no permitido en el enum
};

const invalidInput2 = {
  priority: "high", // Falta el campo title
};

const invalidInput3 = {
  title: 123, // Tipo incorrecto (debería ser string)
  priority: "high",
};

console.log("\n==========================================");
console.log("   DEMO Zod: Validación en Runtime");
console.log("==========================================");

console.log("\n>>> Caso 1: Input Válido");
const validResult = CreateTaskSchema.safeParse(validInput);
if (validResult.success) {
  console.log("✓ Éxito:", JSON.stringify(validResult.data, null, 2));
}

console.log("\n>>> Caso 2: Prioridad Inválida ('urgent')");
const invalidResult1 = CreateTaskSchema.safeParse(invalidInput1);
if (!invalidResult1.success) {
  console.log("✗ Error de Validación:");
  console.log(JSON.stringify(invalidResult1.error.issues.map(i => ({ path: i.path, message: i.message })), null, 2));
}

console.log("\n>>> Caso 3: Falta campo obligatorio (title)");
const invalidResult2 = CreateTaskSchema.safeParse(invalidInput2);
if (!invalidResult2.success) {
  console.log("✗ Error de Validación:");
  console.log(JSON.stringify(invalidResult2.error.issues.map(i => ({ path: i.path, message: i.message })), null, 2));
}

console.log("\n>>> Caso 4: Tipo incorrecto (number en vez de string)");
const invalidResult3 = CreateTaskSchema.safeParse(invalidInput3);
if (!invalidResult3.success) {
  console.log("✗ Error de Validación:");
  console.log(JSON.stringify(invalidResult3.error.issues.map(i => ({ path: i.path, message: i.message })), null, 2));
}

console.log("\n>>> Comparación: safeParse() vs parse()");
console.log("- safeParse() devuelve un objeto con success: true/false.");
console.log("- parse() lanza una excepción si falla.");

try {
  console.log("\nEjecutando parse() con input inválido...");
  CreateTaskSchema.parse(invalidInput1);
} catch (error) {
  console.log("¡Boom! parse() lanzó una excepción como se esperaba.");
}

import { CreateTaskSchema } from "../../schemas/create-task.schema.js";

const validInput = {
    title: "Revisar README",
    priority: "high"
}

const invalidInput = {
    title: 48,
    priority: "urgent",
    dueDate: "hoy"
}

console.log('safeValid test con input valido');

const safeValid = CreateTaskSchema.safeParse(validInput);

console.log(safeValid);


console.log('safeInvalid test con input invalido');

const safeInvalid = CreateTaskSchema.safeParse(invalidInput);

console.log(safeInvalid);


console.log('parsedValid test con input valido');

try {
    const parsedValid = CreateTaskSchema.parse(validInput);
    console.log(parsedValid);

} catch (error) {
    console.error(error)
}

console.log('parsedInvalid test con input invalido');

try {
    const parsedInvalid = CreateTaskSchema.parse(invalidInput);
    console.log(parsedInvalid);


} catch (error) {
    console.error(error)
}
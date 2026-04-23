import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { badTool } from "../tools/bad-tool.js";
import { goodTool } from "../tools/good-tool.js";
import { 
    createTaskValidatedTool, 
    handleCreateTaskValidated 
} from "../tools/create-task-validated.tool.js";

const server = new McpServer({
    name: "m5-v2-zod-server",
    version: "1.0.0"
});

// Registrar tool mala (V1)
server.tool(
    badTool.name,
    badTool.description,
    badTool.shape,
    async (input) => {
        return {
            content: [
                { type: "text", text: `Tool ambigua (task_manager) ejecutada con: ${JSON.stringify(input)}` }
            ]
        };
    }
);

// Registrar tool buena (V1)
server.tool(
    goodTool.name,
    goodTool.description,
    goodTool.shape,
    async (input) => {
        return {
            content: [
                { type: "text", text: `Tool precisa (create_task) ejecutada con: ${JSON.stringify(input)}` }
            ]
        };
    }
);

// Registrar tool validada con Zod (V2)
server.tool(
    createTaskValidatedTool.name,
    createTaskValidatedTool.description,
    createTaskValidatedTool.schema.shape,
    handleCreateTaskValidated
);

async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("MCP Server running on stdio");
}

main().catch((error) => {
    console.error("Error in main():", error);
    process.exit(1);
});
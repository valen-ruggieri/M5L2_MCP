import { McpServer } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { badTool } from "../tools/bad-tool.js";
import { goodTool } from "../tools/good-tool.js";

const server = new McpServer({
    name: "m5-contract-comparison-server",
    version: "1.0.0"
});

// Registrar tool mala
server.tool(
    badTool.name,
    badTool.description,
    badTool.inputSchema,
    async (input) => {
        return {
            content: [
                { type: "text", text: `Tool ambigua (task_manager) ejecutada con: ${JSON.stringify(input)}` }
            ]
        };
    }
);

// Registrar tool buena
server.tool(
    goodTool.name,
    goodTool.description,
    goodTool.inputSchema,
    async (input) => {
        return {
            content: [
                { type: "text", text: `Tool precisa (create_task) ejecutada con: ${JSON.stringify(input)}` }
            ]
        };
    }
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
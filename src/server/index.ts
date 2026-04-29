import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createTaskValidatedTool, handleCreateTaskvalidated } from "../tools/create-task.tool.js";


const server = new McpServer({
    name: "m5-v2-zod-server",
    version: "1.0.0"
});

server.registerTool(
    createTaskValidatedTool.name,
    {
        description: createTaskValidatedTool.description,
        inputSchema: createTaskValidatedTool.schema
    },
    handleCreateTaskvalidated
)


async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("MCP Server running on stdio");
}

main().catch((error) => {
    console.error("Error in main():", error);
    process.exit(1);
});
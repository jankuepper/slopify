import { createMcpExpressApp } from '@modelcontextprotocol/express';
import { NodeStreamableHTTPServerTransport } from '@modelcontextprotocol/node';
import { McpServer } from '@modelcontextprotocol/server';

const app = createMcpExpressApp();
const server = new McpServer({ name: 'my-server', version: '1.0.0' });



app.post('/mcp', async (req, res) => {
  // Stateless example: create a transport per request.
  // For stateful mode (sessions), keep a transport instance around and reuse it.
  const transport = new NodeStreamableHTTPServerTransport({ sessionIdGenerator: undefined });
  await server.connect(transport);
  await transport.handleRequest(req, res, req.body);
});

app.listen(9009, () => console.log("mcp started"))

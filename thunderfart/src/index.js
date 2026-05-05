import { createMcpExpressApp } from '@modelcontextprotocol/express';
import { NodeStreamableHTTPServerTransport } from '@modelcontextprotocol/node';
import { McpServer } from '@modelcontextprotocol/server';
import { initResources } from './resources/index.js';
import { initTools } from './tools/index.js';

const app = createMcpExpressApp();
let server = new McpServer({ name: 'thunderfart', version: '0.0.1' });

server = initResources(server)
server = initTools(server)

app.post('/mcp', async (req, res) => {
  // Stateless example: create a transport per request.
  // For stateful mode (sessions), keep a transport instance around and reuse it.
  console.log(req.body)
  const transport = new NodeStreamableHTTPServerTransport({ sessionIdGenerator: undefined, allowedHosts: ['*'] });
  await server.connect(transport);
  await transport.handleRequest(req, res, req.body);
});

app.listen(9009, () => console.log("mcp started"))

import * as z from 'zod/v4'
export function initTools(server) {
  server.registerTool('transcribe', {
    description: 'get the transcription from a mp3 file provided via path',
    inputSchema: z.object({ path: z.string() })
  })
  return server
}

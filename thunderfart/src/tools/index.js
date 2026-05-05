import * as z from 'zod/v4'
import { transcribe } from "./transcribe.js"
import { cd } from './directory-content.js'

export function initTools(server) {
  server.registerTool(
    'transcribe',
    {
      description: 'get the transcription from a mp3 file provided via path',
      inputSchema: z.object({ path: z.string() })
    },
    async (input) => transcribe(input)
  )

  server.registerTool(
    'readdir',
    {
      description: 'list content of directory',
      outputSchema: z.object({ "directory-content": z.array(z.string()) })
    },
    () => cd()
  )
  return server
}

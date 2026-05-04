import { spawn } from "node:child_process"
export async function transcribe({ path }) {
  return new Promise((resolve, reject) => {
    // TODO: correct command options
    const process = spawn("whisper", "-i", path, "--task", "Transkription")

    process.stdout.on("data", (data) => console.log(data.toString()))
    process.stderr.on("data", (data) => console.log(data.toString()))

    process.on("close", (code) => {
      if (code != 0) {
        reject(`failed with code ${code}`)
      }
      // TODO: load and delete .txt file
      resolve("success")
    })
  })
}

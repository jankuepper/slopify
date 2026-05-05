import { spawn } from "node:child_process"

export async function convertMp4ToMp3({ path }) {
  return new Promise((resolve, reject) => {
    const process = spawn('ffmpeg', [''])

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


export async function convertM2tsToMp4({ path }) {
  return new Promise((resolve, reject) => {
    const process = spawn('ffmpeg', [''])

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



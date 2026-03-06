# Narakeet Text to Speech Streaming API example in Node.js

This repository provides a quick example demonstrating how to access the Narakeet [streaming Text to Speech API](https://www.narakeet.com/docs/automating/text-to-speech-api/) from Node.js.

The example sends a request to generate audio from text and saves it to output.mp3 in the local directory.

Note that Narakeet also has a text to speech API to generate long content, suitable for larger conversion tasks.

## Prerequisites

This example works with Node.js 18 and later (uses built-in `fetch`). You can run it inside Docker (then it does not require a local Node.js installation), or on a system with Node.js 18 or later.

## Running the example

1. Set and export a local environment variable called `NARAKEET_API_KEY`, containing your API key.
2. Optionally modify the voice and text parameters in `tts.mjs`, which control the text to speech synthesis voice and the text sent to the API for synthesis.
2. To run inside docker, execute `make run`
3. Or to run outside docker, on a system with `node`, execute `node tts.mjs`

## More information

Check out <https://www.narakeet.com/docs/automating/text-to-speech-api/> for more information on the Narakeet Text to Speech API

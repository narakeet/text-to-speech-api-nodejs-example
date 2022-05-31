# Narakeet Text to Speech Streaming API example

This repository provides a quick example demonstrating how to access the Narakeet [streaming Text to Speech API](https://www.narakeet.com/docs/automating/text-to-speech-api/) from JavaScript (NodeJS). 

The example sends a request to generate audio from text and saves it to result.m4a in the local directory.

## Prerequisites

To use this example, you will need Node.js 16 or newer, and an API key for Narakeet.

## Running the example


1. edit [index.mjs](index.mjs) and add your API key on line 1, instead of the value `'YOUR_API_KEY_HERE'`. You can optionally modify the voice and text parameters on lines 2 and 3, which control the text to speech synthesis voice and the text sent to the API for synthesis.
2. run `npm install` to pull the dependencies
3. run `node index.mjs`

## More information

Check out https://www.narakeet.com/docs/automating/text-to-speech-api/ for more information on the Narakeet Text to Speech API

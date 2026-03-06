import { writeFile } from 'node:fs/promises';

async function textToSpeech(apiKey, voice, text, outputPath) {
    const response = await fetch(
        `https://api.narakeet.com/text-to-speech/mp3?voice=${voice}`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/octet-stream',
                'Content-Type': 'text/plain',
                'x-api-key': apiKey,
            },
            body: text,
            signal: AbortSignal.timeout(30000),
        },
    );

    if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`API error ${response.status}: ${errorBody}`);
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    await writeFile(outputPath, buffer);
}

const apiKey = process.env.NARAKEET_API_KEY;
if (!apiKey) {
    console.log('Please set NARAKEET_API_KEY environment variable');
    process.exit(1);
}

await textToSpeech(apiKey, 'mickey', 'Hi there from Node.js', 'output.mp3');
console.log('File saved at: output.mp3');

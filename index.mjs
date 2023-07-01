import dotenv from 'dotenv';
dotenv.config();


const APIKEY = process.env.NARAKEET_API_KEY,
	voice = 'Mike',
	text = 'Hi there from the API';

import {pipeline} from 'node:stream/promises';
import {createWriteStream} from 'node:fs';
import { Readable } from 'stream';
import got from 'got';

await pipeline(
	Readable.from([text]),
	got.stream.post(
		`https://api.narakeet.com/text-to-speech/mp3?voice=${voice}`,
		{
			headers: {
				'accept': 'application/octet-stream',
				'x-api-key': APIKEY,
				'content-type': 'text/plain'
			}
		},
	),
	createWriteStream('tts-result.mp3')
);

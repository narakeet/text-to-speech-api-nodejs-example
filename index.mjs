const APIKEY='YOUR_API_KEY_HERE',
	voice = 'mickey',
	text = 'Hi there from the API';

import {pipeline} from 'node:stream/promises';
import {createWriteStream} from 'node:fs';
import { Readable } from 'stream';
import got from 'got';

await pipeline(
	Readable.from([text]),
	got.stream.post(
		`https://api.narakeet.com/text-to-speech/m4a?voice=${voice}`,
		{
			headers: {
				'accept': 'application/octet-stream',
				'x-api-key': APIKEY,
				'content-type': 'text/plain'
			}
		},
	),
	createWriteStream('result.m4a')
);

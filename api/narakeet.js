import dotenv from 'dotenv';
import {pipeline} from 'node:stream/promises';
import {createWriteStream} from 'node:fs';
import { Readable } from 'stream';
import got from 'got';

dotenv.config();

module.exports = async (req, res) => {
    const APIKEY = process.env.NARAKEET_API_KEY;
    const voice = 'mickey';
    const text = req.body.text;

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

    res.status(200).send('Audio created successfully');
}

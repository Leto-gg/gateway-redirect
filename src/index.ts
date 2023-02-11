import express from 'express';
const app = express();

app.get('/', (req, res) => {
	res.send('Hello, World!');
});

addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
	return await app.handle(request);
}

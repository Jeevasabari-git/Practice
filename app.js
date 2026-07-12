const express = require('express');
const dotenv = require('dotenv');

const envname = process.argv[2] || "development";
dotenv.config({ path: `.env.${envname}` });

function log(message) {
	const time = new Date().toISOString();
	console.log(`[${time}] [${envname.toUpperCase()}] ${message}`);
}

const app = express();

const PORT = process.env.PORT;
const APP = process.env.APP;

app.get('/health', (req, res) => {
	log("Health check called");
	res.status(200).json({
		status: "UP"
	});
});

app.get('/', (req, res) => {
	res.send("Hello from basic express app from " + APP);
});

app.listen(PORT , () => {
	log("Server running on port " + PORT);
});

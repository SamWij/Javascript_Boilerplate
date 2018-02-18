
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';


/* eslint-disable no-console */
const port = 3000;
let app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../dist/index.html'))
});

app.get('/users', (req, res) => {
	//Hard coding for simplicity. Pretend this hits a real database
	res.json([
		{"id": 1, "firstName": "Bob", "lastName": "smith", "email": "bob@gmail.com" },
		{"id": 2, "firstName": "Jane", "lastName": "doe", "email": "jdoe@gmail.com" },
		{"id": 3, "firstName": "Carter", "lastName": "Douglas", "email": "carter@hotmail.com" },
		{"id": 4, "firstName": "Sheila", "lastName": "Easton", "email": "princeb@purple.com" }
	]);
});

app.listen(port, (err) => {
	if (err) {
		console.log(err)
	} else {
		open('http://localhost:' + port)
	}
});


import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import cors from 'cors';

/* eslint-disable no-console */
app.set{'port', (process.env.PORT || 5000)}
let app = express();
const compiler = webpack(config);
app.use(cors());

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../src/index.html'))
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


app.listen(app.get('port' => {
	console.log("Node app is running at localhoset: " + app.get('port'))
})

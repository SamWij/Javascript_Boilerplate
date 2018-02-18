/*
This script generates mocj data for local development.
*/

/* eslint-disable no-console */
import faker from "faker"
import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, function (err) {
	if (err) {
		return console.log(chalk.red(err));
	} else {
		console.log(chalk.green("Mock data generated"));
	}
});

import express from 'express';
// import axios from 'axios';
import utils from './utils.js';
import { InfluxDB, Point } from '@influxdata/influxdb-client';
const token = "uL15WIXKzYoqp9IW2EtN5Qs6E-b7ibyR1gs4yzvqVs1W3eMLGudsaO7oTu9tjDUFtpqeoY-gjlzHoJBx_AM0lg==";
const url = "http://localhost:8086/";
const client = new InfluxDB({ url, token });
let org = `root`
let bucket = `root`

let writeClient = client.getWriteApi(org, bucket, 'ns')
const app = express();
const versionApi = "/api/v1";
let temperature2;
let humidity2;
// import * as temp from './temperature.js';

// const routeUtilisateur = require("./route/utilisateur.js");
app.listen(8080, () => console.log("port 8080"));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use("/api/v1", function (req, res, next) {});

app.get(`${versionApi}/temperature`, (req, res) => {
    res.json({
        data: [
            {
                temperature: temperature2
            }
        ]
    })
});
app.get(`${versionApi}/humidity`, (req, res) => {
    res.json({
        data: [
            {
                humidity: humidity2
            }
        ]
    })
});

// ------------ CONFIGURATION -------------
const DELAY = 15000; // Delay between frames in ms

const TEMP_MIN = 150; // Minimum temperature °C x 10
const TEMP_MAX = 300; // Maximum temperature °C x 10
const THRESHOLD = 250; // Threshold to send an alert to your middleware

const TEMP_MIN_HUMIDITY = 0; // Minimum humidity % x 10
const TEMP_MAX_HUMIDITY = 1000; // Maximum humidity % x 10
const THRESHOLD_HUMIDITY = 80;

const ENDPOINT = 'http://localhost:8080/api/v1/temperature'; //Middleware Endpoint ex: http//localhost:8000/api/temperature

// ---------------- END -------------------

function sendData(data) {
    if (ENDPOINT != null && ENDPOINT != '') {
        console.log('Sending frame...');
        // axios.post(ENDPOINT, { firstname: "Luca" }).then((res) => {
        // console.log(res.data);
        // });
    } else {
        console.log('ENDPOINT is not configured.');
    }
}

function start() {
    //TEMPERATURE
    //Generate random value and convert it into hexadecimal
    const temperature = utils.randomNumber(TEMP_MIN, TEMP_MAX);
    console.log("temperature : " + temperature);
    temperature2 = temperature / 10;
    let code, value, frame;
    if (temperature > THRESHOLD) {
        code = utils.toByte((30).toString(16), 1);
        console.log("code : " + code);
        //Create frame
        value = utils.toByte(temperature.toString(16), 2);
        value = value + utils.toByte(THRESHOLD.toString(16), 2);
        console.log("value : " + value);
        frame = code + value;
        console.log("frame : " + frame);
        sendData(frame);
    }
    let point1 = new Point('mesure')
        .tag('tagname1', 'tagvalue1')
        .intField('temperature', temperature2)

    void setTimeout(() => {
        writeClient.writePoint(point1)
    }, 1 * 1000) // separate points by 1 second

    void setTimeout(() => {
        writeClient.flush()
    }, 5000)

    //HUMIDITY
    //Generate random value and convert it into hexadecimal
	const humidity = utils.randomNumber(TEMP_MIN_HUMIDITY, TEMP_MAX_HUMIDITY);
    humidity2 = humidity / 10;
	let code2, value2, frame2;
	if (humidity > THRESHOLD_HUMIDITY) {
		code = utils.toByte((10).toString(16), 1);
		//Create frame
		value2 = utils.toByte(humidity.toString(16), 2);
		value2 = value2 + utils.toByte(THRESHOLD_HUMIDITY.toString(16), 2);
		frame2 = code2 + value2;
		sendData(frame2);
	}
	value = utils.toByte(humidity.toString(16), 2);
	//Add Frame
	code = utils.toByte((20).toString(16), 1);

	//Create frame
	frame = code + value;
	sendData(frame);
    let point2 = new Point('mesure')
        .tag('tagname1', 'tagvalue1')
        .intField('humidity', humidity2)

    void setTimeout(() => {
        writeClient.writePoint(point2)
    }, 1 * 1000) // separate points by 1 second

    void setTimeout(() => {
        writeClient.flush()
    }, 5000)
}

setInterval(() => start(), DELAY);

// repl.repl.ignoreUndefined=true

// import {InfluxDB, Point} from '@influxdata/influxdb-client';

// const token = "H6Xm-Iywo0mIW5F-ar7-QSmhJwS4TQXEkQpUXCLjYy9Aq2XQNj31cCqifQYwxdPlMOzWQ8lUgUbGYhsiSR3YuQ==";
// const url = 'http://localhost:8086/orgs/97057aa9d74d6749/';

// const client = new InfluxDB({url, token});

// let org = "root";
// let bucket = "root";

// let writeClient = client.getWriteApi(org, bucket, 'ns')

// for (let i = 0; i < 5; i++) {
//   let point = new Point('measurement1')
//     .tag('tagname1', 'tagvalue1')
//     .intField('field1', i)

//   void setTimeout(() => {
//     writeClient.writePoint(point)
//   }, i * 1000) // separate points by 1 second

//   void setTimeout(() => {
//     writeClient.flush()
//   }, 5000)
// }
// repl.repl.ignoreUndefined=true;
// import { InfluxDB, Point } from '@influxdata/influxdb-client';
// const token = "uL15WIXKzYoqp9IW2EtN5Qs6E-b7ibyR1gs4yzvqVs1W3eMLGudsaO7oTu9tjDUFtpqeoY-gjlzHoJBx_AM0lg==";
// const url = "http://localhost:8086/";
// const client = new InfluxDB({ url, token });
// let org = `root`
// let bucket = `root`

// let writeClient = client.getWriteApi(org, bucket, 'ns')

// for (let i = 0; i < 5; i++) {
//   let point = new Point('measurement1')
//     .tag('tagname1', 'tagvalue1')
//     .intField('field1', i)

//   void setTimeout(() => {
//     writeClient.writePoint(point)
//   }, i * 1000) // separate points by 1 second

//   void setTimeout(() => {
//     writeClient.flush()
//   }, 5000)
// }
// console.log("aaaaaaaaaaaaaaaaa" + temperature2);

// Execute a simple query

let queryClient = client.getQueryApi(org)
let fluxQuery = `from(bucket: "root")
 |> range(start: -10m)
 |> filter(fn: (r) => r._measurement == "mesure")`

queryClient.queryRows(fluxQuery, {
    next: (row, tableMeta) => {
        const tableObject = tableMeta.toObject(row)
        // console.log(tableObject)
    },
    error: (error) => {
        console.error('\nError', error)
    },
    complete: () => {
        console.log('\nSuccess')
    },
})
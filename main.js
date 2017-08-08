const ml = require('ml-regression');
const csv = require('csvtojson');
const SLR = ml.SLR; 
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const csvFilePath = 'advertising.csv';
let csvData = [],
    x = [],
    y = [];

let regressionModel;

csv() 
    .fromFile(csvFilePath)
    .on('json', (jsonObj) => {
        csvData.push(jsonObj);
    })
    .on('done', () => {
        dressData();
        performRegression();
    });

function dressData() {
    csvData.forEach((row) => {
        x.push(f(row.Radio));
        y.push(f(row.Sales));
    });
}

function f(s) {
    return parseFloat(s);
}

function performRegression() {
    regressionModel = new SLR(x, y);
    console.log(regressionModel.toString(3));
    predictOutput();
}

function predictOutput() {
    rl.question('Enter input x for prediction (Press CTRL+C to exit) : ', (answer) => {
        console.log(`At x = ${answer}, y = ${regressionModel.predict(parseFloat(answer))}`);
        predictOutput();
    });
}
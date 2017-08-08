const ml = require('ml-regression');
const csv = require('csvtojson');
const SLR = ml.SLR; 

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
    predictionOutput();
}

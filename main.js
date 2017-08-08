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
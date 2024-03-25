// Prompting user for input
const prompt = require("prompt-sync")({ sigint: true });
const basicSalary = parseFloat(prompt("Input yearly basic salary: "));
const allowances = parseFloat(prompt("Input yearly total allowance: "));
//creates a formula that calculates taxable income
const taxableIncome = basicSalary + allowances;
//creates the taxable bands for each category
let band1 = Math.trunc(288000 * 0.1);
let band2 = Math.trunc(99000 * 0.25);
let band3 = Math.trunc(5611999 * 0.3);
let band4 = Math.trunc(3599999 * 0.325);
let band5 = Math.trunc((basicSalary - (band1 + band2 + band3 + band4)) * 0.35);

//calculates the payee
function paye() {
    if (taxableIncome > 0 && taxableIncome <= 288000) {return band1;}
    if (taxableIncome > 288000 && taxableIncome <= 388000) {return band2 + band1;}
    if (taxableIncome > 388000 && taxableIncome <= 6000000) {return band3 + band2 + band1;}
    if (taxableIncome > 6000000 && taxableIncome <= 9600000) {return band4 + band3 + band2 + band1;}
    if (taxableIncome > 9600000) {return band5;}
}
//Calculates the gross salary
let relief=16896;
const grossSalary=paye()-relief;

//calculates NHIF deductions
function nhif() {
    let calculatedPaye = grossSalary;
    if (calculatedPaye >= 40000 && calculatedPaye <= 45000) {return 1000;}
    if (calculatedPaye >= 45000 && calculatedPaye <= 44999) {return 1100;}
    if (calculatedPaye >= 50000 && calculatedPaye <= 59999) {return 1200;}
    if (calculatedPaye >= 60000 && calculatedPaye <= 69999) {return 1300;}
    if (calculatedPaye >= 70000 && calculatedPaye <= 79999) {return 1400;}
    if (calculatedPaye >= 80000 && calculatedPaye <= 89999) {return 1500;}
    if (calculatedPaye >= 90000 && calculatedPaye <= 99999) {return 1600;}
    if (calculatedPaye >= 100000) {return 1700;}
}
//calculates NSSF deductions
const nssf=basicSalary*0.06;
const netsalary=grossSalary-nhif()-nssf;
//console.logs the results
console.log(paye());
console.log(grossSalary);
console.log(nhif());
console.log(nssf);
console.log(netsalary);
## Introduction

For this code challenge, i'm required to write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. It should be able to calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
## How to use the system
1. Make sure you have node.js installed in your system
2. Navigate to the index.js file
3. Run the program by typing node index.js on the terminal
4. Follow the prompt to input the yearly basic salary and the yearly total allowance
**Note** The basic salary and the total allowances should be yearly
5. The program will calculate and display the payee, gross salary, nhif, nssf and net salary(in that order)
## Implementation Details
The system uses prompt sync to prompt the user to input the details
It calculates the Taxable income by adding the basic salary to the allowances provided by the user
Paye(pay as you earn) is calculated by predefined tax bands and the rates
gross salary is calculated by subtracting the relief from the paye
NHIF is calculated based on predefined salary ranges
NSSF is calculated by getting 6% of the basic salary
Net salary is calculated by subtracting NHIF and NSSF from the gross salary

## Creator
This program was created by Elvis Moses

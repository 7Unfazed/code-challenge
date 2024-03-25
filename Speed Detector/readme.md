 ## Introduction 
  I'm required to write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
## Expectations
if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
## How to Use
1. Make sure you have node.js installed in your system
2. Navigate to the index.js file
3. Run the program by typing node index.js on the terminal
4. Follow the prompt to input the speed of the car
## Implementation Details
The system uses prompt sync to prompt the user to input the details
If the speed of the car is less than or equal to 70 km/h, it outputs "Ok" indicating no demerit points.
If the speed exceeds 70 km/h, the program calculates demerit points using a predefined formula.
Demerit is calculated by ((speed-70)/5) and rounded down to the nearest integer
If the demerit points are more than 12, the system displays License suspended
## Author
This demerit calculator program was created by Elvis Moses.



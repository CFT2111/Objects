

// 1. The following code declares an object literal.
// a) Write a line of code that will display the name property of this object in a console message. e.g. it should output 'England'.
// b) Write a line of code that will display additional properties of this object in a console message. e.g. it should output 'England is a country in Europe. The capital city of England is London.'
// c) Add another property to store the population of England (53000000). Test this works.

const country={
  name : "England",
  capital : "London",
  continent : "Europe",
}

// 2. The following code creates an array of objects.
// a) Using this array and a console.log output the capital of USA.
// b) Using this array and a console.log output 'England has a population of 53000000'.
// c) Add two more country objects to the array
// d) Use a forEach loop to output the name and capital city of each country in the array
// e) Use the filter() method to generate a new array that only contains countries from Europe. Test this works.


const countries=[
    {name : "England", capital : "London", continent : "Europe", population: 53000000},
    {name : "France", capital : "Paris", continent : "Europe", population: 67000000},
    {name : "USA", capital : "Washington", continent : "N. America", population: 325000000}
]

// 3. Write a program that will prompt the user for the name of a continent. 
//    The program should then output the countries from that continent.

// 4. Modify question 3 so that the program also prompts for a minimum population. 
//    The program should then output the countries that match both the specified continent and minimum population
//    e.g. if the user enters 'Europe' and 60000000 France (but not England) should be displayed.

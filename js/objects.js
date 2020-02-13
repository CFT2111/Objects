
/*
1. The following code declares an object literal.
a) Write a line of code that will display the name property of this object in a console message. e.g. it should output 'England'.
b) Write a line of code that will display additional properties of this object in a console message. e.g. it should output 'England is a country in Europe. The capital city of England is London.'
c) Add another property to store the population of England (53000000). Test this works
*/


// const country={
//  name : "England",
//  capital : "London",
//  continent : "Europe",
//   population: 53000000
// }

// //a)
// console.log(country.name);
// //b)
// console.log(`${country.name} is a country in ${country.continent}`);
// //c)
// console.log(`${country.population}`);

/*
2. The following code creates an array of objects. Using this array output the following information using a console.log.
a) Using this array and a console.log output the capital of USA
b) Using this array and a console.log output 'England has a population of 53000000'
c) Add another country object to the array
d) Use a forEach loop to output the name of each country in the array
e) The use the filter method to create a new array that only contains countries from Europe.
*/

// const countries=[
//     {name : "England", capital : "London", continent : "Europe", population: 53000000},
//     {name : "France", capital : "Paris", continent : "Europe", population: 67000000},
//     {name : "USA", capital : "Washington", continent : "N. America", population: 325000000}
// ]

// //a)
// console.log(`${countries[2].capital}`)
// //b)
// console.log(`${countries[0].name} has a population of ${countries[0].population}`)

// //d)
// countries.forEach(
//   function(country){
//     console.log(`${country.name}`);
//   }
// )

//// e)
// const europeanCountries = countries.filter(
//   function(country){
//     if(country.continent === "Europe")
//     {
//       return true;
//     }
//     return false;
//   }
// )

// europeanCountries.forEach(
//   function(country){
//     console.log(`${country.name}`);
//   }
// )

/*
3. Write a program that will prompt the user for the name of a continent. The program should then output the countries from that continent.
*/


/*
4. Modify question 3 so that the program also prompts for a minimum population. The program should then output the countries that match both the specified continent and minimum population e.g. if the user enters 'Europe' and 60000000 only France should be displayed.
*/

//answer for Q3 and Q4 combined
// const contChoice = prompt("Enter the name of a continent");
// const popChoice = prompt("Enter a minimum value for population");

// const matchingCountries = countries.filter(
//   function(country){
//     if(country.continent === contChoice && country.population >= popChoice)
//     {
//       return true;
//     }
//     return false;
//   }
// )

// matchingCountries.forEach(
//   function(country){
//     console.log(`${country.name}`);
//   }
// )

# Sparta Global Webdev4 Project 3: Crime in a particular area

## Synopsis
This project uses two external API's (Google Maps and Police UK) to allow the user to know the number of crimes that take place in a given location. It also uses the rMVC approach and utilises HTTP requests. It allows user to enter in a certain location using the Google Maps API, then the Police UK API to get the type and number of crimes in that location.

This project was undertaken to solidify understand of how to use external API's and the process that needs to take place in order to generate the informationf from them.
It also solidified the relationship between server and client side and how they link together to generate the information.

## Installation

To use this app:
* Clone the [repository](https://github.com/jcolairo/sg-project-3)
* In the command line `npm install` (this will install all the necessary dependancies stored in the `package.json` file)
* In order to spin up the server the following command must be inputted to the terminal `npm run nodemon`.

## Functions
* In order to use the app the user needs to firstly register with an email and a password. This allows the user to access the data from the API's.
* Once they have logged in they then can access the google API by entering a location.
* Then the user needs to enter a type of crime. They have an option to enter a date. If no date has been entered then it be defaulted to the most recent date in the Police API (at this moment in time it is 2017-01).
* The user can then view the number of crimes that have been commited in that partiular area. 


##Technologies Used
* The server is running with [`node.js`](https://nodejs.org/en/) and express
* The client-side is using `angular.js`
* The model is processed via `mongod`
* The app is built with HTML and CSS


## Contributors

[James Colairo](https://github.com/jcolairo)

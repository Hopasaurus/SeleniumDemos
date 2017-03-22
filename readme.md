

Main items of interest at the moment are in <repo root>\Fitness_SlimJs

This uses Slim Js to interface Fitnesse to Javascript.
https://github.com/noamtcohen/SlimJS

install npm module:
    npm install -g slimjs
    npm install -g webdriver-manager
    npm install -g @angular/cli

start webdriver manager:
    webdriver-manager start

start the test ap
cd <repo root>\sample_app\ShoppingCart
ng start

then you can check the app out at http://localhost:4200

download fitness jar file and put it in <repo root>\Fitnesse_SlimJs (TODO:  will setup a script for this)
start fitnesse with:
    startFitnesse.bat

navigate here and see if it works:
http://localhost:8080/SlimJsPage.CheckingIsNotTestingTest
    - this is a test to test SlimJs + Fitnesse + WebDriver

 http://localhost:8080/SlimJsPage.CartTest1
    - this uses the sample shopping cart page.



Detect what files changed in the commit and run most pertinant tests first!!

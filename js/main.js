//So, everything that I've been taught so far is for the sake of being able to do OOP (object oriented programming)



//the basics of creating objects and classes is simple, the trick is knowing what to place into each one for the sake of organizing code


//below will be listed some concepts and principles that can help guide to make good decisions with objects. It's not mandatory but a good guide


//Single Responsibiilty

//basically means, a class, object, module etc should only have one responsibility. not that it cannot do more than one thing, but it makes the code neater.


//Loosely coupled objects

//naturally everything has to work together to form a final application. However, ideally the objects should be able to stand alone as much as possible. "Tightly coupled" objects that are to reliant on each other means removing or changing one can collapse another.

//ideally, w.e logic im working on (if its a user interface for a game) should first work in the console.log, and then add a bunch of DOM functions later that can be shown to the user. This way, it wouldn't touch the game logic.



//The single responsibiity is one of 5 principles under the acronym SOLID

//all five being Single responsibility, Open-closed, Liskov substitution, Interface segregation, and Dependency inversion


//Open closed

//this principle means that code should be open for extension, but closed fo rmodifcation

//https://duncan-mcardle.medium.com/solid-principle-3-liskov-substitution-javascript-fdb6af8ee1ea

//listov substitution

//this means that nay class that that extends off of a parent, should be substitutable without any unexpected consequences. an exmaple would be a rectangular square problem. If the rectangle is the parent of the square, the height and width will be the same for the rectangle, but the square would require all sides to be the same

//dependency inversion

//Avoiding high level code that depend son low level interfaces. Rather use abstraction... Basically, don't have an important process not be able to run if a not important process doesn't run. aka, the payment of a site causes the entire site to crash if paypal is changed to something eles. "Abstract" that payment portion from the rest of the site so it can be altered without the site crashing. In the example, more code is used, so it's not quicker, but it is better
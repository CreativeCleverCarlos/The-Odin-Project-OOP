//So, everything that I've been taught so far is for the sake of being able to do OOP (object oriented programming)



//the basics of creating objects and classes is simple, the trick is knowing what to place into each one for the sake of organizing code


//below will be listed some concepts and principles that can help guide to make good decisions with objects. It's not mandatory but a good guide


//Single Responsibiilty

//basically means, a class, object, module etc should only have one responsibility. not that it cannot do more than one thing, but it makes the code neater.


//Loosely coupled objects

//naturally everything has to work together to form a final application. However, ideally the objects should be able to stand alone as much as possible. "Tightly coupled" objects that are to reliant on each other means removing or changing one can collapse another.

//ideally, w.e logic im working on (if its a user interface for a game) should first work in the console.log, and then add a bunch of DOM functions later that can be shown to the user. This way, it wouldn't touch the game logic.



//The single responsibiity is one of 5 principles under the acronym SOLID

//all five being Single responsibility, Open-closed, Liskov substitution, Interface segregation, andDependency inversion
# Should you use Frigg?

## Why you would want to use Frigg

* You need to enable end users of your app to work with many APIs that interact with their external data in a low-touch, no-code UX.
* You want a serverless architecture that allows for zero or low cost when there is little to no usage, but will scale quickly without DevOps/infrastructure management overhead
* You want to use tried and true common integration patterns that take advantage of general API features and features specific to a given API, without having to come up with those patterns yourself
* You want to use Frigg as a micro service to handle your API integrations
* As a whole community of developers solves bugs and adds features, we all benefit from an easier integration development experience. Thousands of developers will solve problems much faster than any one company or developer ever could.
* The library of API modules is ever growing and improving, and it's simple/easy to add your own.
* New recipes, workflows, and code patterns are added at a regular basis by the core team and by community contributors that could greatly benefit your own integrations
* You'd like to involve external developers to contribute their code to your integrations, but you don't want them to get access to your whole primary codebase
* Other solutions are too costly and you do not want to re-invent the wheel

## Why you may not want to use Frigg

* You only need to interact with one API. (Frigg can still do this but the learning curve might out weigh the cost).
* You don't want to use serverless, or you want to use a technology that is not yet supported by the core framework.
* Frigg is not yet mature enoughto use.
* You already have a working framework for developing integrations rapidly.

## How is Frigg different than passport js?

If you've been programming very long in Javascript, you might've used a library called passport JS. This was a library that was intended to handle authentication to many third-party surfaces from express applications. It was widely used and handled authentication only. You can read more about it [here](https://www.passportjs.org/).&#x20;

* Frigg handles authentication and credential storage for you
* Frigg exposes API methods from the API with a layer of abstraction
* Frigg's primary focus is on the actual development of the business logic that powers an integration; Passport.js focuses on user authentication and identification.
* Frigg has opinions on compute and has primitives based on serverless compute to build that into integration logic


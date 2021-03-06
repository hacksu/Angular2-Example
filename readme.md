A project to demonstrate the basics of using Angular 2


# Instructions

## Download the repository

Go to http://bit.ly/hacksuangular and download the zip file or clone the repository
open the folder up and unzip if necessary

## Start the server

cd into the directory where you download the repository usually `cd ~/Download/Angular2-Example`
start the server by typing `npm start`, if you have an error type `npm install` and try it again

It should open a tab in your browser where you should see `Hello World`,
if either of those things don't happen ask and we'll work it out.

## `npm`?

This project uses `npm` a package manager to download the required project. Here
the repository already actually has packages downloaded and installed which is
not the recommended way of doing things. Here hopefully it will make it easier for
others to follow along. If you want to know how to set this up and much more see
the documentation here https://angular.io/docs/ts/latest/quickstart.html.

## Angular 2?

You may have heard of Angular.js, that was the original Angular and in no small
part because of the radical departation is not likely to go anywhere soon, but
Angular 2 is a quite different beast. Like Angular.js asp.NET and indeed many things
it is a web framework. A framework on which you can put your own implementations to make building a website easier.

Unlike some others it can be written entirely in JavaScript, though Typescript a
an extension that adds strong typing to JavaScript is preferred. Lucky Typescript
completely compatible with JavaScript. And the project is already set up to compile
it into js, though it can also be done directly in the browser with another JavaScript
library,

## But how does this actually work

### `index.html`

Lets start by looking at the `index.html`. First we see a good deal of of
libraries being imported. Most of these are so called Polyfills for IE, adding
support for JavaScript and html features that IE does not natively implement.

You may notice, though that none of our Typescript or JavaScript files are imported.

This is because System.js manage this. Systems.js can get complicated fast, but here
we just have a `<script>` tag which configures it and tells it to import our main.ts file.

The only other part in the index is  `<my-app>Loading...</my-app>`. It's honestly
the strangest part though. It doesn't really seem like it should work. <my-app>
isn't a tag in html, instead it is a custom component we have implemented.

### `main.ts`

`main.ts` doesn't do much. It just imports Angular and our my app component and
and starts Angular


### `app.component.ts`

`app.component.ts` is the core of our application. It is what Angular 2 calls a
component. Basically it is a custom tag implemented as the combination of some HTML, the template and
a class to store it's behavior.

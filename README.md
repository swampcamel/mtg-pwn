# Mtg Pwn

## Description

This is an angular sandbox for practicing building an admin area for cards.  I utilized a JSON object with information on the GRN card set for the card game 'Magic the Gathering,' which I found at https://mtgjson.com.  This provided me with a large JSON object to work with in an admin area.

The main component view is a list of all the cards in the GRN cards list.  
Clicking on the name of a card will bring you to a card detail view where you can edit details about the card.  Clicking commit will save it to the database.  

When in the card list view, clicking on the '-' button will display a prompt that will allow you to delete a card from the database.  

Another view accessed through the Add Card button will allow you to fill out a form to add a new card to the database.  

Finally, an unbuilt area for displaying deck lists is behind deck list, but is there for dummy purposes and has no functionality.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.5.
This project was built with [Angular](https://angular.io/) version 6.1.0
This project utilizes [Firebase](https://firebase.google.com/) version 5.5.5

## Cloning and Installation

After cloning, navigate to folder and run `npm install`.

Navigate to `./src/app` and create a new file called `api-keys.ts`

Use the following code, replacing the API key with your database's settings and API key:

```javascript
export const masterFirebaseConfig = {
    apiKey: "****************",
    authDomain: "*****.firebaseapp.com",
    databaseURL: "https://*****.firebaseio.com",
    projectId: "*****",
    storageBucket: "*****.appspot.com",
    messagingSenderId: "*****"
};
```

If issues with build or serve, check `package.json` against this repo and install any missing packages with correct versions.  

## Development Server

Run `ng serve --open` for a dev server and an open browser window of the app at `localhost:4200`.

## Production Server

A live production server is currently up at https://mtg-test-29e1e.firebaseapp.com/

To build a production server, run `ng build --prod`.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Activity tracker APP

In order to install and run this app you must have yarn or npm previously installed.

## Installation

To intall the app, first clone this repository and open a terminal on the root folder (which contains the 'package.json' file).  
Then run: `yarn` or `npm install`.

## Run the app

To run the app, open a terminal on the root folder and use yarn or npm:
`yarn start` or `npm start`.
The app will now be running on //localhost:3000

## Link the app with the back-end

As the back-end part is not available so far, for the development and testing, the app get a list of 4 activities.
If you want to link it with the back-end part you just need to make a few changes in the file `'src/services/activities-api-services.js'`:

- set the const `devTest = false`
- set the API endpoint url with the const `URL`
- you can also set an autorization token, if needed, with the const `TOKEN` (else, leave it as null)

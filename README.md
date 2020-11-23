# Activity tracker APP

In order to install and run this app you must have yarn or npm previously installed.

## Installation

To intall the app, first clone this repository and open a terminal on the root folder (which contains the 'package.json' file).  
Then run:
`yarn` or `npm install`.

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

  <br />

About the API:

- It should include an endpoint that responds to GET request with a json object that contains a list of activities following this structure:

  ```
  {[
  {
      id: "1",
      name: "Netflix and chill",
      covidFriendly: "yes",
      timesPerformed: "10",
  },
  {
      id: "2",
      name: "Birthday in a restaurant",
      covidFriendly: "no",
      timesPerformed: "0",
  },
  {
      id: "3",
      name: "Vacations in Hawaii",
      covidFriendly: "no",
      timesPerformed: "1",
  },
  {
      id: "4",
      name: "Becoming Maria Kondo",
      covidFriendly: "yes",
      timesPerformed: "2",
  },
  ...
  ]}
  ```

- It must also acept PUT requests to update the activities table.  
  · The url will be followed by the activity id (E.g. http://localhost:8000/api/activities/4/).  
  · The request body will have the following structure:

  ```
  {
    id: "4",
    name: "Becoming Maria Kondo",
    covidFriendly: "yes",
    timesPerformed: "3",
  }
  ```

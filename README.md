# Health Qlix Rolodex Client

## About the Project

These are front-end React wireframes that could be used as the jumping-off point for a front-end/backend Health Qlix Rolodex application.

## Routes
- ```/``` — This route renders the root view which would display all customers.
- ```/add``` — This route renders the form to add a new customer.
- ```/details``` — This route renders the expanded customer details.

## Styling

The styling choice for this application is very minimal, but also user-friendly. When dealing with large amounts of data, the least amount of items on the screen seems to be a bonus. This helps the user interact with the site intuitively.

The main icon, font, and colors and were taken from the Health Qlix website to create a sense of continuity.

## Significant Features 

### State and Interactivity
In order to create interactivity with this application, the project needs to be refactored with state. The NewCustomerForm component needs to implement state so that the form component can manage state independently of the rest of the application. State here would consist of the various form inputs and their corresponding data. This data would then be sent to the server in the form of a POST request to add a new customer to the database. 

The NavBarSearch component would also be a controlled component that manages state independently. This would allow the search query to dynamically render the filtered customer results as state changes.

### Backend

For this project, I would suggest either PostgreSQL or MongoDB for database management. PostgreSQL is used for relational databases and would be a good choice for large datasets like customer data. However, MongoDB is specifically meant for non-relational database management. Seeing how the customer data is non-relational (i.e. doesn't connect to other datasets like orders or items). This feature might mean that a database created using Mongo would be the ideal choice.

If you want to use knex to create simpler SQL queries, this can also be used with Mongo. The packages I prefer are mongo-to-knex and mongo-knex, leaning strongly towards mongo-knex because it's recently maintained.

To manage the server and API calls, this would be a simpler project, and Express would do. The main HTTP request would be a GET request to request the list of all customers and their data. The second HTTP request would be a GET request to receive a filtered list of customers based on the user's search query. The expanded detail view for each customer would not require an HTTP request to the server as this data could be computed from one of the above requests. All hardcoded data would be replaced with data either directly from the server response or computed from these responses. 

Per standards, the backend would require standard error/info logging, security, and token handling middleware.

## Authentication
When dealing with personally identifiable information, security is a top concern. This application would benefit from the use of JWT tokens to register session use. These 'tokens' can be used to identify multiple admins and would make the system more secure. Logins would be required for system use.   

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Acknowledgements

- React Bootstrap
- ![faker.js](https://github.com/marak/Faker.js)
- ![mongo-knex](https://www.npmjs.com/package/@nexes/mongo-knex)
- ![mongo-to-knex](https://www.npmjs.com/package/@nexes/mongo-knex)

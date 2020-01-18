This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# Lab 25 
## `<Login />` and `<Auth />`

### Author: Nadya Ilinskaya/Seattle-js-401n14

### Links and Resources

- [Code SendBox](https://codesandbox.io/s/gifted-ives-ikxmy)
- [Netlify](https://csb-ikxmy.netlify.com)

### Modules

#### /backend <- starter code
#### /frontend/src <- lab code
    - /components
        App.js
        Login.js
    - /contexts
        AuthContext.js
    - /form-elements
        FormInput.js


## How to run backend

```
mongod --dbpath=./data
```

Once your mongoDB is running, you can start your server using `node index.js` or `npm start`. This should cause it to run on port 3000.

#### Server Endpoints

For this lab, you should not need to change anything in the API server. Instead, your front-end application will request data from different endpoints on this server. Here's an overview of the API endpoints you'll need:

##### Login

```
POST /signin
- Will need:
    - Request Headers.Authorization set to a basic auth string (of the format 'Basic ' + base64Encoding(username + ':' + password))
- Returns:
    - JSON object containing token and role: {token: '', role: ''}
```

##### Sign Up

```
POST /signup
- Will need:
    - Request body set to an object containing username, password, email and role as key-values
- Returns:
    - JSON object containing token and role: {token: '', role: ''}
```

##### Books

```
GET /books
- Will need:
    - Request Headers.Authorization set to a bearer auth token string (whatever was received from /signin or /signup)
- Returns:
    - Array containing Book objects with title, author and authorization for each book object
```

```
POST /books
- Will need:
    - Request body set to an object containing title, author, and auth as key-values where auth is an array of roles (ex: ['admin', 'user', 'editor'])
- Returns:
    - Empty object on success
```
## How to run Frontend


In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
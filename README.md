# LAB - `<Login />` and `<Auth />`

In this lab, you will be writing a front-end application that allows for Login, Sign Up, and Role Based Access Control.

## Requirements

Your task for this lab will be to connect to an API server which houses the endpoints for logging in, signing up, etc. Once connected, you should be able to make requests and display responses in your front-end application.

### Sample API Server

You will have access to a sample server that you can run both locally and remotely. **Please use a local version of the server while developing**. This will ensure that your changes aren't made to the production level database. When you are ready to submit, change your app from using your local server to using the remote server located at []().

This API Server is essentially the server we developed together during Class 14. Some small adjustments have been made to best suit this lab.

#### How to Run the Sample Server Locally

You can find a version of the server for local development in the `starter-code` folder. Once downloaded, run `npm install` and then be sure to start a MongoDB local database. You can use a blank MongoDB instance, an instance from a previous class, or you can start the MongoDB with the data in the `starter-code/data` folder:

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

### Sample Implementation

You can find an example of a possible solution to this lab here:

[Sample Lab](https://js401n14-lab25.netlify.com/)

Note that this example is just for your reference, **your final lab does not need to match this example exactly**. A few things to note from this implementation:

-   The [Bootstrap](https://getbootstrap.com/) CSS framework is used for styling, along with some custom Sass
-   This project has the `App` component, as well as the following component structure:
    -   `AuthContext` contains the context and provider for authentication-related variables and functions
    -   `AuthVerify` is a component that renders its children if the authenticated user exists and/or matches a role
    -   `LoginForm` displays the form fields for logging in or signing up, as well as the Log Out button once a user is logged in
    -   `BookViewer` shows an authenticated user all the books they are allowed to see
    -   `BookAdder` displays form fields that let you add a book, given that you are an admin authenticated user
-   `node-fetch` is used to make requests to the API endpoints

### Use CodeSandbox

For this React lab, you will be required to work in a [CodeSandbox](https://codesandbox.io/) project, instead of local code uploaded to Git. The reason for this is so that we can grade your work easier!

You can find instructions for how to create a CodeSandbox project in the class 18 [README](../../class-18/README.md#CodeSandbox).

### Must-Haves

For these front-end assignments, there is a lot more room for creativity and exploration. Typically, there will be a provided sample implementation that you can use for reference / inspiration. You do not have to duplicate this sample implementation; instead there are always a few key requirements that your application **must have** to get full points. Here are the must-haves for this lab:

-   You must implement an authentication context which stores / shares authentication related variables and functions across its children
-   You must have a login AND sign up functionality
    -   Login must ask for username and password
    -   Sign up must additionally ask for email and role
-   You must have a log out button visible after a successful authentication
-   Once authenticated, the user should see all the books available to their role
-   Users of role 'admin' should see something that lets them add a new book
    -   This form should ask for the book title, author, and the role(s) that should be able to see this book
-   Custom Sass styling
    -   All custom style code must be in Sass
    -   If you would like to use a CSS framework, you must have some custom sass styles as well
    -   Sass code should be well structured and non-repetitive using partials and mixins
    -   Display API errors in a pleasing and informative way

### Commenting

You are required to comment each class and function using proper [JSDoc comments](https://devhints.io/jsdoc).

### Tests

There is no testing required for this assignment.

### Deployment

Deploy your CodeSandbox application to Netlify (CodeSandbox has that built in!). When deploying, ensure that you connect your application to the live version of the API (not one running on localhost)

## Assignment Submission Instructions

As usual, you will be required to have a `README.md` that you submit, containing a link to your CodeSandbox, deployed website, and UML Diagram.

Create a new repository for this lab. [Connect this repository to your CodeSandbox](https://codesandbox.io/docs/git), and connect your repository to Travis as in your backend labs.

### Configure your repository

Configure your folder with the following files and directories.

-   `README.md` - contains your lab documentation ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/reference/submission-instructions/labs/README-template.md))
-   `.gitignore` - contains a robust .gitignore file ([template](https://github.com/codefellows/seattle-javascript-401n14/blob/master/configs/.gitignore))
-   `package.json` - contains `npm` package config and scripts

### Submit to Canvas

-   Ensure that your `README.md` exists and has:
    -   A link to your CodeSandbox
    -   A link to your deployed site
    -   Instructions for how to operate your application
        -   Please be clear and descriptive
        -   If parts of your application are broken, use this section of your README to describe how to run the working code so you can get partial points
    -   Embedded UML diagram image

**Be sure to delete any placeholder content if you use `README-template.md`.**

Once you've ensured your `README.md` is correct, within Canvas submit a link to your `README.md`

### Resubmitting

In order to resubmit, you can add another submission on the Canvas assignment with the same link to your `README.md`. Optionally, add a comment on your submission describing what changed in your resubmit.

## Grading Rubric

| Criteria                                                          | Points |
| ----------------------------------------------------------------- | ------ |
| Features: Score based on % of features demonstrably completed     | 2      |
| Code Implementation: Efficiency of code + Comments + Code Quality | 3      |
| Style: Components are styled in a pleasing way with custom Sass   | 3      |
| Deployment to Netlify                                             | 1      |
| Documentation: README + UML + Links                               | 1      |
| Total:                                                            | 10     |

# Backend Basics

## A RESTful CRUD API with Node.js and Express.js

We will use ....

### Node.js

- Node.js® is a free, open-source, cross-platform JavaScript runtime environment Node lets developers create servers, web apps, command line tools and scripts.We often use Node.js to build backend services (APIs).

### Express.js

- Express.js is a widely-used, minimalist web application framework for Node.js. It provides a robust set of features for building web and mobile applications and APIs on top of the Node.js runtime environment. 

- It is a framework built on top of Node.js that allows you to create your Backend with ease. You can use Express in combination with frontend frameworks like React, Angular, or Vue to build full-stack applications.

### HTTP Protocol

- HTTP (Hypertext Transfer Protocol) is the communication protocol used by web browsers and servers to exchange information over the internet. When you visit a website or use an app, your device sends an HTTP request to a server, and the server sends back an HTTP response.

- Common HTTP methods include:
  - GET : retrieve data
  - POST : send new data
  - PUT : update existing data
  - DELETE : remove data

- For example:
  - GET /users → retrieve a list of users
  - POST /users → create a new user

### REST (Representational State Transfer) API

- REST is a software architectural style created by computer scientist Roy Fielding in 2000.

- A REST API is a common way to design web services using HTTP. In a REST API, data and actions are organized around resources, usually represented by URLs.

- Example REST endpoints:
  - /users
  - /products
  - /orders/15

- REST APIs typically follow these principles:
  - Use HTTP methods appropriately (GET, POST, PUT, DELETE)
  - Keep requests stateless (each request contains all needed information)
  - Return data in a standard format, usually JSON

- In modern web applications—such as the React/Firebase projects—REST APIs are often used so the frontend can communicate with a backend server or database.

#### Common REST API Responses

- With REST APIs, a client requests a resource; the server responds to the client with a representation of the current state of that resource and all relevant information about it in a standardized format, such as JSON or XML.

- There is also an appropriate HTTP status code sent back in the response header to let the client know if the operation was successful or not.

- Some common responses are:

Common HTTP status codes used in REST API responses are grouped by category:

- 2xx – Success: These indicate the request worked.
  - 200 OK – Request succeeded and data is returned
  - 201 Created – A new resource was successfully created
  - 204 No Content – Request succeeded but there is no response bo

- 4xx – Client Errors: These mean something is wrong with the request.
  - 400 Bad Request – The request is invalid or missing data
  - 401 Unauthorized – User is not authenticated
  - 403 Forbidden – User is authenticated but not allowed to perform the action
  - 404 Not Found – Requested resource does not exist
  - 405 Method Not Allowed – The HTTP method is not allowed for this endpoint
  - 409 Conflict – The request conflicts with existing data
  - 422 Unprocessable Entity – The request format is correct, but validation failed

* 5xx – Server Errors: These mean the server failed while processing a valid request.
  - 500 Internal Server Error – General server-side error
  - 502 Bad Gateway – Server received an invalid response from another server
  - 503 Service Unavailable – Server is temporarily unavailable or overloaded

### What do we mean by CRUD API?

- In web development, CRUD (Create-Read-Update-Delete) operations are the bread and butter of backend systems. Every web application interacts with a database to perform these four core operations. Whether it's a social media platform, an e-commerce website, or a weather app, they all rely on creating, reading, updating, and deleting data.

- We will build a basic CRUD API today.

## To-Dos (Complete before leaving the class):

**1.** Install `Node.js` and `Postman`

- https://nodejs.org/en/download
- https://www.postman.com/

**2.** Create a project directory (say, BackendBasics) and then start it with your VS Code. You may create a file, like `index.js`.

**3.** Initialize NPM inside the folder by running this command in your terminal:

```javascript
npm init -y
```

**4.** Install Express.js:

```javascript
npm install express
```

**5.** Write your **server application code** inside the `index.js` file:

```javascript
// basic crud api
const express = require("express");

const app = express(); // app is your server

app.use(express.json());
// express.json() is a middleware, it helps parse json data

const port = process.env.PORT || 3000;
// use local port 3000 or any other port set by your environment

app.listen(port, () => console.log(`Listening on port: ${port}`));
```

- Save it and run by using the following command (terminal):

```javascript
node index.js
```

- You should notice something like the following:

```javascript
backend-basics % node index.js
Listening on port: 3000
...
//yahoo! you have your server running ...
```

**6.** Install `nodemon`:

- Install `nodemon` using the command `npm install -g nodemon` to automatically restart your Node.js application whenever you save changes to your code.
- This saves you from having to manually stop and restart the server every time you make an update.

```javascript
npm install -g nodemon
```

**7.** Kill the current server (close the terminal) and restart it with nodemon.

```javascript
backend-basics % nodemon index.js
[nodemon] 3.1.14
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
Listening on port: 3000
```

**8.** Now, add the following lines of code before `app.listen(....)` in your `index.js` file:

```javascript
app.get("/", async (req, res) => {
  res.send("Backend Basics...");
});
```

- Open `http://localhost:3000/` on your browser and your should see the following message there.

```javascript
Backend Basics...
```

- So, we have our express server running with the first GET API on the root route ('/').

- Note:
  - The following is an **anonymous asynchronous arrow function** commonly used as **a route handler** in Express.js:

```javascript
// also called the "call-back function"
async (req, res) => {
  res.send("Backend Basics...");
};
```

- **async** means the function can use **await** inside it for asynchronous operations such as reading from a database or calling an API.
- **req** stands for the HTTP request object. It contains information sent by the client, such as URL parameters, query strings, headers, and request body.
- **res** stands for the HTTP response object. It is used to send a response back to the client.
- **res.send("Backend Basics...")** sends the text "Backend Basics..." back to the browser or client.

**9.** Declare a local object (later will move them to a database):

```javascript
// inside index.js
// before app.get(...)
const courses = [
  {
    id: 1,
    name: "SWE",
    enrollment: 20,
  },
  {
    id: 2,
    name: "FP",
    enrollment: 10,
  },
  {
    id: 3,
    name: "Python",
    enrollment: 30,
  },
];
```

**10.** Create a new route (endpoint) to get all the data (courses):

```javascript
// in the same index.js file
app.get("/api/courses", async (req, res) => {
  res.send(courses);
});
```

- Now visit "http://localhost:3000/api/courses" on your browser and you should be able to see all the courses.

- Note:
  - `app.get(...)` tells `Express.js` to listen for HTTP GET requests.
  - `/api/courses` is the route path. When someone visits that URL, this function runs.
  - `async (req, res) => { ... }` is the route handler.
  - `res.send(courses)` sends the courses data back to the client.

  - You can describe `/api/courses` as:
    - a route
    - an API route
    - an endpoint
    - specifically, a GET endpoint for courses

**11.** Create another route to get a specific data (example: only one course, say a course with course id: 1):

```javascript
app.get("/api/courses/:id", async (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("Course does not exist...");
  else res.send(course);
});
```

- Now test it with various routes like `/api/courses/1`, `/api/courses/5`, etc.

- Note: Both `.find()` and `parseInt()` are built into modern JavaScript and are available in Node.js.

**12.** Create a new route to handle post operation (adding new data):

```javascript
app.post("/api/courses", async (req, res) => {
  const newCourse = {
    id: courses.length + 1,
    name: req.body.name,
    enrollment: req.body.enrollment,
  };
  courses.push(newCourse); // add newCourse to the existing courses
  return res.send(newCourse); //convention
});
```

- **How do we test it?**
  - Open Postman.

  - From File > New > HTTP, start a "GET" request with the route: `http://localhost:3000/api/courses/` and hopefully you will see all the courses returned in the response body with a 200 status.

  - Now open another tab for "POST" method for the same route: `http://localhost:3000/api/courses/`. In this case, click the `Body`, pick `raw`, `JSON` and add the following in the Body:

  ```javascript
    {
    "name": "Black Hawk",
    "enrollment": 100
    }
  ```

  - and hit **send**.
  - hopefully you will get another `200` response with a following message:

    ```javascript
    {
    "id": 4,
    "name": "Black Hawk",
    "enrollment": 100
    }
    ```

  - Now, if you go back to your get tab and hit `send` again, you should see something like the following:

```javascript
[
  {
    id: 1,
    name: "SWE",
    enrollment: 20,
  },
  {
    id: 2,
    name: "FP",
    enrollment: 10,
  },
  {
    id: 3,
    name: "Python",
    enrollment: 30,
  },
  {
    id: 4,
    name: "Black Hawk",
    enrollment: 100,
  },
];
```

**13.** User Input Validation

- We should not let user input directly enter in our database before checking/validating it.
  - Some validation could be: name cannot be empty, enrollment cannot be negative, etc.
- So, we may add some conditions to the `post` method and if the input passes the conditions, only then we let in add to the database.

```javascript
if (!req.body.name || req.body.name.length < 3) {
  //bad request
  return res
    .status(400)
    .send("Name is required and it must be at least 3 characters long.");
}

if (!req.body.enrollment || parseInt(req.body.enrollment) < 0) {
  //bad request
  return res
    .status(400)
    .send("Enrollment is required and it must be 0 or positive.");
}
// before newCourse ....
```

- Now we can test it on Postman using various test cases like the followings:

```javascript
{
    "name": "",
    "enrollment": 100
}
 // response: 400 Bad Request, Name is required and it must be at least 3 characters long.

 {
    "name": "Java",
    "enrollment": -100
}
// response: 400 Bad Request, Enrollment is required and it must be 0 or positive.
```

**14.** User Input Validation with **joi**:

- Instead of writing several conditions inside the post (and similar other methods), we can get help from various third-party libraries. We use one of those here, 'joi'.

- joi is a powerful schema description language and data validator for JavaScript.

- install: `npm install joi`

- url: https://www.npmjs.com/package/joi

- You should check the documentaion of joi to learn more ...

- To make our code more structured and reusable, I will do the following:

```javascript
// create a new file called 'validations.js' in the same directory
// and put the following block of code

const Joi = require("joi");
// joi returns a class, and we use pascal naming conventions for a class
// hence, its called/named as Joi

//joi schema
const courseSchema = Joi.object({
  name: Joi.string().min(3).max(15).required(),
  enrollment: Joi.number().positive().required(),
});

const validateCourse = (userInput) => {
  return courseSchema.validate(userInput);
  // return the object returned by the validate function
  // (the validate function is defined in Joi)
};

module.exports = { validateCourse };
```

- Now we will import the `validateCourse` function in the `index.js` file using the following command:

```javascript
// usually we put these commands at the top of file
const { validateCourse } = require("./validations");
```

- Then we will remove the `if-else` from the `api.post(...)` and update it like the following:

```javascript
app.post("/api/courses", async (req, res) => {
  const userInput = {
    name: req.body.name,
    enrollment: req.body.enrollment,
  };
  const { error, value } = validateCourse(userInput);

  if (error) {
    return res.status(400).send(error.message);
  } else {
    const newCourse = {
      id: courses.length + 1,
      name: req.body.name,
      enrollment: req.body.enrollment,
    };
    courses.push(newCourse); // add to the course list
    return res.send(newCourse); //convention, return the new object
  }
});
```

- If the nodemon is running properly, we should test the get and post methods once again with varius inputs (valid and invalid).

**15.** Create two more APIs (one for `put` and one for `delete`).

- make sure you use validation as necessary before putting (updating) or deleting (send appropriate message if the data doesn't exist)

- Show your work to the prof. before leaving the classroom.

```javascript
app.put("/api/courses/:id", async (req, res) => {
  //step 1: look up the course, if not found return 404, resource not found
  //step2: validate and return 400 if the input is not in good shape
  // step3: if no error, then update the course and return the updated course in the response with proper status
});

app.delete("/api/courses/:id", async (req, res) => {
  // look up the course
  // if it doesn't exist, return 404
  // otherwise delete and return appropriate message
});
```

# Points: 20 [individual submission, Canvas]

- Save your work in a github repo and submit the link.
- I will only check the code this time.

## Useful Links:

- https://nodejs.org/en
- https://expressjs.com/

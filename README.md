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

## ToDos:

1. Install Node.js and Postman

- https://nodejs.org/en/download
- https://www.postman.com/

2. Create a project directory (say, BackendBasics) and then start it with your VS Code. You may create a file, like `index.js`.

3. Initialize NPM inside the folder by running this command in your terminal:

```javascript
npm init -y
```

4. Install Express:

```javascript
npm install express
```

5. Write your Server Application Code inside the index.js file:

```javascript
// basic crud api
const express = require("express");
const app = express();
app.use(express.json()); // middleware, help parse json data

const port = process.env.PORT || 3000; // use local port 3000 or any other port set by your environment

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
```

6. Install nodemon:

- Install `nodemon` using the command `npm install -g nodemon` to automatically restart your Node.js application whenever you save changes to your code.
- This saves you from having to manually stop and restart the server every time you make an update.

```javascript
npm install -g nodemon
```

5. Kill the current server (close the terminal) and restart it with nodemon.

```javascript
backend-basics % nodemon index.js
[nodemon] 3.1.14
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
Listening on port: 3000
```

6. Now, add the following lines of code before `app.listen(....)` in your `index.js` file:

```javascript
app.get("/", async (req, res) => {
  res.send("Backend Basics...");
});
```

- Open `http://localhost:3000/` and your should see the following message there.

```javascript
Backend Basics...
```

- So, we have our express server running with the first GET API on the root route ('/').

* Note:

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

7. Declare a local object (later will move them to a database):

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

8. Create a new route (endpoint) to get all the data (courses):

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

9. Create another route to get a specific data (example: only one course, say 1):

```javascript
app.get("/api/courses/:id", async (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("Course does not exist...");
  else res.send(course);
});
```

- Now test it with various routes like `/api/courses/1`, `/api/courses/5`, etc.
- Note: Both `.find()` and `parseInt()` are built into modern JavaScript and are available in Node.js.

10. Create a new route to post a new data:

```javascript
app.post("/api/courses", async (req, res) => {
  const newCourse = {
    id: courses.length + 1,
    name: req.body.name,
    enrollment: req.body.enrollment,
  };
  courses.push(newCourse);
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

## Useful Links:

- https://nodejs.org/en
- https://expressjs.com/

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


## Useful Links:

- https://nodejs.org/en
- https://expressjs.com/

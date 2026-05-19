# Digital Bookshelf API

Lab 2: Mongoose Models and Schemas.

## Description
A RESTful API for managing a library book inventory. Built with Node.js, Express, and Mongoose.

## Tech
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- dotenv


## Setup
1. Clone the repo
2. `npm install`
3. Create `.env` at project root (see `.env.example`)
4. `node server.js`



## Security
`.env` is git-ignored. See `.env.example` for required variables.

## Author

Kwadwo 

## Acknowledgement

- Per Scholas Mongo module
- AI for sticking points like when getting errors when running server.js

## Reflection Questions

**1. Why is it beneficial to separate your routes, models, and database connection into different directories?**

Separation of concerns. Each directory has one job: `db/` handles the database connection, `models/` defines data schemas, and `routes/` handles HTTP requests. This makes the codebase easier to navigate, test, and scale. When a teammate needs to fix a route, they know exactly where to look. When the database connection changes, only one file needs to be updated. It also prevents `server.js` from becoming a massive, unmanageable file.

**2. What is the difference between `PUT` and `PATCH` HTTP methods, and which one does your `PUT /:id` endpoint more closely resemble?**

`PUT` replaces the entire resource with the data sent in the request body. `PATCH` applies a partial update — only the specified fields are changed. My `PUT /:id` endpoint uses Mongoose's `findByIdAndUpdate` with `req.body`, which only updates the fields included in the body and leaves the rest of the document unchanged. This behavior more closely resembles `PATCH` than a strict `PUT`, even though the HTTP method is labeled `PUT`.

**3. In the `DELETE` route, what is a good practice for the response you send back to the client after a successful deletion? Should you send the deleted object, a simple success message, or something else? Why?**

A simple success message is the best practice. The deleted document no longer exists in the database, so returning the full object could mislead the client into thinking the resource is still there. A clear confirmation message like `{ "message": "Book deleted successfully" }` communicates what happened. Some APIs return a `204 No Content` status with an empty body, which is also acceptable.
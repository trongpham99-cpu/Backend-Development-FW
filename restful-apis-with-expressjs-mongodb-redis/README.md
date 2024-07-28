# Redis & Mongoose ExpressJS Demo

This is a demo application that uses Redis for caching and Mongoose for MongoDB integration with an ExpressJS server. The application provides basic CRUD operations with caching to improve performance.

## Table of Contents

- [Redis \& Mongoose ExpressJS Demo](#redis--mongoose-expressjs-demo)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
    - [Create a new user](#create-a-new-user)
    - [Get a user by ID](#get-a-user-by-id)
    - [Update a user](#update-a-user)
    - [Delete a user](#delete-a-user)
  - [Technologies](#technologies)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- Basic CRUD operations (Create, Read, Update, Delete) for user data
- Caching with Redis to improve read performance
- MongoDB integration using Mongoose

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MongoDB installed and running
- Redis installed and running

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/redis-mongoose-express-demo.git
    cd redis-mongoose-express-demo
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up your MongoDB and Redis:

    - Ensure MongoDB is running on `mongodb://localhost:27017/demo`.
    - Ensure Redis is running on `localhost:6379`.

## Usage

1. Start the server:

    ```bash
    node server.js
    ```

2. The server will be running on `http://localhost:3000`.

## API Endpoints

### Create a new user

- **URL:** `/users`
- **Method:** `POST`
- **Body:** `{ "name": "John Doe", "email": "john@example.com" }`
- **Success Response:**
    - **Code:** `200`
    - **Content:** `{ "_id": "userId", "name": "John Doe", "email": "john@example.com" }`

### Get a user by ID

- **URL:** `/users/:id`
- **Method:** `GET`
- **Success Response:**
    - **Code:** `200`
    - **Content:** `{ "_id": "userId", "name": "John Doe", "email": "john@example.com" }`

### Update a user

- **URL:** `/users/:id`
- **Method:** `PUT`
- **Body:** `{ "name": "John Smith" }`
- **Success Response:**
    - **Code:** `200`
    - **Content:** `{ "_id": "userId", "name": "John Smith", "email": "john@example.com" }`

### Delete a user

- **URL:** `/users/:id`
- **Method:** `DELETE`
- **Success Response:**
    - **Code:** `200`
    - **Content:** `{ "_id": "userId", "name": "John Doe", "email": "john@example.com" }`

## Technologies

- [ExpressJS](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.js
- [Redis](https://redis.io/) - In-memory data structure store, used as a database, cache, and message broker

## Contributing

Contributions are always welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
# Sports Blog Application
This project is a sports blog application consisting of two main parts: the client and the API. The client side is built using React, and the backend API is developed with Node.js. The application uses a local MySQL database and allows users to view sports news (football, basketball, etc.), register, and add new blog posts.

## Table of Contents
- [Installation](#installation)
- [Client](#client)
- [API](#api)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Technologies](#technologies)


## Installation
## Client
Navigate to the client directory:

```
cd client
```
Install the dependencies:
```
yarn install
```
## API
Navigate to the api directory:


```
cd api
```
Install the dependencies:


```
yarn install
``` 
Create a .env file in the api directory and configure your MySQL database settings:
```
env
Skopiuj kod
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=sports_blog
JWT_SECRET=your_jwt_secret
```
## Usage
run the following command 

```
yarn start
```

## API Endpoints:
Authentication:
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login a user
- Posts:
- GET /api/posts - Get all posts
- GET /api/posts/:id - Get a single post by ID
- POST /api/posts - Add a new post
- PUT /api/posts/:id - Update a post by ID
- DELETE /api/posts/:id - Delete a post by ID
Users:
- GET /api/users - Get all users
- GET /api/users/:id - Get a single user by ID
- PUT /api/users/:id - Update a user by ID
- DELETE /api/users/:id - Delete a user by ID

## Project Structure

Client

```
client/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── yarn.lock
```
API

```
api/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   ├── postController.js
│   └── userController.js
├── models/
│   ├── Post.js
│   ├── User.js
│   └── ...
├── routes/
│   ├── authRoutes.js
│   ├── postRoutes.js
│   └── userRoutes.js
├── .gitignore
├── index.js
├── package.json
└── yarn.lock
```
## Technologies:

### Client:
- React
- axios
- dompurify
- moment
- react-dom
- react-router-dom
- react-scripts
- sass

### API:
- bcryptjs
- cookie-parser
- express
- jsonwebtoken
- multer
- mysql

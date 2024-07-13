#Sports Blog Application
This project is a sports blog application consisting of two main parts: the client and the API. The client side is built using React, and the backend API is developed with Node.js. The application uses a local MySQL database and allows users to view sports news (football, basketball, etc.), register, and add new blog posts.

##Table of Contents
*(Installation)(#installation)
*(Client)(#client)
*(API)(#api)
*(Usage)(#usage)
*(API Endpoints)(#api-endpoints)
*(Project Structure)(project-structure)
*(Dependencies)(deoendencies)


##Installation
##Client
Navigate to the client directory:


Skopiuj kod
cd client
Install the dependencies:


yarn install
##API
Navigate to the api directory:



cd api
Install the dependencies:



yarn install
Create a .env file in the api directory and configure your MySQL database settings:

env
Skopiuj kod
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=sports_blog
JWT_SECRET=your_jwt_secret

##Usage
-Client
To start the client side, run the following command in the client directory:


yarn start
-API
To start the backend API, run the following command in the api directory:


yarn start
API Endpoints
Authentication
POST /api/auth/register - Register a new user
POST /api/auth/login - Login a user
Posts
GET /api/posts - Get all posts
GET /api/posts/:id - Get a single post by ID
POST /api/posts - Add a new post
PUT /api/posts/:id - Update a post by ID
DELETE /api/posts/:id - Delete a post by ID
Users
GET /api/users - Get all users
GET /api/users/:id - Get a single user by ID
PUT /api/users/:id - Update a user by ID
DELETE /api/users/:id - Delete a user by ID

##Project Structure


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
API


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

##Dependencies
Client
@testing-library/jest-dom: ^5.14.1
@testing-library/react: ^13.0.0
@testing-library/user-event: ^13.2.1
axios: ^1.7.2
dompurify: ^3.1.6
moment: ^2.30.1
react: ^18.3.1
react-dom: ^18.3.1
react-router-dom: ^6.24.1
react-scripts: 5.0.1
sass: ^1.77.6
web-vitals: ^2.1.0
API
bcryptjs: ^2.4.3
cookie-parser: ^1.4.6
express: ^4.19.2
jsonwebtoken: ^9.0.2
multer: ^1.4.5-lts.1
mysql: ^2.18.1
nodemon: ^3.1.4

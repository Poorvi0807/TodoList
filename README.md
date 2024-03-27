# TodoList
Backend - https://todo-list-bice-xi-29.vercel.app/
Frontend -  https://todo-list-frontend-ashy.vercel.app/
ToDoList App - Backend
This repository contains the backend codebase for the ToDoList application. The backend is responsible for handling data storage, user authentication, and managing tasks.

Technologies Used
Node.js: Backend runtime environment.
Express.js: Web application framework for Node.js used for building APIs.
MongoDB: NoSQL database used for storing task data.
Mongoose: MongoDB object modeling tool used for Node.js.
Installation
Clone this repository to your local machine:

bash
Copy code
git clone <repository-url>
Install dependencies:

Copy code
npm install
Set up environment variables:

Create a .env file in the root directory.
Define the following environment variables in the .env file:
makefile
Copy code
PORT=5000
MONGODB_URL=<your-mongodb-uri>
Secret_key=<your-jwt-secret>
Running the Application
To start the backend server, run:


npm start
The server will start running on the port specified in the .env file.

API Endpoints
POST/users/signup
POST/users/signin
GET /users/tasks: Get all tasks.
POST /users/tasks: Create a new task.
GET /users/tasks/:id: Get a specific task by ID.
PUT /users/tasks/:id: Update a task.
DELETE /users/tasks/:id: Delete a task.
Deployment
The backend is deployed on Vercel and can be accessed at https://todo-list-bice-xi-29.vercel.app/.

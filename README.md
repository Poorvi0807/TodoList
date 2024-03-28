# TodoList
## Backend - [https://todo-list-bice-xi-29.vercel.app/](https://todo-list-bice-xi-29.vercel.app/)
## Frontend - [https://todo-list-frontend-ashy.vercel.app/](https://todo-list-frontend-ashy.vercel.app/)

# ToDoList App - Backend

This repository contains the backend codebase for the ToDoList application. The backend is responsible for handling data storage, user authentication, and managing tasks.

## Technologies Used
- **Node.js**: Backend runtime environment.
- **Express.js**: Web application framework for Node.js used for building APIs.
- **MongoDB**: NoSQL database used for storing task data.
- **Mongoose**: MongoDB object modeling tool used for Node.js.

## Installation
1. Clone this repository to your local machine:
    ```bash
    git clone <repository-url>
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Define the following environment variables in the `.env` file:
     ```makefile
     PORT=5000
     MONGODB_URL=<your-mongodb-uri>
     Secret_key=<your-jwt-secret>
     ```

## Running the Application
- To start the backend server, run:
    ```bash
    npm start
    ```
  The server will start running on the port specified in the `.env` file.

## API Endpoints
- `POST /users/signup`
- `POST /users/signin`
- `GET /users/tasks`: Get all tasks.
- `POST /users/tasks`: Create a new task.
- `GET /users/tasks/:id`: Get a specific task by ID.
- `PUT /users/tasks/:id`: Update a task.
- `DELETE /users/tasks/:id`: Delete a task.

## Frontend Images
- Home Page
1. ![Frontend Image 1](https://github.com/Poorvi0807/TodoList/assets/142826656/9e786074-a159-441f-9732-03ae23c53165)
- About
2. ![Frontend Image 2](https://github.com/Poorvi0807/TodoList/assets/142826656/73778fd8-5e3f-410b-b2d6-964a705530cc)
- Sign Up
3. ![Frontend Image 3](https://github.com/Poorvi0807/TodoList/assets/142826656/5e62d67a-5eff-452c-80c2-5deca5c5973d)
- Sign In
4. ![Frontend Image 4](https://github.com/Poorvi0807/TodoList/assets/142826656/c0380b87-3b50-4a76-a91d-50a85bcf4641)
- Add Task
5. ![Frontend Image 5](https://github.com/Poorvi0807/TodoList/assets/142826656/4e39c963-d7c3-4196-ac2e-ff6cc40723f2)
- All Tasks
6. ![Frontend Image 6](https://github.com/Poorvi0807/TodoList/assets/142826656/96aa292f-a464-4e03-b0bb-814e5b0e4373)

## Deployment
The backend is deployed on Vercel and can be accessed at [https://todo-list-bice-xi-29.vercel.app/](https://todo-list-bice-xi-29.vercel.app/).

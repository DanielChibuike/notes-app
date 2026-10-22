

# Notes API

A RESTful API for managing notes, built with NestJS, TypeScript, MongoDB, and Mongoose.

## Features

* Create a note
* Retrieve all notes
* Retrieve a single note by ID
* Update an existing note
* Delete a note
* Validate incoming request data
* Store notes in MongoDB

## Technologies Used

* **NestJS** — Backend framework
* **TypeScript** — Programming language
* **MongoDB** — Database
* **Mongoose** — MongoDB object modeling
* **Class Validator** — Request data validation

## Getting Started

### Prerequisites

* Node.js and npm installed
* MongoDB installed and running

### Installation

Clone the repository:

bash
git clone https://github.com/DanielChibuike/notes-app.git
cd notes-app

Install dependencies:

bash
npm install


### Environment Configuration

Create a `.env` file in the project root and add your MongoDB connection string:

env
MONGO_URI=mongodb://localhost:27017/api-notes-app

Ensure MongoDB is running before starting the application.

### Run the Application

Start the development server:

bash
npm run start:dev


The API will be available at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint     | Description           |
| ------ | ------------ | --------------------- |
| POST   | `/notes`     | Create a new note     |
| GET    | `/notes`     | Retrieve all notes    |
| GET    | `/notes/:id` | Retrieve a note by ID |
| PATCH  | `/notes/:id` | Update a note         |
| DELETE | `/notes/:id` | Delete a note         |

## Example Requests

### Create a Note

**POST** `/notes`

Request body:

json
{
  "title": "Learn NestJS",
  "content": "Learning controllers, services, modules, decorators, dependency injection, schemas, and DTOs."
}

### Update a Note

**PATCH** `/notes/:id`

Request body:

json
{
  "title": "Master NestJS",
  "content": "Build and complete a CRUD API."
}


### Retrieve a Note

**GET** `/notes/:id`

Pass the note's ID in the URL. No request body is required.

### Delete a Note

**DELETE** `/notes/:id`

Pass the note's ID in the URL. No request body is required.

## Project Structure

The project follows NestJS's modular architecture, separating responsibilities across different components.

* **Modules:** Organize related application components.
* **Controllers:** Handle incoming HTTP requests and responses.
* **Services:** Handle application and business logic.
* **DTOs:** Define and validate the structure of incoming request data.
* **Mongoose:** Provides interaction with MongoDB.

## Security

* Keep environment variables and credentials private.
* Never commit your `.env` file to the repository.

## License

This project was developed as a Notes CRUD API assignment.

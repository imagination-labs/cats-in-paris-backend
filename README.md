# Cats in Paris Backend - Coding Challenge

## Description

This is a coding challenge project that implements a REST API backend for a mobile app called "Cats in Paris". The API generates AI-powered cat images set in various cities around the world, complete with AI-generated captions.

## Challenge Requirements

The challenge involves building a REST API with the following requirements:

- Implement a single endpoint `/api/v1/cat` that returns:
  - An AI-generated cat image
  - An AI-generated caption describing the image and guessing the city
- Use Node.js and Express.js for the backend
- Implement proper error handling and validation
- Include basic test coverage
- Follow clean code principles and best practices

## Assessment Criteria

Your solution will be evaluated based on the following criteria:

- Functionality: Does the app work as expected?
- Code Quality: Is the code clean, well-structured, and maintainable?
- Error Handling: Are edge cases and errors properly handled?
- `yarn test` passes

## Submission Requirements

- Clone this repository
- Implement the `/api/v1/cat` endpoint
- Implement basic test coverage
- Bundle your code into a .zip file or similar and send it to john@imaginationlabs.cloud

Note: You may remove the MongoDB dependency if you choose not to use a database for this task.

## Technical Implementation

The API is built using:
- Node.js (v22.16.0)
- Express.js
- Jest for testing

The main API endpoint is:

### Retrieve a new cat image and description
```bash
GET /api/v1/cat
```

Example Response:
```json
{
    "image": "http://localhost:3000/static/cat.jpg",
    "caption": "This is a cat in Paris"
}
```

## Quick Start

Prerequisites:
- Node.js (v22.16.0)
- Yarn
- MongoDB (Installation link: https://www.mongodb.com/docs/manual/installation/), alternatively you may remove the dependency on any database, as it's not required for this task

To create a project, simply run:

```bash
yarn install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

Run the app:

```bash
yarn dev
```

The app will be available at http://localhost:3000 unless you have modified the port in the .env file.

## Testing

The project includes comprehensive test coverage. To run the tests:

```bash
yarn test
```
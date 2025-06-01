# Cats in Paris Backend

## Description

Cats in Paris is a simple single page mobile app that displays a picture of a cat in a random city around the world. The image is entirely AI generated and is accompanied by an AI generated caption which assesses the image and tries to guess which city it is from.

This repository contains the backend for the app. It is a REST API built with Node.js and Express.js. The API exposes a single endpoint:

### Retrieve a new cat image and description
```bash
GET /api/v1/cat
```

Response:
```json
{
    "image": "https://example.com/image.jpg",
    "caption": "This is a cat in Paris"
}
```

## Quick Start

To create a project, simply run:

```bash
yarn install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```
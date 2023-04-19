# [reqme](https://www.npmjs.com/package/reqme) &middot; [![npm version](https://img.shields.io/npm/v/reqme.svg?style=flat)](https://www.npmjs.com/package/reqme)

reqme is a tool used to test your APIs locally using a simple interface. The tool looks directly into your `.reqme` folder from when you call `npx reqme` to display your endpoints. This means that you can commit your API requests as json files with your code. Along with this, you can directly make a HTTP request and view the response from your APIs.

## Installation and Usage

* First add a `.reqme` folder in your project

* Then you can json files representings packs

* Each pack contains a list of routes for a specific endpoint, usually separated by domain

* Finally run `npx reqme` to see a visual view of your requests & responses

## Syntax and Examples

Here is a simple pack to get you started, demonstrating a simple GET request with headers and a POST request with a body:

```json
{
  "name": "Users API",
  "url": "http://localhost:3030/api/users",
  "routes": [
    {
      "route": "/",
      "method": "GET",
      "description": "Get all users",
      "headers": {
        "Content-Type": "application/json"
      }
    },
    {
      "route": "/",
      "method": "POST",
      "description": "Create a user",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": {
        "name": "Jeff",
        "age": 28,
        "city": "Sydney"
      }
    }
  ]
}
```

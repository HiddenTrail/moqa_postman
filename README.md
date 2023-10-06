# moqa_postman
Masters of QA - Postman

## Installation

1. Install Postman
2. Install CLI software for running the tests from command-line
    - Install Postman CLI
    - Install Newman

## Running the tests

### Running tests with signed-in Postman

If you have option to sign in to Postman use this option.

With this option you have access to Postman's Collections, Environments and Variables.

- Import Collection and Environment to Postman

- Run the tests:

From Postman UI:
1. Select the Environment
2. Single request:
    - Open the request and click the Send button
3. Collection:
    - Open the Collection and click the Run button

### Running the tests with the Lightweight Postman API Client

If you cannot sign in to Postman use this option.

From Postman UI:
1. Add a GET request
    - URL: https://my-json-server.typicode.com/samuli-paasimaa-ht/fake_auth/token
    - Tests: Add code from tests_token.js
    - Run the request and save access token value
2. Add POST request
    - URL: https://my-json-server.typicode.com/samuli-paasimaa-ht/fake_auth/login
    - Add header:
        - Key: Authorization
        - Value: Bearer {AccessToken}
    - Tests: Add code from tests_login.js
3. Add GET request
    - URL: https://jsonplaceholder.typicode.com/users
    - Add header:
        - Key: Authorization
        - Value: Bearer {AccessToken}
    - Tests: Add code from tests_users.js

### Running the tests from command-line

From command-line:
1. Postman CLI:
    - Run postman from command-line and give the collection file path and environment file path as parameters
``` shell
postman collection run MOQA-API-Testing.postman_collection.json -e MOQA-API-Testing.postman_environment.json
```
2. Newman:
    - Run newman from command-line and give the collection file path and environment file path as parameters
``` shell
newman run MOQA-API-Testing.postman_collection.json -e MOQA-API-Testing.postman_environment.json
```

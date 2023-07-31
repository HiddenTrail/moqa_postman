# moqa_postman
Masters of QA - Postman

## Installation

1. Install Postman
2. Install CLI software for running the tests from command-line
    - Install Postman CLI
    - Install Newman
3. Import Collection and Environment to Postman

## Running the tests

From Postman UI:
1. Select the Environment
2. Single request:
    - Open the request and click the Send button
3. Collection:
    - Open the Collection and click the Run button

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

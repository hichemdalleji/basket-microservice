# basket-microservice
Basket Microservice is the CRUD API for baskets in a e-commerce. The reason for this API is a postgraduate work in Software Architecture at PUC MINAS, in the field of Cloud Communication Architecture.

## Deploy
**[This API was deployed at https://basket-microservice-lucashdp.herokuapp.com/](https://basket-microservice-lucashdp.herokuapp.com/)**

## Database
This API connect with a mongoDB. Any log will be registered with this database.
Your connection string is: <code>mongodb://iplaycore:t0k3n@iplaycore-shard-00-00-m6ecr.mongodb.net:27017,iplaycore-shard-00-01-m6ecr.mongodb.net:27017,iplaycore-shard-00-02-m6ecr.mongodb.net:27017/basket?ssl=true&replicaSet=iplaycore-shard-0&authSource=admin</code>

## Endpoints

#### Baskets Resources

##### GET REGION
- **[<code>GET</code> v1/public/baskets](https://github.com/lucashdp/basket-microservice/blob/master/api-documentation/baskets/GET_BASKETS.md)**
- **[<code>GET</code> v1/public/baskets/:basketId](https://github.com/lucashdp/basket-microservice/blob/master/api-documentation/baskets/GET_BASKETS_BY_ID.md)**

##### PUT REGION
- **[<code>PUT</code> v1/public/baskets/:basketId](https://github.com/lucashdp/basket-microservice/blob/master/api-documentation/baskets/PUT_BASKETS.md)**

##### POST REGION
- **[<code>POST</code> v1/public/baskets](https://github.com/lucashdp/basket-microservice/blob/master/api-documentation/baskets/POST_BASKETS.md)**

##### DELETE REGION
- **[<code>DELETE</code> v1/public/baskets/:basketId](https://github.com/lucashdp/basket-microservice/blob/master/api-documentation/baskets/DELETE_BASKETS.md)**

## Pre-Requisites

- NodeJS is a pre requisite. You will use the Node Package Manager (npm).

## Install and Run this app

- Clone the project:
    git clone https://github.com/lucashdp/basket-microservice

- Execute the command line (install dependences):
    npm install

- Run the command line (run the app):
    npm start

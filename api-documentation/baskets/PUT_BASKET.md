# Baskets Resources

    PUT v1/public/baskets/:basketId

## Description
Edit and return a basket.

## Request Parameters

- **basketId** _(required)_ — string

## Request Body

- **basket** _(required)_ — object
    - **name** _(required)_ — string
    - **authorId** _(required)_ — string
    - **publisherId** _(required)_ — string
    - **isbn** _(required)_ — string
    - **price** _(required)_ — number
    - **Others attributes...** _(optional)_

***

## Example
**Request URI**

    https://basket-microservice-lucashdp.herokuapp.com//v1/public/baskets/5bb0e04a7ca1951a9cb23d49

**Request Response**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
    "name": "Aplicações web real-time com Node.js",
    "authorId": "5465564546",
    "publisherId": "984615",
    "isbn": "6588880000",
    "price": 100.00,
    "...": ""
}
```
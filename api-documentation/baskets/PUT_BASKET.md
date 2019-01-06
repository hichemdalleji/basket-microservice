# Baskets Resources

    PUT v1/public/baskets/:basketId

## Description
Edit and return a basket.

## Request Parameters

- **basketId** _(required)_ — string

## Request Body

- **basket** _(required)_ — object
    - **clientId** _(required)_ — string
    - **productId** _(required)_ — string
    - **price** _(required)_ — number
    - **Others attributes...** _(optional)_

***

## Example
**Request URI**

    https://basket-microservice-lucashdp.herokuapp.com/v1/public/baskets/5bb0e04a7ca1951a9cb23d49

**Request Response**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d49"),
    "clientId": "5465564546",
    "productId": "984615",
    "price": 100.00,
    "...": ""
}
```
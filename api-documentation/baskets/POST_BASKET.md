# Baskets Resources

    POST v1/public/baskets

## Description
Create and return the new basket.

## Request Body

- **basket** _(required)_ — object
    - **clientId** _(required)_ — string
    - **productId** _(required)_ — string
    - **price** _(required)_ — number
    - **Others params...** _(optional)_

***

## Example
**Request URI**

    https://basket-microservice-lucashdp.herokuapp.com/v1/public/baskets

**Request Response**
``` json
{
    "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
    "clientId": "5465564546",
    "productId": "984615",
    "price": 100.00,
    "...": ""
}
```
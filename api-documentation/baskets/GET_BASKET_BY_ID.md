# Baskets Resources

    GET v1/public/baskets/:basketId

## Description
Returns the basket of reference id.

## Request Parameters

- **basketId** _(required)_ — string

***

## Example
**Request URI**

    https://basket-microservice-lucashdp.herokuapp.com/v1/public/baskets/5bb0e04a7ca1951a9cb23d50

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
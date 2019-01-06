# Baskets Resources

    GET v1/public/baskets

## Description
Returns a list of baskets.

## Example
**Request URI**

    https://basket-microservice-lucashdp.herokuapp.com/v1/public/baskets

**Request Response**
``` json
[
    {
        "_id": ObjectId("5bb0e04a7ca1951a9cb23d49"),
        "clientId": "5465564546",
        "productId": "984615",
        "price": 100.00,
        "...": ""
    },
    {
        "_id": ObjectId("5bb0e04a7ca1951a9cb23d50"),
        "clientId": "5465564546",
        "productId": "2004615",
        "price": 150.00,
        "...": ""
    }
]
```
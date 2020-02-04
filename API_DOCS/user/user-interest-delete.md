## Delete A User's Interest

**Auth required** : YES

* [Delete A User's certain interest] : `DELETE /api/:user_id/experiences/:id`

# Success Response

**Code** : `200 OK`

```json
{
    "message": "interest successfully deleted"
}
```

# Error Response

**Code** : `404 Not Found`

```json
{
    "message": "There are no interests here"
}
```
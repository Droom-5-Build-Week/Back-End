## Delete User Experience

**Auth required** : YES

* [DELETE A User's certain experience] : `DELETE /api/:user_id/experiences/:id`

# Success Response

**Code** : `200 OK`

```json
{
    "message": "experience successfully deleted"
}
```

# Error Response

**Code** : `404 Not Found`

```json
{
    "message": "There are no experiences here"
}
```
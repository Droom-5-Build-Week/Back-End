## Delete User

**Auth required** : YES

* [DELETE Users] : `DELETE /api/users/:id`

# Success Response

**Code** : `200 OK`

```json
{
    "message": "User successfully deleted"
}
```

# Error Response

**Code** : `404 Not Found`

```json
{
    "message": "Could not find user"
}
```
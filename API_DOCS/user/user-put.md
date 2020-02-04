## Put User

**Auth required** : YES

* [Update Users] : `PUT /api/users/`

* [Fields that can be updated] :  `email, password, name, location`

```json
{
    "email": "Ralph2932@example.com",
    "password": "turquoise",
    "name": "Ralph Furstrong",
    "location": "Mars"
}
```

# Success Response

**Code** : `200 OK`

```json
{
    "id": 1,
    "email": "Ralph2932@example.com",
    "password": "turquoise",
    "name": "Ralph Furstrong",
    "location": "Mars"
}
```

# Error Response

**Code** : `500 Server Error`

```json
{
 	"message": "Could not update user"
}
```
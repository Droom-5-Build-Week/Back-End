## Update Company

**Auth required** : YES

* [Update Users] : `PUT /api/companies/:id`

* [Fields that can be updated] :  `email, password, name, location`

```json
{
    "email": "Ralph2932@example.com",
    "password": "turquoise",
    "name": "The Vander Steel Company",
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
    "name": "The Vander Steel Company",
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
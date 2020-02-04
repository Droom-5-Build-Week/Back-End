## Put User Interest

**Auth required** : YES

* [Put A User Interest] : `PUT /api/:user_id/interests/:id`

* [Fields that can be created] :  `topic`

```json
{
  "topic": "writing",
}
```

# Success Response

**Code** : `201 Created`

```json
{
    "id": 19,
    "topic": "writing",
    "user_id": 1
}

```

# Error Response

**Code** : `500 Server Error`

```json
{
 	"specified error"
}
```
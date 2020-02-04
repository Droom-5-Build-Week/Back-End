## Create User Interest

**Auth required** : YES

* [POST A User Interest] : `POST /api/:user_id/interests`

* [Fields that can be created] :  `topic`

```json
{
  "topic": "reading",
}
```

# Success Response

**Code** : `201 Created`

```json
[
    {
        "id": 19,
        "topic": "multi-byte",
        "user_id": 1
    },
    {
        "id": 73,
        "topic": "solid state",
        "user_id": 1
    },
    {
        "id": 101,
        "topic": "hacking",
        "user_id": 1
    }
]
```

# Error Response

**Code** : `500 Server Error`

```json
{
 	"specified error"
}
```
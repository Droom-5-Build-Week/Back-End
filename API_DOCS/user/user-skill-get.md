## Read All Skills of a User

**Auth required** : YES

* [GET Users] : `GET /api/:user_id/skills`

# Success Response

**Code** : `200 OK`

```json
[
    {
        "id": 19,
        "skill_name": "javascript",
        "user_id": 1
    },
    {
        "id": 32,
        "skill_name": "html",
        "user_id": 1
    },
    {
        "id": 49,
        "skill_name": "css",
        "user_id": 1
    },
]
```

# Error Response

**Code** : `500 Server Error`

```json
{ 
    "message": "error getting interests"
}
```

## Read one Interest of a User

**Auth required** : YES

* [GET User] : `GET /:user_id/skills/:id`

# Success Response

**Code** : `200 OK`

```json

{
        "id": 19,
        "skill_name": "javascript",
        "user_id": 1
}
   
```

# Error Response

**Code** : `500 Server Error`

```json
{
    "message": "Could not complete task"
}
```
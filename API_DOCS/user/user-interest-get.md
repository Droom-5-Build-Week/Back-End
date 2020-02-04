## READ All Interests of a User

**Auth required** : YES

* [GET Users] : `GET /api/:user_id/interests`

# Success Response

**Code** : `200 OK`

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
    "message": "error getting interests" 
}
```

## Show one Interest of a User

**Auth required** : YES

* [GET User] : `GET /:user_id/interests/:id`

# Success Response

**Code** : `200 OK`

```json

{
    "id": 53,
    "company_name": "Dietrich - Yundt",
    "job_title": "Director",
    "user_id": 1
},
   
```

# Error Response

**Code** : `500 Server Error`

```json
{
    "message": "Could not complete task"
}
```
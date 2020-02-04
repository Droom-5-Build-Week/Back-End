## Read All Experience of a User

**Auth required** : YES

* [GET Users] : `GET /api/:user_id/experiences`

# Success Response

**Code** : `201 Created`

```json
[
    {
        "id": 53,
        "company_name": "Dietrich - Yundt",
        "job_title": "Director",
        "user_id": 1
    },
    {
        "id": 91,
        "company_name": "Roberts and Sons",
        "job_title": "Supervisor",
        "user_id": 1
    },
    {
        "id": 101,
        "company_name": "Google",
        "job_title": "Backend Architect",
        "user_id": 1
    }
]
```

# Error Response

**Code** : `500 Server Error`

```json
{
 	"message": "Could not complete task"
}
```

## Read one Experience of a User

**Auth required** : YES

* [GET User] : `GET /:user_id/experiences/:id`

# Success Response

**Code** : `200 OK`

```json
[
    {
        "id": 53,
        "company_name": "Dietrich - Yundt",
        "job_title": "Director",
        "user_id": 1
    },
    {
        "id": 91,
        "company_name": "Roberts and Sons",
        "job_title": "Supervisor",
        "user_id": 1
    },
    {
        "id": 101,
        "company_name": "Google",
        "job_title": "Backend Architect",
        "user_id": 1
    }
]
```

# Error Response

**Code** : `500 Server Error`

```json
{
    "message": "Could not complete task"
}
```
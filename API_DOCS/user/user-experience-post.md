## Create User Experience

**Auth required** : YES

* [POST A User Experience] : `POST /api/:user_id/experiences`

* [Fields that can be created] :  `company_name, job_title`

```json
{
  "company_name": "Google",
  "job_title": "Backend Architect"
}
```

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
 	"specified error"
}
```
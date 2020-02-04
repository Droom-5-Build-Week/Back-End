## Update User Experience

**Auth required** : YES

* [PUT A User Experience] : `PUT /api/:user_id/experiences/:id`

* [Fields that can be updated] :  `company_name, job_title`

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
]
```

# Error Response

**Code** : `500 Server Error`

```json
{
 	"specified error"
}
```
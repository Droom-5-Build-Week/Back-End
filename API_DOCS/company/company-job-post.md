## Post Job

**Auth required** : YES

* [Post Job] : `POST /api/companies/:company_id/jobs`

* [Fields required] :  `position_name, type, job_bio, duration, company_id`

```json
{
    "id": 8,
    "position_name": "Human Directives Developer",
    "type": "Technician",
    "job_bio": "Eveniet omnis iure dolor. Laboriosam quia ut dolorem suscipit quod. Molestiae consequuntur animi provident consequatur repellendus est vitae.",
    "duration": "long-term",
    "company_id": 9
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
 	"message": "Error posting job"
}
```